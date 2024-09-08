import {createStore, combineReducers} from 'redux'
import { userReducer } from './userReducers.js'
import { projectReducer } from './projectReducers.js'

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
})

export const store = createStore(rootReducer)