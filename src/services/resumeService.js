import { v4 as uuidv4 } from 'uuid';
export const LOCAL_STORAGE_KEY = 'resumes'
const getAllResume = () => {
    try {
        const resumes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
        return resumes
    } catch (e) {
        console.log(e)
        return []
    }
}

const addResume = (resume) => {
    resume = { ...resume, id: uuidv4() }
    const resumes = getAllResume() ? getAllResume() : []
    resumes.push(resume)
    localStorage.setItem('resumes', JSON.stringify(resumes))
    return resume
}

const updateResume = (resume) => {
    const resumes = getAllResume() ? getAllResume() : []
    const index = resumes.findIndex((elm) => elm.id === resume.id)
    if (index > -1) {
        resumes[index] = resume
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resumes))
    return resume
}

const getResumeById = (id) => {
    const resumes = getAllResume() ? getAllResume() : []
    const index = resumes.findIndex((elm) => elm.id === id)
    if (index > -1) {
        return resumes[index]
    }
    return null
}

const deleteSingleResumeById = (id) => {
    const resumes = getAllResume() ? getAllResume() : []
    const newResumes = resumes.filter((elm) => elm.id !== id)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newResumes))
    return true
}

export {
    getAllResume,
    addResume,
    updateResume,
    getResumeById,
    deleteSingleResumeById,
}