import {accountReducer} from "../reducers/accountReducer";
import {applyMiddleware, createStore} from "redux";
import {loggerEnthancer} from "../enthancers/loggerEnthancer";

export const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
}
export const store = createStore(accountReducer, initialState, applyMiddleware(loggerEnthancer));