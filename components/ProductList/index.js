import useSWR from "swr";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();
  const { data, isLoading } = useSWR("/api/products");
  if (!data) return;
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>Available Fishes</h2>
      <ul>
        {data.map((product) => (
          <li key={product._id}>
            <button
              type="button"
              onClick={() => router.push(`/${product._id}`)}
            >
              {product.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
