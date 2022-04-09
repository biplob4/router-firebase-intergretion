import React from 'react';
import app from '../../firebase.init';
import './Singup.css'
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const auth = getAuth(app)
const Singup = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [singInWithGoogle, user] = useSignInWithGoogle(auth);

    const handelSingin = () => {
        singInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div>
            <h1>Please Singe-Up</h1>
            <button style={{ fontSize: "20px" }} onClick={handelSingin}> <>Sing-In</> </button>
        </div>
    );
};

export default Singup;