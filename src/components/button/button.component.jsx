
import {BaseButton,GoogleSignInBtn,InvertedBtn} from "./button-styles.jsx"

export const Button_TYPE_CLASS = {
    base:"base",
    google:"google-sign-in",
    inverted:"inverted",
}
const getButton = (buttonType = Button_TYPE_CLASS.base)=>(
  {
  [Button_TYPE_CLASS.base] : BaseButton,
  [Button_TYPE_CLASS.google] : GoogleSignInBtn,
  [Button_TYPE_CLASS.inverted] : InvertedBtn,
}[buttonType]
)

export default function Button({children,buttonType,...otherprops}) {
  const CustomButton =getButton(buttonType)
  return (
   <CustomButton {...otherprops}>
    {children}
   </CustomButton>
  )
}
