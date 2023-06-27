import Layout from '../../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import _footer from './component /Footer/footer'
import Barchart from './charts/bar'
import Piechart from './charts/pie'
import Linechart from './charts/line'
const inter = Inter({ subsets: ['latin'] })
export default function HomePage( {username,Organization} ) {
    return (
        <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={`${styles.main} ${inter.className}`}>
          
          <Image
                  src="/images/title.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={800 }
                  height={50}
                  
                />
          <check/>
          <div className={styles.description}>
          <a
                href="/account/employee"
                target="_self"
                rel="noopener noreferrer"
              >
            <p>
              Home &nbsp;
              
            </p>
            </a>
            <div>
            {username ?
         <>
         <a href="/account/employee" target="_self"rel="noopener noreferrer"><p> Your {Organization} Monthly Plan&nbsp;</p></a>
         <a href="/account/registration" target="_self"rel="noopener noreferrer"><p> Your  {Organization} Weekly Plan&nbsp;</p></a>
         </>
        : 
        <>
            {/* <h2>Start Planning</h2> */}
        </>
        }

             
            </div>
            <>

            <Layout pageTitle="Home">
        {username ?
        <>
            <h2>Hi {username}</h2>
            <Link href="/profile">Profile</Link><br/>
            <Link href="/account/employee">Create Employee's Account</Link><br/>
            <Link href="/api/logout">Logout</Link><br/>
        </>: 
        <>
            <Link href="/login">Login</Link><br/>
            <Link href="/signup">Signup</Link>
        </>
        }
        </Layout>
        </>
          </div>
          <div>
            <Barchart/>
            </div>
            <div>
            <Linechart/>
            </div>
            <div>
            <Piechart/>
          </div>
          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                performance evaluation <span>-&gt;</span>
              </h2>
              <p>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </a>
  
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                planning <span>-&gt;</span>
              </h2>
              <p>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </a>
  
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Analysis <span>-&gt;</span>
              </h2>
              <p>
                Discover and deploy boilerplate example Next.js&nbsp;projects.
              </p>
            </a>
  
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Work managment <span>-&gt;</span>
              </h2>
              <p>
                Instantly deploy your Next.js site to a shareable URL
                with&nbsp;Vercel.
              </p>
            </a>
          </div>
         
        </main>
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