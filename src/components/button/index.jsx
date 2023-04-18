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
        if(props.type === "btnInactive"){
            return styles.btnInactive
        }
        if(props.type === "red"){
            return styles.btnRed 
        }
        if(props.type === "white"){
            return styles.btnWhite
        }
        if(props.type === "green"){
            return styles.btnGreen
        }
        return styles.btn
    }
        

    return(

        <button className={ props.active ? handleType() : styles.btnInactive} onClick={props.handleClick} > {props.text} </button>
        
    )
}