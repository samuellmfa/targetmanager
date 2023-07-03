import Layout from '../../../components/layout'
import DepartmentsList from '../../../components/departmentsList'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import useSWR from "swr";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.css';
import TargetForm from '../../../components/TargetForm';
import ProductList from '../../../components/ProductList';
import React, { useState } from "react";
export default  function Employee( {username, created} )
{
    const router = useRouter();
    const { id } = router.query
    const { data, error, isLoading, isValidating, mutate } = useSWR("/api/targets");
    console.log("data :",data)

//     const initialCheckboxValues = data?.map((tar) =>
//   tar.employees.map((emp) => ({
//     id: `${tar._id}-${emp._id}`,
//     values: [
//       emp.Jan,
//       emp.Feb,
//       emp.Mar,
//       emp.Apr,
//       emp.May,
//       emp.Jun,
//       emp.Jul,
//       emp.Aug,
//       emp.Sep,
//       emp.Oct,
//       emp.Nov,
//       emp.Dec,
//     ],
//   }))
// );

// const [checkboxValues, setCheckboxValues] = useState(initialCheckboxValues);
  

//   const handleCheckboxChange = (targetId) => {
//     // Find the checkbox in the array
//     const updatedCheckboxValues = checkboxValues.map((tar) =>
//       tar.map((emp) =>
//         emp.id === targetId ? { ...emp, checked: !emp.checked } : emp
//       )
//     );

//     // Update the state with the new checkbox values
//     setCheckboxValues(updatedCheckboxValues);
//   };

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
 {data.map((tar, index) => (
    <tr key={tar._id}>
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
                                  <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                  <div class="form-check">
                                  <div className="btn-group-toggle" data-toggle="buttons">
                                   <div class="btn-group mr-2" role="group" aria-label="First group">
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.Jan} id={"Jan" + tar._id + emp._id + "Jan"} name={"Jan" + tar._id + emp._id + "Jan"}  onChange={() => handleClick(`Jan${tar._id}${emp._id}Jan`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Jan ? 'active' : ''}`} id={"Jan" + tar._id + emp._id + "Jan"} name={"Jan" + tar._id + emp._id + "Jan"} htmlFor={"Jan" + tar._id + emp._id + "Jan"} aria-pressed={emp.Nov}>Jan</label>
                                       
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.Feb} id={"Feb" + tar._id + emp._id + "Feb"} name={"Feb" + tar._id + emp._id + "Feb"}  onChange={() => handleClick(`Feb${tar._id}${emp._id}Feb`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Feb ? 'active' : ''}`} value={emp.Feb} id={"Feb" + tar._id + emp._id + "Feb"} name={"Feb" + tar._id + emp._id + "Feb"} htmlFor={"Feb" + tar._id + emp._id + "Feb"}>Feb</label>
                                         
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.Mar} id={"Mar" + tar._id + emp._id + "Mar"} name={"Mar" + tar._id + emp._id + "Mar"}  onChange={() => handleClick(`Mar${tar._id}${emp._id}Mar`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Mar ? 'active' : ''}`} value={emp.Feb} id={"Mar" + tar._id + emp._id + "Mar"} name={"Mar" + tar._id + emp._id + "Mar"} htmlFor={"Mar" + tar._id + emp._id + "Mar"}>Mar</label>
                                        
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.Apr} id={"Apr" + tar._id + emp._id + "Apr"} name={"Apr" + tar._id + emp._id + "Apr"} onChange={() => handleClick(`Apr${tar._id}${emp._id}Apr`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Apr ? 'active' : ''}`} value={emp.May} id={"Apr" + tar._id + emp._id + "Apr"} name={"Apr" + tar._id + emp._id + "Apr"}  htmlFor={"Apr" + tar._id + emp._id + "May"}>Apr</label>
                                        
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.May} id={"May" + tar._id + emp._id + "May"} name={"May" + tar._id + emp._id + "May"}  onChange={() => handleClick(`May${tar._id}${emp._id}May`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.May ? 'active' : ''}`} value={emp.May} id={"May" + tar._id + emp._id + "May"} name={"May" + tar._id + emp._id + "May"}  htmlFor={"May" + tar._id + emp._id + "May"}>May</label>
                                        
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.Jun} id={"Jun" + tar._id + emp._id + "Jun"} name={"Jun" + tar._id + emp._id + "Jun"}  onChange={() => handleClick(`Jun${tar._id}${emp._id}Jun`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Jun ? 'active' : ''}`} value={emp.Feb} id={"Jun" + tar._id + emp._id + "Jun"} name={"Jun" + tar._id + emp._id + "Jun"}  htmlFor={"Jun" + tar._id + emp._id + "Jun"}>Jun</label>
                                        
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.Jul} id={"Jul" + tar._id + emp._id + "Jul"} name={"Jul" + tar._id + emp._id + "Jul"}  onChange={() => handleClick(`Jul${tar._id}${emp._id}Jul`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Jul ? 'active' : ''}`} value={emp.Feb} id={"Jul" + tar._id + emp._id + "Jul"} name={"Jul" + tar._id + emp._id + "Jul"}  htmlFor={"Jul" + tar._id + emp._id + "Jul"}>Jul</label>
                                        
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.Aug} id={"Aug" + tar._id + emp._id + "Aug"} name={"Aug" + tar._id + emp._id + "Aug"}  onChange={() => handleClick(`Aug${tar._id}${emp._id}Aug`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Aug ? 'active' : ''}`} value={emp.Feb} id={"Aug" + tar._id + emp._id + "Aug"} name={"Aug" + tar._id + emp._id + "Aug"}  htmlFor={"Aug" + tar._id + emp._id + "Aug"}>Aug</label>
                                       
                                        <input type="checkbox" className="btn-check btn-xs" value={emp.Sep} id={"Sep" + tar._id + emp._id + "Sep"} name={"Sep" + tar._id + emp._id + "Sep"}  onChange={() => handleClick(`Sep${tar._id}${emp._id}Sep`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Sep ? 'active' : ''}`} value={emp.Feb} id={"Sep" + tar._id + emp._id + "Sep"} name={"Sep" + tar._id + emp._id + "Sep"}  htmlFor={"Sep" + tar._id + emp._id + "Sep"}>Sep</label>
                                        
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.Oct} id={"Oct" + tar._id + emp._id + "Oct"} name={"Oct" + tar._id + emp._id + "Oct"}  onChange={() => handleClick(`Oct${tar._id}${emp._id}Oct`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Oct ? 'active' : ''}`} value={emp.Feb} id={"Oct" + tar._id + emp._id + "Oct"} name={"Oct" + tar._id + emp._id + "Oct"}  htmlFor={"Oct" + tar._id + emp._id + "Oct"}>Oct</label>
                                        
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.Nov} id={"Nov" + tar._id + emp._id + "Nov"} name={"Nov" + tar._id + emp._id + "Nov"}  onChange={() => handleClick(`Nov${tar._id}${emp._id}Nov`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Nov ? 'active' : ''}`} value={emp.Feb} id={"Nov" + tar._id + emp._id + "Nov"} name={"Nov" + tar._id + emp._id + "Nov"}  htmlFor={"Nov" + tar._id + emp._id + "Nov"}>Nov</label>
                                        
                                         <input type="checkbox" className="btn-check btn-xs" value={emp.Dec} id={"Dec" + tar._id + emp._id + "Dec"} name={"Dec" + tar._id + emp._id + "Dec"}  onChange={() => handleClick(`Dec${tar._id}${emp._id}Dec`)}/>
                                         <label className={`btn btn-outline-success btn-xs ${emp.Dec ? 'active' : ''}`} value={emp.Dec} id={"Dec" + tar._id + emp._id + "Dec"} name={"Dec" + tar._id + emp._id + "Dec"}  htmlFor={"Dec" + tar._id + emp._id + "Dec"}>Dec</label>
                                      </div>
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