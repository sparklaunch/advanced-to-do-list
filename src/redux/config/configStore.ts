import { createStore, combineReducers } from "redux";
import todos from "../modules/todo";

const rootReducer = combineReducers({
    todos
});

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>;