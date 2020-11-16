import React, { useReducer, createContext } from "react";
import { useContext } from "react";
import { FormReducer } from '../utils/FormUtils';

const initialState = {
  email: "",
  password: ""
}

const FormStateContext = createContext(null)
const FormDispatchContext = createContext(null)

export const LoginProvider = ({children}) => {
  const [state, dispatch] = useReducer(FormReducer, initialState)

  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  )
}

export const useFormState = () => {
  const state = useContext(FormStateContext)
  return state
}

export const useFormDispatch = () => {
  const dispatch = useContext(FormDispatchContext)
  return dispatch
}