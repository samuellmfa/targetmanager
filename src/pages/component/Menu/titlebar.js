import React from "react"
import Image from "next/image"
import "bootstrap/dist/css/bootstrap.css";
import { getCookie } from "cookies-next";
import Link from "next/link";
import Layout from "../../../../components/layout"
import { faHome, faUser, faUserCircle, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Titlebar( {username,Organization} )
{

    return  (  
      <header>

{username ?
        <>
           <h1 id="nav-title"><Link href="/performance"><div><b><i>PERFORMANCE EVALUATION</i></b><br /><h3><strong>________</strong></h3></div></Link></h1>
        </>: 
        <>
           <h1 id="nav-title"><Link href="/"><div><b><i>PERFORMANCE EVALUATION</i></b><br /><h3><strong>________</strong></h3></div></Link></h1>
        </>
        }



      
      <nav>
         <ul>
             <li><Link href="/performance">Your Performance</Link></li>
             <li><Link href="#">Orgn service</Link></li>
        {username ?

<>


      


<li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          todos
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link href="/target" target="_self"rel="noopener noreferrer"><p> Your {Organization} target Planning&nbsp;</p></Link>
         <Link href="/month" target="_self"rel="noopener noreferrer"><p> Your {Organization} Monthly Plan&nbsp;</p></Link>
         <Link href="/weekly" target="_self"rel="noopener noreferrer"><p> Your  {Organization} Weekly Evaluation&nbsp;</p></Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" href="#">Something else here</Link>
        </div>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link href="/profile" target="_self" rel="noopener noreferrer"><p>profile&nbsp;</p></Link>
        <Link href="/profile/employee" target="_self" rel="noopener noreferrer"><p>Employee&lsquo;s Account&nbsp;</p></Link>
        <Link href="/department" target="_self" rel="noopener noreferrer"><p>Create Departments&nbsp;</p></Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" href="#">Something else here</Link>
        </div>
      </li>
      <li><strong>Hi {username}</strong></li>
      <li><Link href="/api/logout" target="_self" rel="noopener noreferrer"><p>Logout&nbsp;</p></Link></li>
      
      </>
        : 
        <>
                     <li><Link href="#">About</Link></li>
             <li><Link href="#">Services</Link></li>
    <li> <Link href="/login" target="_self" rel="noopener noreferrer">
      
      
      <p>
      <FontAwesomeIcon
        icon={faUserCircle}
        style={{ fontSize: 25, color: "#5555" }}
      />
      </p>
      </Link>
      </li>
    <li> <Link href="/signup" target="_self" rel="noopener noreferrer"><p>signup&nbsp;</p></Link></li>
        </>
        }





         </ul>
      </nav> 
               
   </header>
      )
  
}