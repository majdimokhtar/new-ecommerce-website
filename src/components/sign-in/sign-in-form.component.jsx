import {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import Button ,{Button_TYPE_CLASS} from '../button/button.component'
// import {SignInAuthUserWithEmailAndPassword,
//         signInWithGooglePopup} from "../../utils/firebase/firebase.utils"
import { useDispatch } from 'react-redux'
import { emailSignInStart, googleSignInStart } from '../../store/user/user.Action'

import "./sign-in-form.styles.scss"




const defaultFormField ={
    email: "",
    password:"",
}


export default function SignInForm() {
  const dispatch = useDispatch()
  const [formFields,setFormFields]=useState(defaultFormField)
  const {email,password}=formFields
  
  const SignInWithGoogle =async()=>{
    dispatch(googleSignInStart())
    // await signInWithGooglePopup()
    // setCurrentUser(user)
}


  // console.log(formFields);
  const resetFormField=()=>{
    setFormFields(defaultFormField)
  }
  const handleSubmit =async(event)=>{
    event.preventDefault()
    try
    { dispatch(emailSignInStart(email,password))
      // setCurrentUser(user)
      // console.log(user)
        resetFormField()
    } catch(err){
      switch (err.code) {
        case "auth/wrong-password":
          alert("wrong Password")
        break;
         case "auth/user-not-found":
          alert("User Not Found")
        break;
        default:
      }
        console.log(err);
    }}

    const handleChange =(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})
        }
    //  console.log(formFields);

  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
        <FormInput 
        label="Email"
        type="email" required name='email' value={email} onChange={handleChange}/>

        <FormInput 
        label="Password"
        type="password" required name='password' value={password} onChange={handleChange}/>
         <div className='buttons-container'>
        <Button type='submit'>Sign In</Button>
        <Button type='button' onClick={SignInWithGoogle} buttonType={Button_TYPE_CLASS.google} >Google Sign In</Button>
         </div>

        </form>
    </div>
  )
}
