import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  CalculatorSlice  from "./Slices/CalculatorSlice"


const reducer = combineReducers({
  CalculatorSlice,
});

const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
