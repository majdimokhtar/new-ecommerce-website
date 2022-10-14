import {createAction,Action,ActionWithPayload,withMatcher} from "../../utils/reducer/reducer.utils"
import {CATEGORIES_ACTION_TYPES,Category} from "./category.types"


export type FetchCategoryStart =Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategorySuccess =ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>


export type FetchCategoryFail =ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL,Error>


export type CategoryAction =
| FetchCategoryStart
| FetchCategorySuccess
| FetchCategoryFail

export const fetchCategoryStart =withMatcher(():FetchCategoryStart=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START))


export const fetchCategorySuccess =withMatcher((categoriesArray : Category[]):FetchCategorySuccess =>  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray))


export const fetchCategoryFail =withMatcher((error:Error):FetchCategoryFail=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL ,error))
