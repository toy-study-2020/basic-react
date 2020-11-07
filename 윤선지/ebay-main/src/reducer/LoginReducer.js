import { useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.id]: {
                    value: action.value,
                    display: action.toggleDisplay
                }
            }
        case "SUBMIT_VALUE": {
                const emptyArr = Object.keys(action.values).filter(key =>
                    action.values[key].value === ''
                )
                emptyArr.length === 0 ? console.log(action.values) : alert(emptyArr + '이 입력되지 않았습니다.');
                return state
            }
        default:
            return state
    }
}

const LoginReducer = (initialState) => {
    const [values, dispatchValues] = useReducer(reducer, initialState);

    const onChangeEvt = e => {
        const toggleDisplay = (e.target.value !== '') ? true : false;
        const { id, value } = e.target;

        dispatchValues({
            type: 'CHANGE_INPUT',
            id,
            value,
            toggleDisplay
        });
    }

    const onSubmitEvt = e => {
        e.preventDefault();

        dispatchValues({
            type: "SUBMIT_VALUE",
            values
        })
    }
    
    return {
        values,
        onChangeEvt,
        onSubmitEvt
    }
};

export default LoginReducer;
