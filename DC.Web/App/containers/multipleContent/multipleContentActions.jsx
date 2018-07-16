import { GET_PAGE_SUCCESS, GET_PAGE_ERROR } from "./multipleContentConstants.jsx"
import "isomorphic-fetch"

export function getPage(url) {
    return (dispatch) => {
        let queryTrailer = `?url=${url}`;
        
        fetch(constants.getPage + queryTrailer)
            .then((response) => {
                return response.json();
            }).then((data) => {
                dispatch({ type: GET_PAGE_SUCCESS, payload: data });
            }).catch((ex) => {
                dispatch({ type: GET_PAGE_ERROR, payload: ex });
            });
    }
}