import { useState } from 'react'
import styles from './styles.module.css'
import ButtonComp from '../button'
import InputComp from '../input'
import TextAreaComp from '../textArea'

import { useSelector, useDispatch } from 'react-redux';
import { inputFilled, inputEmpty } from '@/src/redux/buttonSlice';
import { textAreaFilled, textAreaEmpty } from '@/src/actions/editorSlice';


export default function Post(props) {
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
        <div className={styles.postContent}>
            <div className={styles.title}>
                <h1>{props.title}</h1>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.postInfo}>
                    <span className={styles.user}>@user</span>
                    <span className={styles.data}>25 minutes ago</span>
                </div>
                <div className={styles.postText}>
                    <p>
                        Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

                        Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
                    </p>
                </div>
            </div>
        </div>
    )
}