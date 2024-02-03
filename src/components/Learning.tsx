import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Container, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { translateWords } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import {
	getWordsSuccess,
	getWordsRequest,
	getWordsFail,
	clearState,
} from "../Reducers/slices";
import Loader from "./Loader";
const Learning = () => {
	const params = useSearchParams()[0].get("language") as LangType;
	const dispatch = useDispatch();
	const { words, loading, error } = useSelector(
		(state: { root: StateType }) => state.root
	);

	const [count, setCount] = useState<number>(0);
	const navigate = useNavigate();
	const nextHandler = (): void => {
		setCount((prev) => prev + 1);
	};
	useEffect(() => {
		dispatch(getWordsRequest());
		translateWords(params || "ja")
			.then((arr: Array<WordType>) => {
				dispatch(getWordsSuccess(arr));
			})
			.catch((err) => {
				dispatch(getWordsFail(err));
			});
		if (error) {
			alert(error);
			dispatch(clearState());
		}
	}, [params, error]);
	if (loading)
		return (
			<div>
				<Loader />
			</div>
		);

	return (
		<Container
			maxWidth="sm"
			sx={{
				padding: "1rem",
			}}
		>
			<Button
				onClick={
					count === 0 ? () => navigate("/") : () => setCount((prev) => prev - 1)
				}
			>
				<ArrowBackIcon />
			</Button>
			<Typography m="2rem 0">Learning Made Easy</Typography>
			<Stack direction="row" spacing="1rem">
				<Typography variant="h4">
					{count + 1} -{words[count]?.word}
				</Typography>
				<Typography color="blue" variant="h4">
					:{words[count]?.meaning}
				</Typography>
				<Button
					sx={{
						borderRadius: "50%",
					}}
				>
					<VolumeUpIcon />
				</Button>
			</Stack>
			<Button
				sx={{
					margin: "3rem 0",
				}}
				variant="contained"
				fullWidth
				onClick={
					count === words.length - 1
						? () => navigate("/quiz")
						: () => nextHandler()
				}
			>
				{count === words.length - 1 ? "Go to Quiz" : "Next"}
			</Button>
		</Container>
	);
};
export default Learning;
0;
7;

// 0,1*0+1 =>0,1
// 1,1*1+1 =>1,2
// 2,1*2+1 =>2,3
