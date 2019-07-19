import * as ActionType from './ActionType';
import { baseUrl } from '../shared/baseURL';


export const postFeedback = (values) => {
    const newFeedback = JSON.parse(JSON.stringify(values));
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl + "feedback", {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(response => alert("Thankyou for your Feedback\n" + JSON.stringify(response)))
        .catch(error => alert("Your Feedback Form could not be posted.\nError-" + error.message))

}


export const addComment = (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: comment
})
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + "comments", {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => alert("Your comment could not be posted.\nError-" + error.message))
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + "dishes")
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(err => dispatch(dishesFailed(err.message)));
}

export const dishesLoading = () => ({
    type: ActionType.DISHES_LOADING
})

export const dishesFailed = (errMess) => ({
    type: ActionType.DISHES_FAILED,
    payload: errMess
})

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes
})

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + "comments")
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errMess) => ({
    type: ActionType.COMMENTS_FAILED,
    payload: errMess
})

export const addComments = (comments) => ({
    type: ActionType.ADD_COMMENTS,
    payload: comments
})


export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + "promotions")
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionType.PROMOS_LOADING
})

export const promosFailed = (errMess) => ({
    type: ActionType.PROMOS_FAILED,
    payload: errMess
})

export const addPromos = (promos) => ({
    type: ActionType.ADD_PROMOS,
    payload: promos
})

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));
    return fetch(baseUrl + "leaders")
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionType.LEADERS_LOADING
})

export const leadersFailed = (errMess) => ({
    type: ActionType.LEADERS_FAILED,
    payload: errMess
})

export const addLeaders = (leaders) => ({
    type: ActionType.ADD_LEADERS,
    payload: leaders
})

