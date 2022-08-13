import { initializeApp } from "firebase/app";
import { getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged
      } from "firebase/auth";
import { getFirestore,
        doc,
        getDoc,
        setDoc,
        collection,
        writeBatch,
        query,
        getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDWL1YeEeWqv6_dvdkDAJrNCvaji0XnSWY",
    authDomain: "e-commerce-clothing-5b8ed.firebaseapp.com",
    projectId: "e-commerce-clothing-5b8ed",
    storageBucket: "e-commerce-clothing-5b8ed.appspot.com",
    messagingSenderId: "93069973927",
    appId: "1:93069973927:web:94a7695cae63fb0142fe82"
  };

  
  initializeApp(firebaseConfig);

// google auth configuration
// google auth is a class
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth()
  export const signInWithGooglePopup =()=>signInWithPopup(auth,googleProvider)
  export const signInWithGoogleRedirect =()=>signInWithRedirect(auth ,googleProvider)


  export const db =getFirestore()

  export const addCollectionAndDocument = async(collectionKey,objectsToAdd)=>{
   const collectionRef = collection(db,collectionKey)
  //  db transaction via batch
   const batch = writeBatch(db)
   objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)
   });
   await batch.commit()
   console.log("done");
  }
export const getCategoriesAndDocuments =async()=>{
  const collectionRef =collection(db,"categories")
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
    const {title,items}=docSnapshot.data()
    acc[title.toLowerCase()]=items
    return acc
  },{})
  return categoryMap;
}


  export const createUserDocumentFromAuth= async(userAuth,
    additionalInformation={} )=>{
  if(!userAuth) return;
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
            createdAt,
            ...additionalInformation
        })
    } catch (err) {
        console.log("error creating the user",err.message);
    }
  }
    //check if user data exist
    //return user doc ref
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async(email,password)=>{
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const SignInAuthUserWithEmailAndPassword = async(email,password)=>{
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password)
  }

  export const SignOutUser =async()=> await signOut(auth)

  export const onAuthStateChangedListner =(callback)=> onAuthStateChanged(auth,callback)