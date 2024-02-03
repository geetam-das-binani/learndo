/// <reference types="vite/client" />
type LangType = "ja" | "hi" | "es" | "fr";

interface WordType {
	word: string;
	meaning: string;
	options: string[];
}
type StateType = {
	loading: boolean;
	result: Array<string>;
	error?: string;
	words: Array<WordType>;
};
type FetchedDataType = {
	translations: {
		text: string;
	}[];
};
