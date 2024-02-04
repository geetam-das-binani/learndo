import {
	Button,
	Container,
	List,
	ListItem,
	Stack,
	Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearState } from "../Reducers/slices";
const Result = () => {
	const { result, words } = useSelector(
		(state: { root: StateType }) => state.root
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const correctAns: number = words
		.map((i, idx) =>
			i.meaning.toLocaleLowerCase() === result[idx].toLocaleLowerCase() ? 1 : 0
		)
		.filter(Boolean).length;

	const percentage = (correctAns / words.length) * 100;
	const resetHandler = (): void => {
		dispatch(clearState());
		navigate("/");
	};
	return (
		<Container maxWidth={"sm"}>
			<Typography variant="h3" color={"primary"} m={"2rem 0"}>
				Result
			</Typography>
			<Typography m={"1rem"} variant="h6">
				You got {correctAns} right of {words?.length} questions
			</Typography>

			<Stack direction={"row"} justifyContent={"space-evenly"}>
				<Stack>
					<Typography m={"1rem 0"} variant="h5">
						Your Ans
					</Typography>
					<List>
						{result.map((i, idx) => (
							<ListItem key={idx}>
								{idx + 1} - {i}
							</ListItem>
						))}
					</List>
				</Stack>
				<Stack>
					<Typography m={"1rem 0"} variant="h5">
						Correct Ans
					</Typography>
					<List>
						{words?.map((i, idx) => (
							<ListItem key={idx}>
								{idx + 1}
								{")"}Actual Word-({i.meaning}) {i.word}
							</ListItem>
						))}
					</List>
				</Stack>
			</Stack>

			<Typography
				m={"1rem"}
				variant="h5"
				color={percentage > 50 ? "green" : "red"}
			>
				{percentage > 50 ? "Pass" : "Fail"}
			</Typography>

			<Button
				onClick={resetHandler}
				sx={{ margin: "1rem" }}
				variant="contained"
			>
				Reset
			</Button>
		</Container>
	);
};

export default Result;
