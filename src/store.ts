import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducers/slices";
export const store = configureStore({
	reducer: {
		[rootReducer.name]: rootReducer.reducer,
	},
});
