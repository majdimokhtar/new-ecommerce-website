import { useNavigate } from "react-router-dom";
import {BackgroundImage,Body,CategoryItemContainer} from "./category-item.styles.jsx"



const CategoryItem = ({category})=>{
    const navigate = useNavigate()
    const {imageUrl,title,route}=category;
    const onNavigateHandler =()=>{
        navigate(route)
    }

return(
    <CategoryItemContainer onClick={onNavigateHandler} >
    <BackgroundImage imageUrl={imageUrl} />
    <Body>
     <h2>{title}</h2>
     <p>Shop Now</p>
    </Body>
    </CategoryItemContainer>
)


}


export default CategoryItem ;