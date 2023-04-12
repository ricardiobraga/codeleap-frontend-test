import { useState } from 'react'
import styles from './styles.module.css'
import ButtonComp from '../button'
import InputComp from '../input'
import TextAreaComp from '../textArea'

import { useSelector, useDispatch } from 'react-redux';
//import { inputFilled, inputEmpty } from '@/src/actions/buttonSlice';
import { inputFilled, inputEmpty, textAreaFilled, textAreaEmpty } from '@/src/actions/createPostInputSlice';


export default function CreatePost(props) {
    const [title, setTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const { user , inputCheck, textareaCheck } = useSelector(state => state);    
   
    const dispatch = useDispatch();

    
    
    function handleInput(e) {
        
        e != "" ? dispatch(inputFilled(e)) : dispatch(inputEmpty());
        
                      
    }
    function handleTextarea(e) {
        
        e != "" ? dispatch(textAreaFilled(e)) : dispatch(textAreaEmpty());
        
                      
    } 

    async function handleSubmit(){
       
        if(inputCheck.inputIsActive && inputCheck.textAreaIsActive){
           
        const res = await fetch('https://dev.codeleap.co.uk/careers/', {
            method: 'POST',
            body: JSON.stringify({
                "username": user.username,
                "title": title,
                "content": postContent,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
           })

           const data = await res.json()
           console.log(data);
       }
    }







    return (
        <div className={styles.createPostContent}>
            <h1 className={styles.title}>What’s on your mind?</h1>
            <InputComp title="Title" setTitle={setTitle} handleInput={handleInput} placeholder="Hello world" />
            <TextAreaComp title="Content" setPostContent={setPostContent}  handleTextarea={handleTextarea} placeholder="Content here" />
            <ButtonComp text="CREATE" active={inputCheck.textAreaIsActive && inputCheck.inputIsActive ? true : false} handleClick={handleSubmit}  />
        </div>
    )
}