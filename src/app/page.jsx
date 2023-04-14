"use client"
import styles from '@/src/styles/Home.module.css';
import Image from 'next/image';

import Signup from './components/signup';
import MainScreen from './components/MainScreen';


import DeleteModal from './components/deleteModal';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import { motion, ScrollMotionValues } from 'framer-motion';






export default function Home() {


  return (
    <>

      <main className={styles.main}>
        
          
        
        <Signup />
        <MainScreen/>


      </main >
      
    </>
  )
}

// export async function getStaticProps() {

//   const data = await fetch('https://dev.codeleap.co.uk/careers/')
//   const posts = await data.json()
//   console.log(posts);

//   return {
//     props: { posts },

//     revalidate: 60,
//   }
// }









