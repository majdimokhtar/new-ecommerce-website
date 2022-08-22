import {CATEGORIES_ACTION_TYPES} from "./category.types"


const CATEGORIES_INITIAL_STATE ={
    categoriesMap:{}
}

// user reducer
export const categoryReducer =(state=CATEGORIES_INITIAL_STATE,action={})=>{
  const {type,payload}= action
    
    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
        return {
         ...state,
         categoriesMap:payload
        }
        default : 
               return state
    }
}