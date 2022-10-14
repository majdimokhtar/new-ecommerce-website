import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

const selectCategorReducer =(state) : CategoriesState=>state.categories

export const selectCategories =createSelector(
  [selectCategorReducer],
  (categoriesSlice)=>categoriesSlice.categories
)

export const selectCategoryMap =createSelector(
  [selectCategories],
  (categories):CategoryMap =>categories.reduce((acc,category)=>{
    const {title,items}=category
    acc[title.toLowerCase()]=items
    return acc
  },{} as CategoryMap)
)

export const selectCategoryIsLoading =createSelector(
  [selectCategorReducer],
  (categoriesSlice)=>categoriesSlice.isLoading
)