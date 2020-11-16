import React, { useReducer, createContext } from "react";
import { useContext } from "react";
import { FormReducer } from '../utils/FormUtils';

const initialState = {
  name: "",
  email: "",
  password: "",
  gender: "",
  year: "",
  month: "",
  day: ""
}

const FormStateContext = createContext(null)
const FormDispatchContext = createContext(null)

export const JoinProvider = ({children}) => {
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