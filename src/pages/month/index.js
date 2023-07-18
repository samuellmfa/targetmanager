import Layout from "../../../components/layout"
import DepartmentsList from "../../../components/departmentsList"
import { getCookie } from "cookies-next";
import Link from "next/link"
import Titlebar from "../component/Menu/titlebar";
import _footer from "../component/Footer/footer";
import useSWR from "swr";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
export default  function Employee( {username, created} )
{
    const router = useRouter();
    const { id } = router.query
    const { data, error, isLoading, isValidating, mutate } = useSWR("/api/months");
    console.log("data :",data)
    const handleClick = (targetId) => {
    mutate();
  };
  

    if (!data) return;
   
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    async function handleAddClick(event) {
        event.preventDefault();
     
        // const formData = new FormData(event.target);
        // const productData = Object.fromEntries(formData);
    
        const response = await fetch("/api/months", {
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
        
        <Layout pageTitle="month">
            <br />
<br />
<br />
<br />
<br />
<br />
<br />
<Titlebar />
 
            <h3><strong>Plan Your Monthly Tasks</strong></h3>
 
            <form action="" method="POST">
            <table border={1}  class="table table-bordered table-striped">

 {data.map((mon, index) => (
    <tr key={mon._id}>
        <td>
        <textarea id="story" name="story" rows="5" cols="33">{mon.Month_target}</textarea>
        </td>
        <td>
        <label htmlFor="name">{mon.Weight}</label>
        </td>
       
             
         <td>
                        <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                              <div class="form-check">
                                  <div className="btn-group-toggle" data-toggle="buttons">
                                  <div class="btn-group mr-2" role="group" aria-label="First group">
                                         <input type="checkbox" className="btn-check btn-xs" value={mon.Weekone_plan} id={mon._id} name={mon._id}  onChange={() => handleClick(`${mon._id}`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${mon.Weekone_plan ? "active" : ""}`}  value={mon.Weekone_plan} id={mon._id} name={mon._id} htmlFor={mon._id} aria-pressed={mon.Weekone_plan}>Week 1</label>
                                       
                                         <input type="checkbox" className="btn-check btn-xs" value={mon.Weektwo_plan} id={mon._id} name={mon._id}  onChange={() => handleClick(`${mon._id}`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${mon.Weektwo_plan ? "active" : ""}`} value={mon.Weektwo_plan} id={mon._id} name={mon._id} htmlFor={mon._id} aria-pressed={mon.Weektwo_plan}>Week 2</label>
                                         
                                         <input type="checkbox" className="btn-check btn-xs" value={mon.Weekthree_plan} id={mon._id} name={mon._id}  onChange={() => handleClick(`${mon._id}`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${mon.Weekthree_plan ? "active" : ""}`} value={mon.Weekthree_plan} id={mon._id} name={mon._id} htmlFor={mon._id} aria-pressed={mon.Weekthree_plan}>Week 3</label>
                                        
                                         <input type="checkbox" className="btn-check btn-xs" value={mon.Weekfour_plan} id={mon._id} name={mon._id} onChange={() => handleClick(`${mon._id}`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${mon.Weekfour_plan ? "active" : ""}`} value={mon.Weekfour_plan} id={mon._id} name={mon._id}  htmlFor={mon._id} aria-pressed={mon.Weekfour_plan}>Week 4</label>
                                      </div>
                                    </div>
                                    </div>
                        </div>
          </td>
        <td>
        <button onClick={handleAddClick} class="btn btn-outline-success btn-xs">+</button>
        <button type="button" onClick={()=>handleDeleteTarget(tar._id)} class="btn btn-outline-success btn-xs">-</button>
        </td>
    </tr>
    ))}
 </table>
 <br></br><br></br><br></br>
 <input type="" value= "Upload Plan" class="btn btn-outline-success btn-xs"/>
    </form>
    <_footer/>
    </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie("username", { req, res });
    var Organization = getCookie("Organization", { req, res });
    var IsEmployee = getCookie("IsEmployee", { req, res });
    console.log(Organization,username,IsEmployee)
    // if (username != undefined){
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: "/profile/employee"
    //         }
    //     }
    // }
    return { props: {Organization,username}, };
};