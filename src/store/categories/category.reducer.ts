import { AnyAction } from 'redux';
import {CATEGORIES_ACTION_TYPES,Category} from "./category.types"
import { CategoryAction,fetchCategoryStart,fetchCategorySuccess,fetchCategoryFail } from "./category.action"

export type CategoriesState ={
  readonly categories : Category[];
  readonly isLoading : boolean;
  readonly error : Error | null;
}

const CATEGORIES_INITIAL_STATE :CategoriesState ={
    categories:[],
    isLoading:false,
    error:null,
}

// user reducer
export const categoryReducer =(state=CATEGORIES_INITIAL_STATE,action={} as AnyAction): CategoriesState => {
  // const {type,payload}= action
    if(fetchCategoryStart.match(action)){
      return {...state , isLoading :true}
    }
    if(fetchCategorySuccess.match(action)){
        return {
         ...state,
         categories: action.payload,
         isLoading : false
        }
    }
    if(fetchCategoryFail.match(action)){
          return {
           ...state,
           isLoading : false,
           error: action.payload
          }
    }
    return state;}

    
//     switch(action.type) {
//       case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//         return {...state ,
//                 isLoading :true
//                }
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//         return {
//          ...state,
//          categories: action.payload,
//          isLoading : false
//         }
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
//           return {
//            ...state,
//            isLoading : false,
//            error: action.payload
//           }
//         default : 
//                return state
//     }
// }