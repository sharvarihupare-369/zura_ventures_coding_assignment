import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import {reducer as projectReducer} from './createProjects/reducer'
import {reducer as uploadReducer} from './uploads/reducer'


const rootReducer = combineReducers({
   projectReducer,
   uploadReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));