import {CATEGORIES_ACTION_TYPES} from "./category.types"


const CATEGORIES_INITIAL_STATE ={
    categories:[],
    isLoading:false,
    error:null,
}

// user reducer
export const categoryReducer =(state=CATEGORIES_INITIAL_STATE,action={})=>{
  const {type,payload}= action
    
    switch(type) {
      case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
        return {...state ,
                isLoading :true
               }
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
        return {
         ...state,
         categories: payload,
         isLoading : false
        }
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
          return {
           ...state,
           isLoading : false,
           error:payload
          }
        default : 
               return state
    }
}