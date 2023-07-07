import Layout from "../../components/layout"
import { getCookie } from "cookies-next";
import Link from "next/link"
import React from "react"
import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import _footer from "./component/Footer/footer"
import Barchart from "./charts/bar"
import Piechart from "./charts/pie"
import Linechart from "./charts/line"
import Titlebar from "./component/Menu/titlebar";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"
const inter = Inter({ subsets: ["latin"] })

export default function HomePage( {username,Organization} ) {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function() {
      const header = document.querySelector("header");
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        header.style.backgroundColor = "#9CAAA2";
      } else {
        header.style.backgroundColor = "";
      }
    });
  }
    return (
        <>
                <Head>
          <title>Work managment software</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Titlebar Organization={Organization} username={username}/>
<br></br><br></br><br></br><br></br><br></br>
        
        <main className={`${styles.main} ${inter.className}`}>
        <br></br><br></br>
        <div class="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image className="d-block w-100" src="/images/f9.jpg" alt="First slide" width={400} height={400}/>
    </div>
    <div class="carousel-item">
      <Image class="d-block w-100" src="/images/Penting_Ini_7_Manfaat_Besar_Software_Manajemen_Proyek_Yang_Harus_Anda_Ketahui_077b75b636.jpg" alt="Second slide" width={400} height={400}/>
    </div>
    <div class="carousel-item">
      <Image className="d-block w-100" src="/images/planning-.jpg" alt="Third slide"  width={400} height={400}/>
    </div>
    <div class="carousel-item">
      <Image className="d-block w-100" src="/images/project.png" alt="Fourth slide"  width={400} height={400}/>
    </div>
  
  </div>
  <Link class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </Link>
  <Link class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </Link>
</div>
        </div>

<div class="container">
  <h3><i>Cloud solution for your company&apos;s Planning and Mange your tasks..</i></h3>
  <p>CHI&apos;s Planning tools to perform employee evaluation and Target analysis. Automated Planning  can quickly convert data into insights. Identify problem areas, create real-time notifications, and generate recommendations.</p>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Manage your tasks</h4>
      <p class="card-text">Instant Calculations, Evaluations, and Aggregations of your Organization</p>
      <Link href="/signup" class="card-link">Register</Link>
      <Link href="#" class="card-link">Planning why?</Link>
    </div>
  </div>
</div>
<br></br><br></br>

<div class="container">
        <div class="row">
            <div class="col-lg-6 mb-4">
                <div class="card">
               

                    <div class="card-body">
                        <h5 class="card-title">Strategic Planning</h5>
                        <p class="card-text">
                        Nine out of ten organizations fail to execute on their strategy. With ClearPoint, turn your strategic plans into breakthrough results.
                        </p>
                        <Linechart/>
                        <Link href="#" class="btn btn-primary btn-sm">
                        Strategic Planning
                        </Link>
                        <Link href="#" class="btn btn-secondary btn-sm">
                            <i class="far fa-heart"></i></Link>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-4">
                <div class="card">
                
                    <div class="card-body">
                        <h5 class="card-title">Business Reporting</h5>
                        <p class="card-text">
                        How much time is your organization wasting every month creating reports? ClearPoint can automate your business reporting ensuring nothing gets in the way of executing the strategy.
                        </p>
                        <Barchart/>
                        <Link href="#" class="btn btn-outline-primary btn-sm">
                        Business Reporting
                        </Link>
                        <Link href="#" class="btn btn-outline-secondary btn-sm">
                            <i class="far fa-heart"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
<br></br>
<br></br><br></br>
<div class="container">
  <p>Before Chi, dashboarding was an expensive, inflexible, and time-consuming process. Now create stunning visualizations and share those dashboards internally and externally, in record time.</p>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Gantt charts</h4>
      <p class="card-text">Instant Calculations, Evaluations, and Aggregations of your Organization</p>
      <Image
                  src="/images/gantt.png"
                  alt="Vercel Logo"
                  width={1000 }
                  height={300}

                />
    </div>
  </div>
</div>
<br></br><br></br>

<div class="container">
  <p>Before Chi, dashboarding was an expensive, inflexible, and time-consuming process. Now create stunning visualizations and share those dashboards internally and externally, in record time.</p>
  <div class="card">
    <div class="card-body">
      <p class="card-text">Instant Calculations, Evaluations, and Aggregations of your Organization</p>
      <Piechart/>
      <Link href="/signup" class="card-link">Register</Link>
      <Link href="#" class="card-link">Planning why?</Link>
    </div>
  </div>
</div>


        </main>
        <_footer vercelLogo={styles.vercelLogo} />
       
       </>
        
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie("username", { req, res });
    if (username == undefined){
        username = false;
    }
    return { props: {username} };
};