
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { toggleTextOff } from '@/src/actions/toggleModalButtonSlice';
import ButtonComp from '../button';


import { motion } from 'framer-motion';
import { useState } from 'react';



export default function TextModal(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const { toggleButton } = useSelector(state => state);
    const dispatch = useDispatch();

    const [toggle, setToggle] = useState(toggleButton.id)

   

    function toggleModal() {
        dispatch(toggleTextOff())
    }

    return (
        <>
            {
                toggleButton.toggleText && (
                    <motion.div className={styles.modal} initial="hidden" animate="visible" variants={{
                        hidden: {
                          opacity: 0,
                          y: 50
                        },
                        visible: {
                          opacity: 100,
                          y: 0,             
                        }
                      }}>
                        <div className={styles.overlay} onClick={toggleModal}>
                            <div className={styles.modalContent}>
                                <h1 className={styles.title}>{toggleButton.title}</h1>
                                <p className={styles.content}>{toggleButton.content}</p>
                                <div className={styles.btnContainer}>
                                    <ButtonComp text="Close" active={true} type="white" handleClick={toggleModal} />
                                    
                                </div>
                            </div>
                        </div>

                    </motion.div>
                )

            }
        </>


    )
}