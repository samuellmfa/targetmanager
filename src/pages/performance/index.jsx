import Layout from '../../../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import _footer from '../component/Footer/footer'
import Titlebar from '../component/Menu/titlebar';
import Barchart from '../charts/bar'
import Piechart from '../charts/pie'
import Linechart from '../charts/line'
const inter = Inter({ subsets: ['latin'] })
export default function HomePage( {username,Organization} ) {
    return (
        <>

        <br />
<br />
<br />
<br />
<br />
<br />
<br />
<Titlebar  Organization={Organization} username={username}/>
              <Layout pageTitle="Home">
        {username ?
        <>
            <h2>Hi {username}</h2>
            <Link href="/api/logout">Logout</Link><br/>
        </>: 
        <>
            <Link href="/login">Login</Link><br/>
        </>
        }
        </Layout>
        <main className={`${styles.main} ${inter.className}`}>
          
        <div class="custom-container">
  <div>
    <Barchart   Organization={Organization} username={username}/>
  </div>
  <br></br>

  <div>
    <Linechart   Organization={Organization} username={username}/>
  </div>
  <br></br>
  <div>
    <Piechart   Organization={Organization} username={username}/>
  </div>
</div>
         
         
        </main>
        <br></br>        <br></br>

        <_footer vercelLogo={styles.vercelLogo} />
       
       </>
        
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username == undefined){
        username = false;
    }
    return { props: {username} };
};