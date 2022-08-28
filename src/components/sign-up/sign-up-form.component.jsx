

import {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { useDispatch } from 'react-redux'
// import {createAuthUserWithEmailAndPassword,
//         createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

import "./sign-up-form.styles.scss"
import { signUpStart } from '../../store/user/user.Action'


const defaultFormField ={
    displayName: "",
    email: "",
    password:"",
    confirmPassword:""
}

export default function SignUpForm() {
  const dispatch = useDispatch()
  const [formFields,setFormFields]=useState(defaultFormField)
  const {displayName,email,password,confirmPassword}=formFields
  console.log(formFields);
  const resetFormField=()=>{
    setFormFields(defaultFormField)
  }
  const handleSubmit =async(event)=>{
    event.preventDefault()
    if(password!==confirmPassword)
    {
        alert("passwords does not match");
        return;
    }
    try
    {
        // const {user} = await createAuthUserWithEmailAndPassword(email,password)
        // await createUserDocumentFromAuth(user,{displayName})
        dispatch(signUpStart(email,displayName,password))
        resetFormField()
    } catch(err){
        if (err.code==="auth/email-already-in-use") {
            alert("User already exist")
        }else{
            console.log(err.message);
        }
    }
    }
    const handleChange =(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})
        }
  console.log(formFields);

  return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
        <FormInput 
        label="Display Name"
        type="text" required name='displayName' value={displayName} onChange={handleChange} />

        <FormInput 
        label="Email"
        type="email" required name='email' value={email} onChange={handleChange}/>

        <FormInput 
        label="Password"
        type="password" required name='password' value={password} onChange={handleChange}/>

        <FormInput 
        label="Confirm Password"
        type="password" required name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
        <Button type='submit'>Sign Up</Button>
        </form>
    </div>
  )
}
