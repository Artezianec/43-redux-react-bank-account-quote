import {accountReducer} from "../reducers/accountReducer";
import {createStore} from "redux";

export const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
}
export const store = createStore(accountReducer, initialState);