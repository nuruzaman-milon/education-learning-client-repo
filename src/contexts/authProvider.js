import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //google sign in
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    //auth state change observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
            // if(currentUser === null || currentUser.emailVerified){
            //     setUser(currentUser);
            // }
            // setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    //logout
    const logout = () =>{
        return signOut(auth);
    }

    //create manual user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //manual login user
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const authInfo = { user, providerLogin, logout, createUser, signIn }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;