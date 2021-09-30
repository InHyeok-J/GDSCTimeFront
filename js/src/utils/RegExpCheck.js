export const checkPassword = function (str) {
    const regExp =
        /^(?=.*[!@#$%^&*()_+|<>?:{}])(?=.*[a-zA-Z])(?=.*[0-9]).{5,15}/i;
    return regExp.test(str) ? true : false;
};
