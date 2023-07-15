"use client"
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { db } from "../lib/firebase"
import { doc, onSnapshot } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [userData, setuserData] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      try {
        onSnapshot(doc(db, "users", currentuser.email), (doc) => {
          setuserData(doc.data())
        });
      } catch (error) {

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
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function logOut() {
    return signOut(auth);
  }





  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, userData }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
