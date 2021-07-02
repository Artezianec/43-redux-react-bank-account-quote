import {accountReducer} from "../reducers/accountReducer";
import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";

export const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
}
export const store = createStore(accountReducer, initialState, applyMiddleware(logger));