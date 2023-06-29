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
    <tr>
        <td>
        <textarea id="story" name="story" rows="5" cols="33"> It was a dark and stormy night...</textarea>
        </td>
        <td>
        <label htmlFor="name">40</label>
        </td>
        <td>
       <table>
                
                    
        {data.map((dept) => (
            <>
            <tr>
            <td>
            <label htmlFor="Title" id={dept.Level_name} key={dept._id}>
              {dept.Level_name}
              </label> 
            </td>
             
                                  <td>
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
                                  <button type="button" class="btn btn-outline-success btn-xs">Dec</button>
                                  </td>
                                  </tr>
                                  </>
        ))}
                                  
                                   

            

                    
               
            </table>
        </td>
    </tr>
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