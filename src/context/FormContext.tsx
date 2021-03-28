import React from 'react'
import { createContext, useReducer } from 'react'
import { initialState } from '../initialState'
import infoReducer from '../reducers/infoReducer'
import { IFormContextType } from '../types'
export const FormContext = createContext({} as IFormContextType)

export const FormStore = ({ children, ...rest }) => {
    const [state, dispatch] = useReducer(infoReducer, {
        ...initialState,
        ...rest.initValue,
    })
    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    )
}
