
// inverted btn
// google sign in button
// inverted btn
import "./button-styles.scss"

const Button_TYPE_CLASS = {
    google:"google-sign-in",
    inverted:"inverted",


}

export default function Button({children,buttonType,...otherprops}) {
  return (
   <button className={`button-container ${Button_TYPE_CLASS[buttonType]}`}
   {...otherprops}>
   {children}
   </button>
  )
}
