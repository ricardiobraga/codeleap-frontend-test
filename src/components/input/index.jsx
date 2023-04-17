import {useState} from 'react';
import styles from './styles.module.css';

import { inputEmpty } from '@/src/actions/createPostInputSlice';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';

export default function InputComp(props) {
    const [inputValue, setInputValue] = useState("");
    const [active, setActive] = useState(false);  
    const router = useRouter();
    const dispatch = useDispatch();

    const { user, inputCheck } = useSelector(state => state)
    
    function keyHandler(e){
      if(inputCheck.inputIsActive && e.code === "Enter" && router.pathname === "/"){
        router.push(inputCheck.inputIsActive ? `/${user.username}` : "")
        dispatch(inputEmpty());
      }

    }



    return (
        <motion.div className={styles.inputContent} initial="hidden" animate="visible"  variants={{
            hidden: {
              opacity: 0,
              y: 50
            },
            visible: {
              opacity: 100,
              y: 0,             
            }
          }}  >
            <h1 className={styles.title}>{props.title} <span className={styles.span}>*</span></h1>
            <input className={styles.input} type='text' placeholder={props.placeholder} value={inputValue} required onKeyDown={e => keyHandler(e)} onChange={ (e) => {
                setInputValue(e.target.value);  
                props.setTitle ? props.setTitle(e.target.value) : null;               
                props.handleInput(e.target.value);
                }} />   
                    
        </motion.div>
    )
}