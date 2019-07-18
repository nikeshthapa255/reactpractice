// It's a reducer


import * as ActionType from './ActionType';


export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promos: []
}, action) => {
    switch (action.type) {
        case ActionType.PROMOS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, promos: [] }

        case ActionType.PROMOS_LOADING:
            return { ...state, isLoading: true, errMess: null, promos: [] }

        case ActionType.ADD_PROMOS:
            return { ...state, isLoading: false, errMess: null, promos: action.payload }
        default: return state;
    }
}