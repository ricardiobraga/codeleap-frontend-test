
import styles from './styles.module.css'

import Image from 'next/image';

import deleteIcon from '@/src/public/icons/deleteIcon.svg';
import editIcon from '@/src/public/icons/editIcon.svg';


import { useDispatch } from 'react-redux';
import { toggleDeleteOn, toggleEditOn, toggleTextOn, saveID } from '@/src/actions/toggleModalButtonSlice';
import { motion } from 'framer-motion';




export default function Post(props) {


    const dispatch = useDispatch();




    function handleDelete(id) {
        dispatch(toggleDeleteOn(id))
        dispatch(saveID(id))

    }

    function handleText(id) {
        dispatch(toggleTextOn(id))
        dispatch(saveID(id))
    }

    function handleEdit(id) {

        dispatch(toggleEditOn(id))
        dispatch(saveID(id))
    }



    return (
        <motion.div className={styles.postContent} animate={props.controls} transition={{ delay: props.delay }} >
            <div className={styles.title}>
                <h1 className={styles.titleText}>{props.title}</h1>
                <div className={props.username === props.usernameQuery ? styles.icons : styles.hide}>
                    <a className={styles.icon} onClick={() => handleDelete(props.id)}>
                        <Image src={deleteIcon} alt='delete icon' />
                    </a>
                    <a className={styles.icon} onClick={() => handleEdit(props.id)}>
                        <Image src={editIcon} alt='edit icon' />
                    </a>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.postInfo}>
                    <span className={styles.user}>@{props.username}</span>
                    <span className={styles.data}>{props.created_datetime}</span>
                </div>
                <div >
                    <p className={styles.postText}> {props.content} <button className={props.content.length > 140 ? styles.plusBtn : styles.hide} onClick={() => handleText(props.id)} >+</button> </p>
                </div>
            </div>
        </motion.div>
    )
}