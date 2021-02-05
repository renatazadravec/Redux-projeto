import { combineReducers } from 'redux';

import {cor} from "./cor";
import {corOp} from "./corOp";
import {secundaria} from "./secundaria";

export const Reducers = combineReducers({
    cor,
    corOp,
    secundaria
});