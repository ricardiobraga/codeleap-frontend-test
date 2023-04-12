import { useState } from 'react'
import styles from './styles.module.css'
import ButtonComp from '../button'
import InputComp from '../input'
import TextAreaComp from '../textArea'

import { useSelector, useDispatch } from 'react-redux';
import { inputFilled, inputEmpty } from '@/src/redux/buttonSlice';
import { textAreaFilled, textAreaEmpty } from '@/src/actions/createPostSlice';


export default function Post(props) {
    
    const [activeStyles, setActiveStyles] = useState(styles.hide);

    



    return (
        <div className={styles.postContent}>
            <div className={styles.title}>
                <h1 className={styles.titleText}>{props.title}</h1>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.postInfo}>
                    <span className={styles.user}>@{props.username}</span>
                    <span className={styles.data}>{props.created_datetime} minutes ago</span>
                </div>
                <div >
                  <p className={styles.postText}> {props.content} </p>
                  <button className={props.content.length > 640 ? () => styles.plusBtn : styles.hide}>+</button>
                </div>
            </div>
        </div>
    )
}