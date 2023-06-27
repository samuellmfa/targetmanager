import useSWR from "swr";
import { useRouter } from "next/router";

export default function DepartmentsList() {
  const router = useRouter();
  const { data, isLoading } = useSWR("/api/departmentlist");

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
        {data.map((dept) => (
          <li key={dept.Department}>
              {dept.name}
          </li>
        ))}
    </>
  );
}