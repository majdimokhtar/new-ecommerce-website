import CategoriesPreview from "../categories-preview/categories-preview-component"
import Category from "../category/category.component"
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils"
import {setCategories} from "../../store/categories/category.action"
import { Routes,Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./shop.styles.scss"


export default function Shop() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const getCategoriesMap =async()=>{
    const categoryArray = await getCategoriesAndDocuments("categories")
    console.log(categoryArray);
    // console.log(categoryMap)
    dispatch(setCategories(categoryArray))
    }
    getCategoriesMap()
    
},[dispatch])

  return (
   <Routes>
    <Route index element={<CategoriesPreview/>} />
    <Route path=":category" element={<Category/>} />
   </Routes>
   
  )
}
