import ProductList from "../../../components/ProductList";
import ProductForm from "../../../components/ProductForm";
import useSWR from "swr";
import { useRouter } from "next/router";



export default function HomePage() {

  return (
    <>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      <ProductForm/>
      <hr />
      <ProductList/>
    </>
  );
}
