"use client"
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { db } from "../lib/firebase"
import { doc, onSnapshot } from "firebase/firestore";
import { toast } from "react-hot-toast";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [userData, setuserData] = useState()
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      console.log(currentuser);
      try {
        onSnapshot(doc(db, "users", currentuser.email), (doc) => {
          setuserData(doc.data())
        });
      } catch (error) {
        toast.error(error)
      }

    });

    return () => {
      unsubscribe();
    };
  }, []);



  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }


  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        try {
          sendEmailVerification(auth.currentUser);
        } catch (error) {
          toast.error(error)

        }
      });
    return
  }

  function resetPassword(email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        toast.error(error.message)

        // ..
      });
  }


  function googleOAuth() {

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        setUser(user)
      }).catch((e) => {
        toast.error(e)

      });
  }

  function updateProfile(name) {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      toast.error(error)

      // ...
    });
  }

  function logOut() {
    return signOut(auth);
  }



  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, resetPassword, googleOAuth, updateProfile, userData }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
