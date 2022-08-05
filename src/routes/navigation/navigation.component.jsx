import {Outlet,Link} from "react-router-dom";
import { Fragment,useContext } from "react";
import {SignOutUser} from "../../utils/firebase/firebase.utils.js"
import { ReactComponent as CrownLogo} from "../../assets/crown.svg"
import CartIcon from "../../components/card-icon/cart-icon.component.jsx";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context.jsx"; 
import "./navigation.styles.scss"


const Navigation =()=>{
  const {currentUser}=useContext(UserContext)
  const {isCartOpen}=useContext(CartContext)

  // console.log(currentUser);
    return (
      <Fragment>
        <div className="navigation">
            <Link to="/" className="logo-container">
            <CrownLogo className="logo"/>
            </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
            Shop
            </Link>
            <Link className="nav-link" to="/authentication">
            {currentUser ? (
              <span className="nav-link" onClick={SignOutUser} >
              Log Out
              </span> )
              :(
              <span className="nav-link">
              Sign In
              </span>)}
            </Link>
            <CartIcon/>
        </div>
        {isCartOpen && <CartDropDown/>}
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation