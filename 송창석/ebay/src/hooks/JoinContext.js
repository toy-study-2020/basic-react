import React, { useReducer, createContext } from "react";
import { useContext } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  gender: "",
  year: "",
  month: "",
  day: ""
}

const reducer = (state, action) => {
  switch(action.type) {
    case "CHANGE_VALUE": {
      return {
        ...state,
        [action.name]: action.value
      }
    }
    case "SUBMIT_VALUE": {
      const valueArr = action.options.filter(opts => state[opts.NAME] === "")
      if(valueArr.length !== 0) alert(`${valueArr.map(it => it.LABEL)}을 확인해주세요.`)
      else console.log(state)
      return state
    }
    default:
      return state
  }
}

const FormStateContext = createContext(null)
const FormChangeContext = createContext(null)
const FormSubmitContext = createContext(null)

export const JoinProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeValuesHandler = (e) => {
    const {name, value} = e.target;
    dispatch({
      type: "CHANGE_VALUE",
      name,
      value
    })
  }
  
  const submitValuesHandler = (e, ...options) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_VALUE",
      options
    })
  }

  return (
    <FormStateContext.Provider value={state}>
      <FormChangeContext.Provider value={changeValuesHandler}>
        <FormSubmitContext.Provider value={submitValuesHandler}>
          {children}
        </FormSubmitContext.Provider>
      </FormChangeContext.Provider>
    </FormStateContext.Provider>
  )
}

export const useFormState = () => {
  const state = useContext(FormStateContext)
  return state
}

export const useFormChange = () => {
  const onChange = useContext(FormChangeContext)
  return onChange
}

export const useFormSubmit = () => {
  const onSubmit = useContext(FormSubmitContext)
  return onSubmit
}
