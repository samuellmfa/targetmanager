import Layout from '../../../components/layout'
import DepartmentsList from '../../../components/departmentsList'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import useSWR from "swr";
import { useRouter } from "next/router";
import React from 'react'
import { Chart } from 'react-google-charts';

export const chart_data = [
  
];

export const options = {
  allowHtml: true,
};
export default  function Employee( {username, created} )
{
    const router = useRouter();
    const { msg } = router.query
    const { data, isLoading } = useSWR("/api/departments");
    if (!data) return;
   
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    // chart_data.push(["sami", "Mike", ""]);  
   
    
    {data.map((dept) => 
         chart_data.push([dept.Level_name, dept.Parent_department, ""])
)}
    return (
        
        <Layout pageTitle="employee" >
            <Link href="/">Home</Link><br/>
            {msg ?
                <h3 className="red">{msg}</h3>
            :
                <></>
            }
            <form action='/api/departments' method='POST'>
   <h3>Register Organization structure </h3>
    <label htmlFor="Level_name">Employee Position</label> <input type="text" name="Level_name" id="Level_name"></input><br></br>
    <label htmlFor="Level_Department">Department Name</label> <input type="text" name="Level_Department" id="Level_Department"></input><br></br>
    <label htmlFor="Parent_department">
    Parent Department:
          <select id="Parent_department" name="Parent_department">
          {data.map((dept) => (
            <option value={dept.Level_name} key={dept._id}>
              {dept.Level_name}
          </option>
        ))}
          </select>
        </label> <br></br><br></br>
    <input type="submit" value="Create Account"/>
    </form>
    <br></br>   
    <br></br>
    <br></br>
<hr></hr>
    <Chart
      chartType="OrgChart"
      data={chart_data}
      options={options}
      width="100%"
      height="900px"
    />
          
        
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
    //             destination: "/profile/employee"
    //         }
    //     }
    // }
    return { props: {username:false} };
};