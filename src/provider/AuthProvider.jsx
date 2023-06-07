import  { createContext } from 'react';
import {getAuth, createUserWithEmailAndPassword, updateProfile,  onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import app from '../firebase/firebase.config';


import { useEffect } from 'react';
import { useState } from 'react';




export const AuthContext = createContext(null)
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(true)

    
    const createUser = (email, password) => {

        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const setUserProfile = (name, photo) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const singInUser = (email, password) => {
        // setLoading(true)

        return signInWithEmailAndPassword(auth , email, password)
    }

    const logOut = () => {
        // setLoading(true)

        return signOut(auth)
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser)
            // setLoading(false)


        })

        return () => {
            unsubscribe();
        }
    }, [])


    
    const authInfo = {
        user,
        createUser,
        singInUser,
        logOut,
        setUserProfile,
        // loading,
       
       
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;