import Layout from '../../../components/layout'
import DepartmentsList from '../../../components/departmentsList'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import useSWR from "swr";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.css';
export default  function Employee( {username, created} )
{
    const router = useRouter();
    const { msg } = router.query
    const { data, isLoading } = useSWR("/api/targets");
    console.log("data :",data)
    if (!data) return;
   
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
        
        <Layout pageTitle="employee">
            <Link href="/">Home</Link><br/>
            {msg ?
                <h3 className="red">{msg}</h3>
            :
                <></>
            }
            <h3>Plan your annual tasks</h3>
            <form action='/api/profiles/employee' method='POST'>
 <table border={1}>
 {data.map((tar) => (
    <tr>
        <td>
        <textarea id="story" name="story" rows="5" cols="33">{tar.Year_target}</textarea>
        </td>
        <td>
        <label htmlFor="name">{tar.Weight}</label>
        </td>
        <td>
       
                <table> 
              {tar.employees.map((emp)=>
              (
              <>

             
            <tr>
            <td> 
            <label>{emp.name}
                </label> 
            </td>
             
                                  <td>
                                  {/* <button type="button" class="btn btn-primary btn-xs">Jan{emp.Jan}</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">Feb</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">Mar</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">Apr</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">May</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">Jun</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">Jul</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">Aug</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">Sep</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">Oct</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">Nov</button>
                                  <button type="button" class="btn btn-outline-success btn-xs">Dec</button> */}
                                  <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                   <div class="btn-group mr-2" role="group" aria-label="First group">
                                         <button type="button" class="btn btn-outline-success btn-xs">Jan</button>
                                         <button type="button" class="btn btn-outline-success btn-xs">Feb</button>
                                         <button type="button" class="btn btn-outline-success btn-xs">Mar</button>
                                         <button type="button" class="btn btn-outline-success btn-xs">Apr</button>
                                         <button type="button" class="btn btn-outline-success btn-xs">May</button>
                                         <button type="button" class="btn btn-outline-success btn-xs">Jun</button>
                                         <button type="button" class="btn btn-outline-success btn-xs">Jul</button>
                                         <button type="button" class="btn btn-outline-success btn-xs">Aug</button>
                                         <button type="button" class="btn btn-outline-success btn-xs">Sep</button>
                                         <button type="button" class="btn btn-outline-success btn-xs">Oct</button>
                                         <button type="button" class="btn btn-outline-success btn-xs">Nov</button>
                                         <button type="checkbox" class="btn btn-outline-success btn-xs">Dec</button>
                                         
                                         </div>
  
                                         </div>
                                      
                                  </td>
                                  <td>
                                  
                                  </td>
                                  </tr>
                                  </>
                                   )
                                   )}
            </table>
        </td>
        <td>
        <button type="button" class="btn btn-outline-success btn-xs">+</button>
        </td>
    </tr>
    ))}
 </table>
 <br></br><br></br><br></br><input type="submit" value="Create Account"/>
    </form>


    </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    var Organization = getCookie('Organization', { req, res });
    var IsEmployee = getCookie('IsEmployee', { req, res });
    console.log(Organization,username,IsEmployee)
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