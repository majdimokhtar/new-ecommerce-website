import {Outlet} from "react-router-dom";
import { Fragment,useContext } from "react";
import {SignOutUser} from "../../utils/firebase/firebase.utils.js"
import { ReactComponent as CrownLogo} from "../../assets/crown.svg"
import CartIcon from "../../components/card-icon/cart-icon.component.jsx";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context.jsx";
import {NavigationContainer,LogoContainer,NavLink,NavLinks} from "./navigation.styles"
import "./navigation.styles.jsx"


const Navigation =()=>{
  const {currentUser}=useContext(UserContext)
  const {isCartOpen}=useContext(CartContext)

  // console.log(currentUser);
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
            <CrownLogo className="logo"/>
            </LogoContainer>
        <NavLinks>
            <NavLink to="/shop">
            Shop
            </NavLink>
            
            {currentUser ? (
              <NavLink as="span" onClick={SignOutUser} >
              Log Out
              </NavLink> )
              :(
              <NavLink to='/auth'>
              Sign In
              </NavLink>)}
            <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropDown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation