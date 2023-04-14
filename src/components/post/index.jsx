
import styles from './styles.module.css'

import Image from 'next/image';

import deleteIcon from '@/src/public/icons/deleteIcon.svg';
import editIcon from '@/src/public/icons/editIcon.svg';


import { useSelector, useDispatch } from 'react-redux';
import { toggleDeleteOn, toggleEditOn, saveID} from '@/src/actions/toggleModalButtonSlice';
import { motion } from 'framer-motion';




export default function Post(props) {

    const { user } = useSelector(state => state);
    const dispatch = useDispatch();
    

    function handleDelete(id) {
        dispatch(toggleDeleteOn(id))
        dispatch(saveID(id))

        
    }
    function handleEdit(id) {
        
        dispatch(toggleEditOn(id))
        dispatch(saveID(id))
    }



    return (
        <motion.div className={styles.postContent} initial="hidden" animate="visible" transition={{ delay: props.delay }}   variants={{
            hidden: {
              opacity: 0,
              y: 100
            },
            visible: {
              opacity: 100,
              y: 0,             
            }
          }}>
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
                    <span className={styles.data}>{props.created_datetime} minutes ago</span>
                </div>
                <div >
                    <p className={styles.postText}> {props.content} <button className={props.content.length > 540 ? styles.plusBtn : styles.hide}>+</button> </p>

                </div>
            </div>
        </motion.div>
    )
}