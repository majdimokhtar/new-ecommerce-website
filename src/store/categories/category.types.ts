export enum CATEGORIES_ACTION_TYPES {
    // SET_CATEGORIES :"category/SET_CATEGORIES",
    FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
    FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_FAIL = "category/FETCH_CATEGORIES_FAIL",
}

export type CategoryItem ={
    id :number;
    imageUrl:string;
    name:string;
    price :number;
}


export type Category ={
    title:string;
    imageUrls : string;
    items :CategoryItem[];
}


export type CategoryMap ={
    [key : string] : CategoryItem[]
}