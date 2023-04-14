import { useState } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { toggleButtonOff } from '@/src/actions/toggleModalButtonSlice';
import ButtonComp from '../button';
import { useRouter } from 'next/navigation';
import { set } from 'nprogress';


export default function DeleteModal(props) {
    
    const router = useRouter()
    const { toggleButton } = useSelector(state => state);
    const dispatch = useDispatch();



    function toggleModal() {
        dispatch(toggleButtonOff())
    }

    async function handleDelete(getposts) {
        console.log(toggleButton.id);

            await fetch(`https://dev.codeleap.co.uk/careers/${toggleButton.id}/`, {
                method: 'DELETE',
    
            });    
        
            await getposts();


        




    }



    return (
        <>
            {
                toggleButton.toggleModalButtonSlice && (
                    <div className={styles.modal}>
                        <div className={styles.overlay} onClick={toggleModal}>
                            <div className={styles.modalContent}>
                                <h1 className={styles.title}>Are you sure you want to delete this item?</h1>
                                <div className={styles.btnContainer}>
                                    <ButtonComp text="Cancel" active={true} type="white" handleClick={toggleModal} />
                                    <ButtonComp text="Delete" active={true} type="red" handleClick={() => handleDelete(props.getposts)} />
                                </div>
                            </div>
                        </div>

                    </div>
                )

            }
        </>


    )
}