import Link from 'next/link';
import React from 'react';
//import { Link } from 'react-scroll/modules';

import styles from '@/src/styles/Signup.module.css';
import InputComp from '../input';
import ButtonComp from '../button';
import { inputFilled, inputEmpty } from '@/src/actions/createPostInputSlice';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '@/src/actions/userSlice';
import {useState} from 'react';





export default function Signup(props)  {
    const { user, inputCheck } = useSelector(state => state)
    const [link, setLink] = useState("/");

    const dispatch = useDispatch();

    function handleInput(e) {

        e != "" ? dispatch(inputFilled()) : dispatch(inputEmpty());
        e != "" ? dispatch(login(e)) : dispatch(logout(""));
        e != "" ? setLink("/mainScreen") : setLink("/");


    }

    function handleClick() {
        if (inputCheck.inputIsActive) {
            

        }

    }



    return (
        <section id='sign' className={styles.signupContainer}>
            <div className={styles.signupSection}>
                <h1 className={styles.title}>Welcome to CodeLeap network!</h1>
                <InputComp title="Please enter your username" placeholder="John doe" handleInput={handleInput} />
                <Link href={inputCheck.inputIsActive ? "/#mainscreen" : "/"}>
                    <ButtonComp text="ENTER" active={inputCheck.inputIsActive} handleClick={handleClick} />
                </Link>
            </div>
        </section>
    )
}
