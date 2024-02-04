import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState: StateType = {
	loading: false,
	result: [],
	error: "",
	words: [],
};
export const rootReducer = createSlice({
	name: "root",
	initialState,
	reducers: {
		getWordsRequest: (state) => {
			state.loading = true;
		},
		getWordsSuccess: (state, action: PayloadAction<WordType[]>) => {
			state.loading = false;
			state.words = action.payload;
		},
		getWordsFail: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
		saveResult: (state, action: PayloadAction<string[]>) => {
			state.result = action.payload;
		},
		clearState: (state) => {
			state.result = [];
			(state.words = []), (state.error = "");
			state.loading = false;
		},
	},
});
export const {
	getWordsFail,
	getWordsRequest,
	getWordsSuccess,
	saveResult,
	clearState,
} = rootReducer.actions;
