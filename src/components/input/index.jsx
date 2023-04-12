import { useState } from 'react';
import ButtonComp from '../button';
import styles from './styles.module.css';

import { inputFilled, inputEmpty } from '@/src/redux/buttonSlice';
import { useDispatch } from 'react-redux';

export default function InputComp(props) {
    const [inputValue, setInputValue] = useState("");
    const [active, setActive] = useState(false);
    
    // const dispatch = useDispatch();
   
    // function handleInput(e){        
    //     setInputValue(e);
    //     e != "" ? dispatch(inputFilled(e))  : dispatch(inputEmpty()) ;
    //     //dispatch(inputFilled(e))
             
    // }


    return (
        <div className={styles.inputContent}>
            <h1 className={styles.title}>{props.title}</h1>
            <input className={styles.input} type='text' placeholder={props.placeholder} value={inputValue} onChange={ (e) => {
                setInputValue(e.target.value);                 
                props.handleInput(e.target.value);}} />   
                    
        </div>
    )
}