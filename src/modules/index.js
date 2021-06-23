import { combineReducers } from 'redux';
import auth from './auth';
import write from './write';
import postList from './postList';

const rootReducer = combineReducers({ auth, write, postList });

export default rootReducer;
