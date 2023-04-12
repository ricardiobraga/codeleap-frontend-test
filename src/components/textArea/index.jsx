import { useState } from 'react';
import ButtonComp from '../button';
import styles from './styles.module.css';

import { inputFilled, inputEmpty } from '@/src/actions/userSlice';
import { useDispatch } from 'react-redux';

export default function TextAreaComp(props) {
    const [inputValue, setInputValue] = useState("");
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
   
    function handleInput(e){        
        //setInputValue(e);
        e != "" ? dispatch(inputFilled(e))  : dispatch(inputEmpty()) ;
        //dispatch(inputFilled(e))
             
    }


    return (
        <div className={styles.inputContent}>
            <h1 className={styles.title}>{props.title}</h1>
            <textarea className={styles.textarea} type='text' rows="3" placeholder={props.placeholder} value={inputValue} onChange={ (e) => {
                setInputValue(e.target.value);
                props.setPostContent(e.target.value)
                props.handleTextarea(e.target.value);
                }} />   
                    
        </div>
    )
}