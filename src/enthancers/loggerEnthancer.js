export const loggerEnthancer = store => next => action => {
    console.log(`type: ${action.type}, payload: ${action.payload}`);
    console.log(JSON.stringify(store.getState()));
    return next(action);
}

/*
    function (store) {
        return function (next) {
            return function (action) {
                //todo
                return next(action);
            }
        }

    }*/
