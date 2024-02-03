import axios from "axios";
import { generate } from "random-words";

export const translateWords = async (params: LangType): Promise<WordType[]> => {
	try {
		let randomWords = generate(8) as string[];
		const words = randomWords.map((i) => ({
			Text: i,
		}));

		const response = await axios.post(
			"https://microsoft-translator-text.p.rapidapi.com/translate",
			words,
			{
				params: {
					"to[0]": params,
					"api-version": "3.0",
					profanityAction: "NoAction",
					textType: "plain",
				},
				headers: {
					"content-type": "application/json",
					"X-RapidAPI-Key":
						"3bff2d8922mshe47a998528b5daep1a5c36jsnd0be5b147954",
					"X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
				},
			}
		);
		const received: FetchedDataType[] = response.data;
		const arr: WordType[] = received.map((i, index) => ({
			word: i.translations[0].text,
			meaning: words[index].Text,
			options: ["sds"],
		}));
		return arr;
	} catch (error) {
		console.log(error);
		throw new Error("Some Error");
	}
};
