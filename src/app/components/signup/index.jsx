import Link from 'next/link';
import React from 'react';
//import { Link } from 'react-scroll';

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

        e != "" ? setLink("#mainScreen") : setLink("/");
        e != "" ? dispatch(inputFilled(e)) : dispatch(inputEmpty());
        e != "" ? dispatch(login(e)) : dispatch(logout(""));
        console.log(link);
        
        
        


    }

    function handleClick() {
        if (inputCheck.inputIsActive) {


        }

    }

    function scrolls(){
        window.document.scrollingElement?.scrollTo(0, 0)
        console.log("sss");
    }




    return (
        <motion.section id='sign' className={styles.signupContainer} initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .0
              }
            },
          }} >
            <div className={styles.signupSection}>
                <h1 className={styles.title}>Welcome to CodeLeap network!</h1>
                <InputComp title="Please enter your username" placeholder="John doe" handleInput={handleInput} setLink={setLink} />                

                    <a  href={inputCheck.inputIsActive ? '/#mainscreen' : ""} >
                        <ButtonComp text="ENTER" active={inputCheck.inputIsActive} handleClick={handleClick}   /> 
                    </a>
                
            </div>
        </motion.section>
    )
}
