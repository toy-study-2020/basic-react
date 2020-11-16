export const FormReducer = (state, action) => {
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

export const changeValuesHandler = (dispatch) => {
  const onChangeHandler = (e) => {
    const {name, value} = e.target
    dispatch({
      type: "CHANGE_VALUE",
      name,
      value
    })
  }
  return onChangeHandler
}

export const submitValuesHandler = (dispatch) => {
  const onSubmitHandler = (e, ...options) => {
    e.preventDefault()
    dispatch({
      type: "SUBMIT_VALUE",
      options
    })
  }
  return onSubmitHandler
}