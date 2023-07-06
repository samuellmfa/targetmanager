import Layout from '../../../components/layout'
import DepartmentsList from '../../../components/departmentsList'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import Titlebar from '../component/Menu/titlebar';
import _footer from '../component/Footer/footer';
import useSWR from "swr";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from '../../../components/ProductList';
import React, { useState } from "react";
import { uid } from 'uid';
export default  function Employee( {username, created} )
{
  
  const router = useRouter();   
  
  const [formData, setFormData] = useState({
    // Initialize form data
    _id: "",
    Month_target: "",
    Weight: "",
    Organization: "",
    username: "",
    Evaluation: "",
    Weektwo_evaluationResult: "",
    Year_target_id: "",
  });
  const { id } = router.query
  const { data, error, isLoading, isValidating, mutate } = useSWR("/api/weeks");
  console.log("load data :",data)

  if (!data) return;
 
  if (isLoading) {
    return <h1>Loading...</h1>;
  }



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Extract the values from the form
    const form = event.target;
    const formData = new FormData(form);
  
    // Convert the form data to an object
    const formValues = {};
    for (let [key, value] of formData.entries()) {
      formValues[key] = value;
    }
  
    // Send the form values to the server using an AJAX request or fetch API
    fetch('/api/weekly/', {
      method: 'PUT',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          // Handle the successful response
          console.log('Form submitted successfully!');
        } else {
          // Handle errors
          console.log('Form submission failed.');
        }
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
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
<Titlebar  username={username}/>

            
            <h2>Evaluate Your Weekly Tasks</h2>
            <form action="" method="PUT">

            <table border={1}  class="table table-bordered">
  {data.map((mon, index) => (
    <tr key={mon._id}>
      <td>
        <textarea id={mon._id} name={mon._id} rows="5" cols="33">
          {mon.Month_target}
        </textarea>
      </td>

      <td>Evaluate</td>

      <td>
        <label htmlFor="weight">{mon.Weight}</label>
      </td>

      <td>
        <div
          key={`BTN-${mon._id}`}
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
         
         <React.Fragment>
  <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" className="btn-check" name={`btnradio-${index}`} id={`zero${mon._id}`} autoComplete="off" value="0"    data-val = "0" defaultChecked/>
    <label className={`btn btn-outline-success btn-xs ${mon.evaluationone && mon.evaluationone.zero === 0 ? 'active' : ''}`} htmlFor={`zero${mon._id}`}>0%</label>

    <input type="radio" className="btn-check" name={`btnradio-${index}`} id={`twentyfive${mon._id}`} autoComplete="off" value="25"   data-val = "25" />
    <label className={`btn btn-outline-success btn-xs ${mon.evaluationone && mon.evaluationone.twentyfive === 25 ? 'active' : ''}`} htmlFor={`twentyfive${mon._id}`}>25%</label>

    <input type="radio" className="btn-check" name={`btnradio-${index}`} id={`fifty${mon._id}`} autoComplete="off" value="50"    data-val = "50"/>
    <label className={`btn btn-outline-success btn-xs ${mon.evaluationone && mon.evaluationone.fifty === 50 ? 'active' : ''}`} htmlFor={`fifty${mon._id}`}>50%</label>

    <input type="radio" className="btn-check" name={`btnradio-${index}`} id={`seventyfive${mon._id}`} autoComplete="off" value="75"    data-val = "75"/>
    <label className={`btn btn-outline-success btn-xs ${mon.evaluationone && mon.evaluationone.seventyfive === 75 ? 'active' : ''}`} htmlFor={`seventyfive${mon._id}`}>75%</label>

    <input type="radio" className="btn-check" name={`btnradio-${index}`} id={`hundred${mon._id}`} autoComplete="off" value="100"    data-val = "100"/>
    <label className={`btn btn-outline-success btn-xs ${mon.evaluationone && mon.evaluationone.hundred === 100 ? 'active' : ''}`} htmlFor={`hundred${mon._id}`}>100%</label>
  </div>
</React.Fragment>

        </div>
      </td>

      <td>{/* Add your other form elements here */}</td>
    </tr>
  ))}
</table>


<br /><br /><br />

<input type="" value="Evaluate weeky tasks" className="btn btn-outline-success btn-xs" />
</form>
   

    <ProductList/>

    <_footer/>
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
    return { props: {Organization,username}, };
};