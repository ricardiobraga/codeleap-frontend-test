import { useState } from 'react'
import styles from './styles.module.css'

export default function ButtonComp(props){
    const [active, setActive] = useState(props.active)

    function handlerButton(active){
       !active ? null : console.log("click")
    }


    return(
        <button className={ props.active ? styles.btn : styles.btnInactive} onClick={() => handlerButton(props.active)}> {props.text}</button>
    )
}