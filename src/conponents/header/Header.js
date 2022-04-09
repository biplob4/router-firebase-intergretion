import React from 'react';
import { getAuth,signOut } from 'firebase/auth';
import app from '../../firebase.init';
import CoustomLink from '../../utilitij/CoustomLink';
import './Header.css'

const auth = getAuth(app)
const Header = () => {
    return (
        <div className='menu'>
            <nav>
                <CoustomLink to="/">HOME</CoustomLink>
                <CoustomLink to="/order">ORDER</CoustomLink>
                <CoustomLink to="/product">PRODUCT</CoustomLink>
                <CoustomLink to="/singup">SINGUP</CoustomLink>
                <CoustomLink to="/reviews">REVIEWS</CoustomLink>
                <button style={{cursor:"pointer"}} onClick={() => signOut(auth)}>Log-Out</button>
            </nav>
        </div>
    );
};

export default Header;