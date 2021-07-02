export const loggerEnthancer = function (store) {
    return function (next) {
        return function (action) {
            //todo
            return next(action);
        }
    }

}