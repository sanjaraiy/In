import { combineReducers } from "redux";
import { userSlice } from "../Features/userSlice";

export const rootReducer=combineReducers({
    user:userSlice.reducer,
})