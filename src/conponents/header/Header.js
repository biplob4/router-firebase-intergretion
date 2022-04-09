import React from 'react';
import { getAuth,signOut } from 'firebase/auth';
import app from '../../firebase.init';
import CoustomLink from '../../utilitij/CoustomLink';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app)

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='menu'>
            <nav>
                <CoustomLink to="/">HOME</CoustomLink>
                <CoustomLink to="/product">PRODUCT</CoustomLink>
                <CoustomLink to="/singup">SINGUP</CoustomLink>
                <CoustomLink to="/reviews">REVIEWS</CoustomLink>
                <CoustomLink to="/order">ORDER</CoustomLink>
                {user && <CoustomLink to="/coien">Coien</CoustomLink>}
                {user && <button style={{cursor:"pointer"}} onClick={() => signOut(auth)}>Log-Out</button>}
            </nav>
        </div>
    );
};

export default Header;