import { useState } from 'react'
import styles from './styles.module.css'
import ButtonComp from '../button'
import InputComp from '../input'
import TextAreaComp from '../textArea'

import { useSelector, useDispatch } from 'react-redux';
import { inputFilled, inputEmpty } from '@/src/redux/buttonSlice';
import { textAreaFilled, textAreaEmpty } from '@/src/actions/editorSlice';


export default function PostEditor(props) {
    const [valorA, setValorA] = useState("");
    const [valorB, setValorB] = useState("");
    const { inputCheck, textareaCheck } = useSelector(state => state);    
    const dispatch = useDispatch();

    
    
    function handleInput(e) {
        
        e && e != "" ? dispatch(inputFilled(e)) : dispatch(inputEmpty());
        
                      
    }
    function handleTextarea(e) {
        
        e && e != "" ? dispatch(textAreaFilled(e)) : dispatch(textAreaEmpty());
        
                      
    }
    


    // function teste(valorA, valorB){
    //     handleInput && handleTextarea != "" ? dispatch(inputFilled()) : dispatch(inputEmpty());
    // }




    return (
        <div className={styles.postEditorContent}>
            <h1>What’s on your mind?</h1>
            <InputComp title="Title" setValorA={setValorA} handleInput={handleInput} />
            <TextAreaComp title="Content" setValorB={setValorB}  handleTextarea={handleTextarea} />
            <ButtonComp text="CREATE" active={inputCheck.isActive && textareaCheck.isActive ? true : false}  />
        </div>
    )
}