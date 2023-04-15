import Link from 'next/link';
import React from 'react';


import styles from '@/src/styles/Signup.module.css';
import InputComp from '../input';
import ButtonComp from '../button';
import { inputFilled, inputEmpty } from '@/src/actions/createPostInputSlice';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '@/src/actions/userSlice';
import { useState } from 'react';

import { motion } from 'framer-motion';





export default function Signup(props) {

  

  const { user, inputCheck } = useSelector(state => state)
  const [link, setLink] = useState("/");

  const dispatch = useDispatch();

  function handleInput(e) {

    e != "" ? dispatch(inputFilled()) : dispatch(inputEmpty());
    e != "" ? dispatch(login(e)) : dispatch(logout(""));

  }

  function handleClick() {
    if (inputCheck.inputIsActive) {
      localStorage.setItem("user", user.username);
      dispatch(inputEmpty());
    }

  }

  function scrolls() {
    window.document.scrollingElement?.scrollTo(0, 0)
    console.log("sss");
  }




  return (
    <section id='sign' className={styles.signupContainer} >
      <motion.div className={styles.signupSection}  initial="hidden" animate="visible" variants={{
      hidden: {
        y: "10vh",
        
        opacity: 0
      },
      visible: {
        y: 0,
        
        opacity: 1,
        transition: {
          duration:.3,
          ease: "easeInOut"

        }
      },
    }}>
        <h1 className={styles.title}>Welcome to CodeLeap network!</h1>
        <InputComp title="Please enter your username" placeholder="John doe" handleInput={handleInput} setLink={setLink} />

        <Link href={inputCheck.inputIsActive ? `/${user.username}` : ""} >
          <ButtonComp text="ENTER" active={inputCheck.inputIsActive}  handleClick={handleClick} />
        </Link>

      </motion.div>
    </section>
  )
}
