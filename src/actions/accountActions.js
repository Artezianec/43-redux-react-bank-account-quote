export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const PUT_QUOTE = 'PUT_QUOTE';

export const depositAction = sum => ({
    type: DEPOSIT,
    payload: sum
})

export const withdrawAction = sum => ({
    type: WITHDRAW,
    payload: sum
})

export const putQuoteAction = quote => ({
    type: PUT_QUOTE,
    payload: quote
})