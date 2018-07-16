import { GET_PAGE_SUCCESS, GET_PAGE_ERROR } from "./multipleContentConstants.jsx"

const initialState = {
    data: { pageId: 0, header: "", cards: [], paragraphs: [] },
    error: ""
}

export default function multipleContent(state = initialState, action) {
    switch (action.type) {
    case GET_PAGE_SUCCESS:
        return { ...state, data: action.payload, error: "" }

    case GET_PAGE_ERROR:
        return { ...state, error: action.payload }

    default:
        return state;
    }
}
