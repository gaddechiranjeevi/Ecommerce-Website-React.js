import React from "react";

const AuthContext = React.createContext({
    token: '',
    email: '',
    isLoggedIn: false,
    login: (token, email) => {},
});

export default AuthContext;