import { createSelector } from "reselect";


const selectCategorReducer =(state)=>state.categories

export const selectCategories =createSelector(
  [selectCategorReducer],
  (categoriesSlice)=>categoriesSlice.categories
)

export const selectCategoryMap =createSelector(
  [selectCategories],
  (categories)=>categories.reduce((acc,category)=>{
    const {title,items}=category
    acc[title.toLowerCase()]=items
    return acc
  },{})
)

// (state)=> 
// state.categories.categories.reduce((acc,category)=>{
//     const {title,items}=category
//     acc[title.toLowerCase()]=items
//     return acc
//   },{})
//   return categoryMap;
;