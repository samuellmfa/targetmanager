import Layout from '../../components/layout'
import { getCookie } from 'cookies-next';
import Titlebar from './component/Menu/titlebar';
import _footer from './component/Footer/footer';
import Link from 'next/link'
import clientPromise from "../../lib/mongodb";

export default function ProfilePage( {username, created} ) {
    return (
        <Layout pageTitle="Profile">
             <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Titlebar username={username}/>

            <h2>{username}'s Profile</h2>
            <p>Account created at <strong>{created}</strong></p>

            <_footer/>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username == undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    const client = await clientPromise;
    const db = client.db("Accounts");
    const users = await db.collection("profiles").find({"Username": username}).toArray();
    const userdoc = users[0]
    const created = userdoc['Created']
    return {
      props: {username: username, created: created},
    }
}