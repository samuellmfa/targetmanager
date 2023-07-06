import React from "react"
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.css';
import { getCookie } from 'cookies-next';
import Layout from '../../../../components/layout'
import { faHome, faUser, faUserCircle, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Titlebar( {username,Organization} )
{

    return  (  
      <header>

{username ?
        <>
           <h1 id="nav-title"><a href="/performance"><div><b><i>PERFORMANCE EVALUATION</i></b><br /><h3><strong>________</strong></h3></div></a></h1>
        </>: 
        <>
           <h1 id="nav-title"><a href="/"><div><b><i>PERFORMANCE EVALUATION</i></b><br /><h3><strong>________</strong></h3></div></a></h1>
        </>
        }



      
      <nav>
         <ul>
             <li><a href="/performance">Your Performance</a></li>
             <li><a href="#">Orgn service</a></li>
        {username ?

<>


      


<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          todos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a href="/target" target="_self"rel="noopener noreferrer"><p> Your {Organization} target Planning&nbsp;</p></a>
         <a href="/month" target="_self"rel="noopener noreferrer"><p> Your {Organization} Monthly Plan&nbsp;</p></a>
         <a href="/weekly" target="_self"rel="noopener noreferrer"><p> Your  {Organization} Weekly Evaluation&nbsp;</p></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a href="/profile" target="_self" rel="noopener noreferrer"><p>profile&nbsp;</p></a>
        <a href="/profile/employee" target="_self" rel="noopener noreferrer"><p>Employee's Account&nbsp;</p></a>
        <a href="/department" target="_self" rel="noopener noreferrer"><p>Create Departments&nbsp;</p></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li><strong>Hi {username}</strong></li>
      <li><a href="/api/logout" target="_self" rel="noopener noreferrer"><p>Logout&nbsp;</p></a></li>
      
      </>
        : 
        <>
                     <li><a href="#">About</a></li>
             <li><a href="#">Services</a></li>
    <li> <a href="/login" target="_self" rel="noopener noreferrer">
      
      
      <p>
      <FontAwesomeIcon
        icon={faUserCircle}
        style={{ fontSize: 25, color: "#5555" }}
      />
      </p>
      </a>
      </li>
    <li> <a href="/signup" target="_self" rel="noopener noreferrer"><p>signup&nbsp;</p></a></li>
        </>
        }





         </ul>
      </nav> 
               
   </header>
      )
  
}