import {createAction} from "../../utils/reducer/reducer.utils"
import {CATEGORIES_ACTION_TYPES} from "./category.types"

// export const setCategories =(categoriesArray)=> createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)

export const fetchCategoryStart =()=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategorySuccess =(categoriesArray)=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray)


export const fetchCategoryFail =(error)=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL ,error)

// thunks
// export const fetchCategoryAsync =()=> async(dispatch)=>{
//     dispatch(fetchCategoryStart())
//     try {
//         const categoryArray = await getCategoriesAndDocuments("categories")
//         dispatch(fetchCategorySuccess(categoryArray))
//     } catch (error) {
//         dispatch(fetchCategoryFail(error))
//     }

// }