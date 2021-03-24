import { ADD_RESUMES, GET_RESUMES, GET_RESUMES_ERROR, DELETE_SINGLE_RESUME, LOAD_STATE, GET_SINGLE_RESUME, SET_LOADING } from './types';
import { getAllResume, addResume, updateResume, getResumeById, deleteSingleResumeById } from '../services/resumeService'
import { resumeInit } from '../components/ResumeHelpers/initializers'

export const getAllResumes = () => dispatch => {
    try {
        const res = getAllResume();
        dispatch({
            type: GET_RESUMES,
            payload: res
        })
    } catch (err) {
        dispatch({
            type: GET_RESUMES_ERROR,
            payload: { error: 'failed to get resumes' }
        })
    }
}

export const loadState = () => dispatch => {
    dispatch({
        type: LOAD_STATE,
        payload: resumeInit
    })
}

export const addNewResume = (resume) => dispatch => {
    const addedResume = addResume(resume)
    dispatch({
        type: ADD_RESUMES,
        payload: addedResume
    })
    return Promise.resolve(addedResume)
}

export const updatecurrentResume = (resume) => dispatch => {
    const updatedResume = updateResume(resume)
    dispatch({
        type: ADD_RESUMES,
        payload: updatedResume
    })
    return Promise.resolve(updatedResume)
}


export const getSingleResume = (id) => dispatch => {
    const resume = getResumeById(id)
    dispatch({
        type: GET_SINGLE_RESUME,
        payload: resume
    })
}

export const loadingResume = () => dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
}

export const deleteSingleResume = (id) => dispatch => {
    deleteSingleResumeById(id)
    dispatch({
        type: DELETE_SINGLE_RESUME,
        payload: id
    })
}