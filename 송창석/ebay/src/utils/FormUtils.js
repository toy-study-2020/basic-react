import { useReducer } from "react";

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

const FormUtils = (initialForm) => {
    const [values, dispatchValues] = useReducer(reducer, initialForm)

    const changeValuesHandler = (e) => {
        const {name, value} = e.target;
        dispatchValues({
            type: "CHANGE_VALUE",
            name,
            value
        })
    }

    const submitValuesHandler = (e, ...options) => {
        e.preventDefault();
        dispatchValues({
            type: "SUBMIT_VALUE",
            options
        })
    }

    return {
        values,
        changeValuesHandler,
        submitValuesHandler
    }
}

export default FormUtils