import { createContext, useReducer ,useEffect } from "react";
import { authReducer } from "./authReducer";
import PropTypes  from "prop-types";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const[state, dispatch] = useReducer(authReducer, {
        user:null
    } )

    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user)
        {
            dispatch({type: 'LOGIN', payload: user})
        }
    }, [])

    console.log('Auth Context state', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
    }