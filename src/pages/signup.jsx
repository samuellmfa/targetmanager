import Layout from "../../components/layout"
import { getCookie } from "cookies-next";
import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/router"
import Titlebar from "./component/Menu/titlebar";
export default function SignupPage( {username} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        <Layout pageTitle="Signup">
            <br></br><br></br><br></br><br></br><br></br><br></br>
         <Titlebar/>
            <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <Image src="/images/login.png"
              className="img-fluid" alt="Sample image" width={700} height={700}/>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form  action="/api/signup" method="POST" className="border border-primary rounded p-4">
            <div>
  {msg ? (
    <strong className="red">
      <i>{msg}</i>
    </strong>
  ) : (
    <><div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
    <p className="lead fw-normal mb-0 me-3">Register your Organization</p>
  </div></>
  )}
            </div>

              
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0"></p>
              </div>

              <div className="form-outline mb-4">
              <input minLength="3" name="Organization" id="name" type="text" className="form-control form-control-lg" placeholder="Enter Organization&quot;s name" required />
              </div>

              <div className="form-outline mb-3">
              <input minLength="5" name="username" id="username" type="text" placeholder="E-Mail" className="form-control form-control-lg"
                     required/>
              </div>
             

              <div className="form-outline mb-3">
              <input type="password"  minLength="5" name="password" id="password" placeholder="Enter password" className="form-control form-control-lg" required />
              </div>
                <div className="form-outline mb-4">
                <input minLength="5" name="passwordagain" id="passwordagain" type="password" className="form-control form-control-lg" placeholder="Confirm your password" required />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <Link href="#!" className="text-body">Forgot password?</Link>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                
                <button type="submit" className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Register</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don&apos;t have an account? <Link href="#!"
                  className="link-danger">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>






        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie("username", { req, res });
    var Organization = getCookie("Organization", { req, res });
    if (username != undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: {username:false,} };
};