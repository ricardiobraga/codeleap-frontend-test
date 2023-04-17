import React from 'react';


import styles from '@/src/styles/Signup.module.css';
import InputComp from '../input';
import ButtonComp from '../button';
import { inputFilled, inputEmpty } from '@/src/actions/createPostInputSlice';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '@/src/actions/userSlice';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';





export default function Signup(props) {

  

  const { user, inputCheck } = useSelector(state => state)
  const [link, setLink] = useState("/");
  const router = useRouter();

  const dispatch = useDispatch();

  function handleInput(e) {

    e != "" ? dispatch(inputFilled()) : dispatch(inputEmpty());
    e != "" ? dispatch(login(e)) : dispatch(logout(""));

  }

  function handleClick() {
    if (inputCheck.inputIsActive) {
      localStorage.setItem("user", user.username);
      router.push(inputCheck.inputIsActive ? `/${user.username}` : "")
      dispatch(inputEmpty());

    }

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

        
          <ButtonComp text="ENTER" active={inputCheck.inputIsActive}  handleClick={handleClick} />
        

      </motion.div>
    </section>
  )
}
