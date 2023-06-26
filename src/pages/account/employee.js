import Layout from '../../../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Employee()
{
    const router = useRouter()
    const { msg } = router.query
    return (
        <Layout pageTitle="Signup">
            <Link href="/">Home</Link><br/>
            {msg ?
                <h3 className="red">{msg}</h3>
            :
                <></>
            }
            <h3>You have successfully registed ,We have sent you an email, please check your email for confirmation </h3>
    <h3>Create employee Account </h3>
    <label htmlFor="name">Full name</label> <input type="text" id="name"></input><br></br>
    <label htmlFor="Title">Job Title</label> <input type="text" id="Title"></input><br></br>
    <label htmlFor="Department">Department</label> <input type="text" id="Department"></input><br></br>
    <label htmlFor="IsHead">Is the Head of the department</label> <input type="checkbox" id="IsHead"></input><br></br>
    <label htmlFor="account">account</label> <input type="text" id="account"></input><br></br>
    <label htmlFor="password">password</label> <input type="password" id="password"></input><br></br>
    <label htmlFor="password2">confirm</label> 
    <input type="password" id="password2"></input><br></br>
    <input type="submit" value="Create Account"/>
    </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username != undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: {username:false} };
};