import { AnyAction } from "redux"


export type ActionWithPayload<T,P> ={
    type: T;
    payload:P;
}

export type Action<T> ={
    type : T;
}
// overloading
// action with payload
export function createAction<T extends string,P>(type:T,payload:P) : ActionWithPayload<T,P>
// action without payload

export function createAction<T extends string>(type:T,payload:void) : Action<T>


export function createAction<T extends string , P>(type : T ,payload :P){
    return {type, payload}
}

// export const createAction =(type,payload)=>({type, payload})