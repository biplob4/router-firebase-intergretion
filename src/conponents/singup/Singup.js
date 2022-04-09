import React from 'react';
import app from '../../firebase.init';
import './Singup.css'
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';


const auth = getAuth(app)
const Singup = () => {
    const [singInWithGoogle, user] = useSignInWithGoogle(auth);
    // const {singInWithGoogle}= useFirebase()
    return (
        <div>
            <h1>Please Singe-Up</h1>
            <button style={{fontSize:"20px"}} onClick={() => singInWithGoogle()}> <>Sing-In</> </button>
        </div>
    );
};

export default Singup;