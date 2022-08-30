import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import  {Button_TYPE_CLASS} from "../button/button.component";
import {PaymentFormContainer,FormContainer,PaymentBtn} from "./payment-form.styles"
import { useState } from "react";
import { useSelector } from "react-redux";
import {selectCartTotal} from "../../store/cart/cart.selector"
import {selectCurrentUser} from "../../store/user/user.selector"


export default function PaymentForm() {
    const stripe = useStripe()
    const elements=useElements()
    const [isProcessingStatement , setIsProcessingStatement ] =useState(false)
    const amount =useSelector(selectCartTotal)
    const currentUser =useSelector(selectCurrentUser)
    const paymentHandler =async (e)=>{
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingStatement(true)
        const response = await fetch('/.netlify/functions/create-payment-intent' , {
            method: 'POST',
            // mode:'no-cors',
            headers : {
              'Content-Type': 'application/json',
            },
            body :JSON.stringify({amount : amount*100})
        }).then((res)=>{return res.json()})
        console.log(response);
        const clientSecret = response.paymentIntent.client_secret;

        console.log(clientSecret)
        const paymentResult = await stripe.confirmCardPayment(clientSecret,{
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details:{
              name: currentUser ? currentUser.displayName  : "Majdi Mokhtar"
            }
          }
        })
        setIsProcessingStatement(false)
        if (paymentResult.error) {
          alert(paymentResult.error.message)
        } else{
          if (paymentResult.paymentIntent.status==="succeeded") {
            alert("Payment Successful")
          }
        }
    }
  return (
    <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler} >
            <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentBtn buttonType={Button_TYPE_CLASS.inverted} isLoading={isProcessingStatement} >Pay Now</PaymentBtn>
        </FormContainer>
    </PaymentFormContainer>
  )
}
