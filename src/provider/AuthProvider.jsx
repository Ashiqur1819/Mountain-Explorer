import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState('')

    // Sign Up
    const createNewUser = (email, password) => {
        setUser('')
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // Log In
    const userLogin = (email, password) => {
        setUser('')
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Log In
    const loginWithGoogle = () => {
        setUser('')
       return signInWithPopup(auth, googleProvider);
    }

    // Log Out
       const logOut = () => {
         signOut(auth)
           .then((result) => {
             setUser(result.user);
             console.log(result.user);
           })
           .catch((error) => {
             console.log(error);
           });
       };

    // Update User Profile
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // On State change
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return() => {
            unsubscribe()
        }
    },[])


    const authInfo = {
      createNewUser,
      userLogin,
      loginWithGoogle,
      user,
      setUser,
      updateUserProfile,
      logOut,
    };

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;