import * as ActionType from './ActionType';

export const addComment=(dishId, rating, comment, author) => ({
    type: ActionType.ADD_COMMENT,
    payload: {
        dishId: dishId,
        comment: comment,
        rating: rating,
        author: author
    }
})