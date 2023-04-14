
import { useState } from 'react'
import styles from './styles.module.css'
import ButtonComp from '../button'
import InputComp from '../input'
import TextAreaComp from '../textArea'

import { useSelector, useDispatch } from 'react-redux';

import { inputFilled, inputEmpty, textAreaFilled, textAreaEmpty } from '@/src/actions/createPostInputSlice';
import { toggleButtonOn } from '@/src/actions/toggleModalButtonSlice';


import { useRouter } from 'next/navigation'






export default function CreatePost(props) {
    const [title, setTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const { user, inputCheck, toggleButton } = useSelector(state => state);

    const router = useRouter();

    const dispatch = useDispatch();



    function handleInput(e) {

        e != "" ? dispatch(inputFilled(e)) : dispatch(inputEmpty());



    }
    function handleTextarea(e) {

        e != "" ? dispatch(textAreaFilled(e)) : dispatch(textAreaEmpty());


    }

    function handleModal() {
        dispatch(toggleButtonOn())
    }

    async function handleSubmit(getposts) {

        if (inputCheck.inputIsActive && inputCheck.textAreaIsActive) {

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
            });
            getposts()
                        
            
        }

        // fetch('https://dev.codeleap.co.uk/careers/')
        // .then(data => data.json())
        // .then(res => console.log(res))
    
        // console.log("log");
        //refresh()
        
    }





    return (

        <div className={styles.createPostContent}>
            <h1 className={styles.title}>What’s on your mind?</h1>
            <InputComp title="Title" setTitle={setTitle} handleInput={handleInput} placeholder="Hello world" />
            <TextAreaComp title="Content" setPostContent={setPostContent} handleTextarea={handleTextarea} placeholder="Content here" />
            <ButtonComp text="CREATE" active={inputCheck.textAreaIsActive && inputCheck.inputIsActive ? true : false} handleClick={() => handleSubmit(props.getposts)} />

        </div>


    )
}