import { useState } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { toggleDeleteOff } from '@/src/actions/toggleModalButtonSlice';
import ButtonComp from '../button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';


export default function DeleteModal(props) {
    
    const router = useRouter()
    const { toggleButton } = useSelector(state => state);
    const dispatch = useDispatch();



    function toggleModal() {
        dispatch(toggleDeleteOff())
    }

    async function handleDelete(getposts) {
        

            await fetch(`https://dev.codeleap.co.uk/careers/${toggleButton.id}/`, {
                method: 'DELETE',
    
            });    
        
            await getposts();
            
    }



    return (
        <>
            {
                toggleButton.toggleDelete && (
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
                                <h1 className={styles.title}>Are you sure you want to delete this item?</h1>
                                <div className={styles.btnContainer}>
                                    <ButtonComp text="Cancel" active={true} type="white" handleClick={toggleModal} />
                                    <ButtonComp text="Delete" active={true} type="red" handleClick={() => handleDelete(props.getposts)} />
                                </div>
                            </div>
                        </div>

                    </motion.div>
                )

            }
        </>


    )
}