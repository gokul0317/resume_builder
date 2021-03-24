import { LOAD_STATE, GET_RESUMES, GET_RESUMES_ERROR, SET_LOADING, GET_SINGLE_RESUME, ADD_RESUMES, EDIT_RESUME, DELETE_SINGLE_RESUME } from '../actions/types'

const initialState = {
    loading: true,
    resumes: [],
    resume: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_STATE:
            return {
                ...state,
                resume: action.payload
            }
        case GET_RESUMES:
            return {
                ...state,
                loading: false,
                resumes: action.payload
            }
        case GET_RESUMES_ERROR:
            return {
                ...state,
                loading: false,
            }
        case ADD_RESUMES:
            return {
                ...state,
                loading: false,
                resumes: [...state.resumes, action.payload]
            }
        case EDIT_RESUME:
            const updateResumes = [...state.resumes]
            const resumeIndex = updateResumes.findIndex((elm) => elm.id === action.payload.id)
            if (resumeIndex > -1) {
                updateResumes[resumeIndex] = action.payload
            }
            return {
                ...state,
                loading: false,
                resumes: [...updateResumes]
            }
        case DELETE_SINGLE_RESUME:
            return {
                ...state,
                loading: false,
                resumes: state.resumes.filter(elm => elm.id !== action.payload)
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_SINGLE_RESUME:
            return {
                ...state,
                loading: false,
                resume: action.payload
            }
        default:
            return state;
    }
}