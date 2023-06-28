import Layout from '../../../components/layout'
import DepartmentsList from '../../../components/departmentsList'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import useSWR from "swr";
import { useRouter } from "next/router";
export default  function Employee( {username, created} )
{
    const router = useRouter();
    const { msg } = router.query
    const { data, isLoading } = useSWR("/api/departments");
    console.log("data :",data)
    if (!data) return;
   
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    async function handleListDepartment() {
        const response = await fetch("/api/employee", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data_exapmle),
        });
    
        if (response.ok) {
          await response.json();
          products.mutate();
        } else {
          console.error(response.status);
        }
      }



    return (
        
        <Layout pageTitle="employee">
            <Link href="/">Home</Link><br/>
            {msg ?
                <h3 className="red">{msg}</h3>
            :
                <></>
            }
            <h3>Employee's Account Registration</h3>
            <form action='/api/employee' method='POST'>
   <h3>Create employee Account </h3>
    <label htmlFor="name">Full name</label> <input type="text" name="name" id="name"></input><br></br>
    <label htmlFor="Title">Job Title</label> <input type="text" name="Title" id="Title"></input><br></br>
    <label htmlFor="Department">
       Department:
          <select id="Department" name="Department">
          {data.map((dept) => (
            <option value={dept.name} key={dept._id}>
              {dept.name}
          </option>
        ))}
            <option value="GBP">GBP</option>
          </select>
        </label> <br></br><br></br>
    <label htmlFor="IsHead">Is the Head of the department</label> <input type="checkbox" name="IsHead" id="IsHead"></input><br></br><br></br>
    <label htmlFor="username">username</label> <input type="text" name="username" id="username"></input><br></br>
    <label htmlFor="password">password</label>  <input minLength="5" name="password" id="password" type="password" placeholder='password' required></input><br/><br></br>
    <label htmlFor="passwordagain">confirm</label><input minLength="5" name="passwordagain" id="passwordagain" type="password" placeholder='password again' required></input><br/>
    <input type="submit" value="Create Account"/>
    </form>
 












    </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    // if (username != undefined){
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: "/account/employee"
    //         }
    //     }
    // }
    return { props: {username:false} };
};