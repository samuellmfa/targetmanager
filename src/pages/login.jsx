import Layout from '../../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import _footer from './component/Footer/footer';
import { useRouter } from 'next/router'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from 'next/image';

import { faHome, faUser, faUserCircle, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Titlebar from './component/Menu/titlebar';
export default function LoginPage( {username,Organization} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        <Layout pageTitle="Login">
            <br></br><br></br><br></br><br></br><br></br><br></br>
         <Titlebar/>
            <Link href="/">Home</Link><br/>

  <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="/images/login.png"
              className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form  action='/api/login' method='POST' className="border border-primary rounded p-4">
            <div>
  {msg ? (
    <strong className="red">
      <i>{msg}</i>
    </strong>
  ) : (
    <><div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
    <p className="lead fw-normal mb-0 me-3">Sign in</p>
   <a href="/target" target="_self"rel="noopener noreferrer" className="lead fw-normal mb-0 me-3" ><p><Image src="/images/twitter.svg" alt="Sample image" width={18} height={20} /></p></a>
   <a href="/target" target="_self"rel="noopener noreferrer" className="lead fw-normal mb-0 me-3"><p><Image src="/images/facebook.svg" alt="Sample image" width={18} height={20} /></p></a>
   <a href="/target" target="_self"rel="noopener noreferrer" className="lead fw-normal mb-0 me-3"><p><Image src="/images/google.svg" alt="Sample image" width={18} height={20} /></p></a>
   <a href="/target" target="_self"rel="noopener noreferrer" className="lead fw-normal mb-0 me-3"><p><Image src="/images/linkedin.svg" alt="Sample image" width={18} height={20} /></p></a>

  </div></>
  )}
            </div>
              
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-outline mb-4">
                <input  minLength="3" name="username" id="username" type="text"  className="form-control form-control-lg" placeholder="Enter a valid email address" required />
                <label className="form-label" htmlFor="username">Email address</label>
              </div>

              <div className="form-outline mb-3">
                <input type="password" id="password" className="form-control form-control-lg"
                  placeholder="Enter password"   minLength="5" name="password" required/>
                <label className="form-label" htmlFor="password">Password</label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                  className="link-danger">Register</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
    <_footer />
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    var Organization = getCookie('Organization', { req, res });
    if (username != undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: {username:false,Organization:false} };
};