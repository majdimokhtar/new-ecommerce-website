import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { getFirestore,doc,getDoc,setDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDWL1YeEeWqv6_dvdkDAJrNCvaji0XnSWY",
    authDomain: "e-commerce-clothing-5b8ed.firebaseapp.com",
    projectId: "e-commerce-clothing-5b8ed",
    storageBucket: "e-commerce-clothing-5b8ed.appspot.com",
    messagingSenderId: "93069973927",
    appId: "1:93069973927:web:94a7695cae63fb0142fe82"
  };

  
  const firebaseApp = initializeApp(firebaseConfig);

// google auth configuration
// google auth is a class
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth()
  export const signInWithGooglePopup =()=>signInWithPopup(auth,provider)


  const db =getFirestore()

  export const createUserDocumentFromAuth= async(userAuth)=>{
  const userDocRef =doc(db , "users" , userAuth.uid)
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists());
  //if user data does not exist
  //create/set document with data of user auth inmy collection
  if (!userSnapshot.exists()) {
    const {displayName,email}= userAuth
    const createdAt = new Date()
    try {
        await setDoc(userDocRef , {
            displayName,
            email,
            createdAt
        })
    } catch (err) {
        console.log("error creating the user",err.message);
    }
  }
    //check if user data exist
    //return user doc ref
    return userDocRef;
  




  }