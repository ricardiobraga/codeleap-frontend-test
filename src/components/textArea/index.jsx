import {useState} from 'react';

import styles from './styles.module.css';

import { inputFilled, inputEmpty } from '@/src/actions/createPostInputSlice';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

export default function TextAreaComp(props) {
    const [inputValue, setInputValue] = useState("");
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
   
    function handleInput(e){        
        //setInputValue(e);
        e != "" ? dispatch(inputFilled(e))  : dispatch(inputEmpty()) ;
        
             
    }


    return (
        <motion.div className={styles.inputContent} initial="hidden" animate="visible" transition={{ delay: .2 }} variants={{
            hidden: {
              opacity: 0,
              y: 50
            },
            visible: {
              opacity: 100,
              y: 0,             
            }
          }} >
            <h1 className={styles.title}>{props.title}</h1>
            <textarea className={styles.textarea} type='text' rows="3" placeholder={props.placeholder} value={inputValue} onChange={ (e) => {
                setInputValue(e.target.value);
                props.setPostContent(e.target.value)
                props.handleTextarea(e.target.value);
                }} />   
                    
        </motion.div>
    )
}