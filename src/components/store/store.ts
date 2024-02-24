import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  counterSliceActions,
  counterSliceReducer,
} from "./counter-slice/counter-slice";
import { starWarsApi } from "./api";

const rootReducer = combineReducers({
  counter: counterSliceReducer,
  [starWarsApi.reducerPath]: starWarsApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
