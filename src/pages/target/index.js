import Layout from '../../../components/layout'
import DepartmentsList from '../../../components/departmentsList'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import useSWR from "swr";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.css';
import TargetForm from '../../../components/TargetForm';
import ProductList from '../../../components/ProductList';
export default  function Employee( {username, created} )
{
    const router = useRouter();
    const { id } = router.query
    const { data, error, isLoading, isValidating, mutate } = useSWR("/api/targets");
    console.log("data :",data)
    if (!data) return;
   
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    async function handleAddClick(event) {
        event.preventDefault();
     
        // const formData = new FormData(event.target);
        // const productData = Object.fromEntries(formData);
    
        const response = await fetch("/api/targets/crud", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        });
    
        if (response.ok) {
          await response.json();
          mutate();
        } else {
          console.error(response.status);
        }
      }
    //   async function handleDeleteTarget(event) {
    //     event.preventDefault();
    //      console.log(event.target.value)
    //     // const formData = new FormData(event.target);
    //     // const productData = Object.fromEntries(formData);
    //      const id = event.target.value;
    //      console.log(event.target.dataset.id)
    //     const response = await fetch("/api/targets/crud/", {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(id),
    //     });
    
    //     if (response.ok) {
    //       await response.json();
    //       mutate();
    //     } else {
    //       console.error(response.status);
    //     }
    //   }
    const handleDeleteTarget= async (id) =>{
      console.log(id)
     const response = await fetch(`/api/targets/deleteUpdate/${id}`, {
             method: "DELETE"
           });
             
           if (response.ok) {
               await response.json();
               mutate();
             } else {
               console.error(response.status);
             }
   } 
    return (
        
        <Layout pageTitle="employee">
            <Link href="/">Home</Link><br/>
 
            <h3>Plan your annual tasks</h3>
            <form action='/api/profiles/employee' method='POST'>
 <table border={1}>
 {data.map((tar) => (
    <tr>
        <td key={tar._id}>
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
                                  <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                   <div class="form-check">
                                   <div class="btn-group mr-2" role="group" aria-label="First group">
                                         <input type="checkbox" class="btn-check btn-xs"  value="Jan" id={tar._id+emp._id+"Jan"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Jan"}> Jan </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="Feb" id={tar._id+emp._id+"Feb"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Feb"}> Feb </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="Mar" id={tar._id+emp._id+"Mar"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Mar"}> Mar </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="Apr" id={tar._id+emp._id+"Apr"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Apr"}> Apr </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="May" id={tar._id+emp._id+"May"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"May"}> May </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="Jun" id={tar._id+emp._id+"Jun"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Jun"}> Jun </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="Jul" id={tar._id+emp._id+"Jul"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Jul"}> Jul </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="Aug" id={tar._id+emp._id+"Aug"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Aug"}> Aug </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="Sep" id={tar._id+emp._id+"Sep"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Sep"}> Sep </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="Oct" id={tar._id+emp._id+"Oct"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Oct"}> Oct </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="Nov" id={tar._id+emp._id+"Nov"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Nov"}> Nov </label>
                                         <input type="checkbox" class="btn-check btn-xs"  value="Dec" id={tar._id+emp._id+"Dec"}/>
                                         <label class="btn btn-outline-success btn-xs" for={tar._id+emp._id+"Dec"}> Dec </label>
                                      </div>
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
        <button onClick={handleAddClick} class="btn btn-outline-success btn-xs">+</button>
        <button type="button" onClick={()=>handleDeleteTarget(tar._id)} class="btn btn-outline-success btn-xs">-</button>
        </td>
    </tr>
    ))}
 </table>
 <br></br><br></br><br></br>
 <input type="submit" value= "Upload Plan" class="btn btn-outline-success btn-xs"/>
    </form>
    <ProductList/>

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