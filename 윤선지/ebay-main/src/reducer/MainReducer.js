import { useReducer } from 'react';
import { getFetch } from '../utils/utils';

const initialState = {
    menu: {
        mainMenu: [],
        sideMenu: []
    },
    mainSlider: {
        slide: []
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
        case "DISPATCH_MENU":
            return {
                ...state,
                [action.name]: {
                    mainMenu: action.data.mainMenu,
                    sideMenu: action.data.sideMenu
                }
            }
        case "DISPATCH_CONTENT":
            return {
                ...state,
                [action.name]: {
                    title: action.data[action.name].title,
                    items: action.data[action.name].items
                }
            }
        case "DISPATCH_SLIDE":
            return {
                ...state,
                [action.name]: {
                    slide: action.data[action.name].slide,
                }
            }
        default:
            return state
    }
}

const MainReducer = () => {
    const [mainState, dispatch] = useReducer(reducer, initialState);

    const getData = async (type, name) => {
        const data = await getFetch(name);
        
        dispatch({
          type,
          data,
          name
        });
    }

    return {
        mainState,
        getData
    }
};

export default MainReducer;