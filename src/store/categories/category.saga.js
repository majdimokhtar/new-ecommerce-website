import {all,call,put,takeLatest} from "redux-saga/effects"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { fetchCategorySuccess,fetchCategoryFail } from "./category.action"
import { CATEGORIES_ACTION_TYPES } from "./category.types"



export function* fetchCategoryAsync(){
    try {
        const categoryArray = yield call(getCategoriesAndDocuments, "categories")
        yield put(fetchCategorySuccess(categoryArray))
    } catch (error) {
        yield put(fetchCategoryFail(error))
    }
}

export function* onFetchCategories () {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoryAsync)
}

export function* categorySaga (){
    yield all([call(onFetchCategories)])
}