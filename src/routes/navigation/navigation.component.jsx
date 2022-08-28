import {Outlet} from "react-router-dom";
import { Fragment } from "react";
// import {SignOutUser} from "../../utils/firebase/firebase.utils.js"
import { ReactComponent as CrownLogo} from "../../assets/crown.svg"
import CartIcon from "../../components/card-icon/cart-icon.component.jsx";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { useSelector,useDispatch } from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector"
import {selectCartOpen} from "../../store/cart/cart.selector"
// import { CartContext } from "../../contexts/cart.context.jsx"
import {NavigationContainer,LogoContainer,NavLink,NavLinks} from "./navigation.styles"
import "./navigation.styles.jsx"
import { signOutStart } from "../../store/user/user.Action.js";


const Navigation =()=>{
  const dispatch = useDispatch()
  const currentUser =useSelector(selectCurrentUser)
  const signOutUser =()=>dispatch(signOutStart())
  // const {currentUser}=useContext(UserContext)
  // const {isCartOpen}=useContext(CartContext)
  const isCartOpen = useSelector(selectCartOpen)
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
              <NavLink as="span" onClick={signOutUser} >
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