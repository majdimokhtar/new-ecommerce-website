import  Menu from "../../components/menu/menu.components"
import { categories } from '../../components/menu/category-menu';



const Home =()=> {
  
  return (
   <Menu categories={categories}/>
  );
}

export default Home;