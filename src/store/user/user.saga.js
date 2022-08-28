import {all, call ,put,takeLatest} from "redux-saga/effects"

import {USER_ACTION_TYPES} from "./user.types"

import {signInSuccess , signInFail, signUpSuccess, signUpFail, signOutSuccess, signOutFail} from "./user.Action"

import {getCurrentUser,createUserDocumentFromAuth,signInWithGooglePopup, SignInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, SignOutUser} from "../../utils/firebase/firebase.utils"



export function* getSnapshotFromUserAuth (userAuth,additionalDetails){
try {
    const userSnapshot = yield call(createUserDocumentFromAuth,userAuth,additionalDetails)
    // console.log(userSnapshot)
    // console.log(userSnapshot.data());
    yield put(signInSuccess({id:userSnapshot.id , ...userSnapshot.data()}))
} catch (error) {
    yield put(signInFail(error))
}
}

export function* signInWithEmail({payload:{email,password}}){
    try {
        const {user} =yield call(SignInAuthUserWithEmailAndPassword,email,password)
        yield call(getSnapshotFromUserAuth,user)
    } catch (error) {
        yield put(signInFail(error))
    }
}

export function* signUp({payload:{email,displauName,password}}){
    try {
        const {user} =yield call(createAuthUserWithEmailAndPassword,email,password)
        yield put(signUpSuccess(user,{displauName}))
    } catch (error) {
        yield put(signUpFail(error))
    }
}
export function* SignInAfterSignUp({payload:{user,additionalDetails}}){
 yield call(getSnapshotFromUserAuth,user,additionalDetails)
}

export function* signOut(){
try {
    yield call(SignOutUser)
    yield put(signOutSuccess())
} catch (error) {
    yield put(signOutFail(error))
}
}

export function* isUserAuthenticated (){
    try {
        const userAuth =yield call(getCurrentUser)
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth ,userAuth)
    } catch (error) {
        yield put(signInFail(error))
    }
}

// google sign in
export function* signInWithGoogle(){
try {
   const {user} = yield call(signInWithGooglePopup)
   yield call(getSnapshotFromUserAuth,user)
} catch (error) {
    yield put(signInFail(error))
}
}
export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,signInWithGoogle )
}

export function* onChekUserSession (){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,isUserAuthenticated )
}


export function* onEmailSignInStart(){
    yield(takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,signInWithEmail))
}


export function* onSignupStart(){
    yield(takeLatest(USER_ACTION_TYPES.SIGN_UP_START,signUp))
}
export function* onSIgnupSuccess(){
    yield(takeLatest(USER_ACTION_TYPES.SIGN_IN_SUCCESS,SignInAfterSignUp))
}

export function* onSignoutStart(){
    yield(takeLatest(USER_ACTION_TYPES.SIGN_OUT_START,signOut))
}


export function* userSagas (){
    yield all([call(onChekUserSession) , 
              call(onGoogleSignInStart), 
              call(onEmailSignInStart),
              call(onSignupStart),
              call(signUpSuccess),
              call(onSignoutStart)
              ])
}