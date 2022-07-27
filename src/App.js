import './App.css';
import  Menu  from './components/menu/menu.components';
import {categories} from "./components/menu/category-menu"
import "./categories.styles.scss"


const App =()=> {
  
  return (
   <Menu categories={categories}/>
  );
}

export default App;
