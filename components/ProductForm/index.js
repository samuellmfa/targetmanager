import { useRouter } from "next/router";
import useSWR from "swr";
export default function ProductForm({onSubmit}) {
  // const products = useSWR("/api/products");
  const products = useSWR("/api/products");
  
  console.log("data p",products)

  async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const productData = Object.fromEntries(formData);
  const response = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (response.ok) {
    const product = await response.json();
    console.log("Product created:", product);
    event.target.reset();
    products.mutate();
  }
  if (!response.ok) {
    const error = await response.json();
    console.log("Error:", error, response.status);
  }
}
    return (
      <form onSubmit={handleSubmit}>
        <h2>Add a new Fish</h2>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="description">
          Description:
          <input type="text" id="description" name="description" />
        </label>
        <label htmlFor="price">
          Price:
          <input type="number" id="price" name="price" min="0" />
        </label>
        <label htmlFor="currency">
          Currency:
          <select id="currency" name="currency">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
}
