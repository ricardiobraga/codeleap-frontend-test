
import styles from '@/src/styles/Signup.module.css';
import InputComp from '../components/input';
import ButtonComp from '../components/button';
import { useSelector, useDispatch } from 'react-redux';

import { inputFilled, inputEmpty } from '@/src/redux/buttonSlice';





export default function Signup() {
        const {button} = useSelector(state => state.button)

        const dispatch = useDispatch();
   
        function handleInput(e){        
            //setInputValue(e);
            e != "" ? dispatch(inputFilled(e))  : dispatch(inputEmpty()) ;
            //dispatch(inputFilled(e))                 
        }
    
        return (
            <section className={styles.signupSection}>
                <h1 className={styles.title}>Welcome to CodeLeap network!</h1>
                <InputComp title="Please enter your username" placeholder="John doe" handleInput={handleInput} />
                <ButtonComp text="ENTER" active={button} /> 
                
                    
                
            </section>
        )
}
