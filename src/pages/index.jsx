// "use client"
import styles from '@/src/styles/Home.module.css';


import Signup from '@/src/components/signup';
import Head from 'next/head';



export default function Home() {


  return (
    <>
      <Head>
        <title>codeleap</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>



        <Signup  />
        {/* <MainScreen /> */}


      </main >

    </>
  )
}










