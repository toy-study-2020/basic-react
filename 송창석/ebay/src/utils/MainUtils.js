import { useReducer } from 'react';
import { fetchJson } from './fetch';

const initialState = {
    menu: {
        main: [],
        side: []
    },
    mainStore: {
        title: "",
        items: []
    },
    mainBest: {
        title: "",
        items: []
    },
    mainEvent: {
        title: "",
        items: []
    },
    mainProducts: {
        title: "",
        items: []
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case "DISPATCH_GNB": 
            return {
                ...state,
                [action.name]: {
                    main: action.res.mainMenu,
                    side: action.res.sideMenu
                }
            }
        case "DISPATCH_CONTENT":
            return {
                ...state,
                [action.name]: {
                    title: action.res[action.name].title,
                    items: action.res[action.name].items
                }
            }
        default:
            return state
    }
}

const fetchData = async (dispatch, type, name) => {
    const res = await fetchJson(name)
    dispatch({
        type,
        res,
        name
    })
}

const MainUtils = () => {
    const [apis, dispatchApis] = useReducer(reducer, initialState)

    return {
        apis,
        dispatchApis,
        fetchData
    }
};

export default MainUtils;