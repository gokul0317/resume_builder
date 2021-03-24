import { combineReducers } from 'redux'
import resumes from './resume'
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
    form: formReducer,
    resumes
 })