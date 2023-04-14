import { useState } from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'

export default function ButtonComp(props){
    const [active, setActive] = useState(props.active)
    const router = useRouter();
    function handlerButton(active){
       !active ? null : console.log("click")
    }

    function handleType(propsType){
        if(props.type === "red"){
            return styles.btnRed
        }
        if(props.type === "white"){
            return styles.btnWhite
        }
        return styles.btn
    }
        

    return(

        <button className={ props.active ? handleType() : styles.btnInactive} onClick={props.handleClick}> {props.text} </button>
        
    )
}