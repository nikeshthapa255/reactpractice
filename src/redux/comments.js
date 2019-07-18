// It's a reducer

import * as ActionType from './ActionType';


export const Comments = (state = {
    errMss: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionType.COMMENTS_FAILED:
            return { ...state, errMess: action.payload, comments: [] }
        case ActionType.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload }
        case ActionType.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return { ...state, comments: state.comments.concat(comment) };
        default: return state;
    }
}