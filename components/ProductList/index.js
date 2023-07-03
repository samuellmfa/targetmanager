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
      <h3>Department staff Evaluation</h3>
      <ul>
        {data.employees.map((emp)=>
          
          <li key={emp._id}>
            <button
              type="button"
              onClick={() => router.push(`/${emp._id}`)}  class="btn btn-outline-success btn-xs"
            >
              {emp.username}
            </button>
          </li>
          )
        }
      </ul>
    </>
  );
}
