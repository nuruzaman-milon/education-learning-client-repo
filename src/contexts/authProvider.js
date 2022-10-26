import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
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
    
    const authInfo = { user, providerLogin }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;