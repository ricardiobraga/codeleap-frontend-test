import { useState } from 'react'
import styles from './styles.module.css'

import ButtonComp from '../button';



import InputComp from '../input';
import TextAreaComp from '../textArea';

import { useDispatch, useSelector } from 'react-redux';
import { toggleEditOff } from '@/src/actions/toggleModalButtonSlice';
import { inputFilled, inputEmpty, textAreaFilled, textAreaEmpty } from '@/src/actions/createPostInputSlice';

import { motion } from 'framer-motion';


export default function UpdateModal(props) {

    const [title, setTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    
    const { user, toggleButton, inputCheck } = useSelector(state => state);
    const dispatch = useDispatch();

    function handleInput(e) {

        e != "" ? dispatch(inputFilled(e)) : dispatch(inputEmpty());



    }
    function handleTextarea(e) {

        e != "" ? dispatch(textAreaFilled(e)) : dispatch(textAreaEmpty());


    }



    function toggleModal() {
        dispatch(toggleEditOff())
    }

    async function handleSubmit(getposts, toggle) {

        if (inputCheck.inputIsActive && inputCheck.textAreaIsActive) {

            const res = await fetch(`https://dev.codeleap.co.uk/careers/${toggleButton.id}/`, {
                method: 'PATCH',
                body: JSON.stringify({                    
                    "title": title,
                    "content": postContent,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
             await getposts()
             toggle()

                        
            
        }       
    }


    return (
        <>
            {
                toggleButton.toggleEdit && (
                    <motion.div className={styles.modal} initial="hidden" animate="visible" transition={{ delay: props.delay }} variants={{
                        hidden: {
                          opacity: 0,
                          y: 50
                        },
                        visible: {
                          opacity: 100,
                          y: 0,             
                        }
                      }} >
                        <div className={styles.overlay} >
                            <div className={styles.modalContent}>
                                <h1 className={styles.title}>Edit item </h1>
                                <div className={styles.inputContainer}>
                                    <InputComp title="Title" setTitle={setTitle} handleInput={handleInput} placeholder="Hello world" />
                                    <TextAreaComp title="Content" setPostContent={setPostContent} handleTextarea={handleTextarea} placeholder="Content here" />
                                </div>
                                <div className={styles.btnContainer}>
                                    <ButtonComp text="Cancel" active={true} type="white" handleClick={toggleModal} />
                                    <ButtonComp text="SAVE" active={inputCheck.textAreaIsActive && inputCheck.inputIsActive ? true : false} type="green" handleClick={() => handleSubmit(props.getposts, toggleModal)} />
                                </div>
                            </div>
                        </div>

                    </motion.div>
                )

            }
        </>


    )
}