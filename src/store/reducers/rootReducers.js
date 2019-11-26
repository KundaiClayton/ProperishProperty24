import authReducer from './authReducers'
import propertyReducer from './propertyReducers'
import {combineReducers} from 'redux'

const rootReducer=combineReducers({
    auth:authReducer,
    property: propertyReducer
})
export default rootReducer