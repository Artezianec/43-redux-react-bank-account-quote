import {DEPOSIT, PUT_QUOTE, WITHDRAW} from "../actions/accountActions";

export const accountReducer = (state, action) => {
    switch (action.type) {
        case DEPOSIT:
            return {...state, balance: state.balance + action.payload};
        case WITHDRAW:
            const res = state.balance - action.payload;
            return {...state, balance: res >= 0 ? res: state.balance};
        case PUT_QUOTE:
            return {...state, quote: action.payload};
        default:
            return state;
    }
}