import { Container, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
	{ name: "Japanese", code: "ja" },
	{ name: "Hindi", code: "hi" },
	{ name: "Spanish", code: "es" },
	{ name: "French", code: "fr" },
];

const Home = () => {
	const navigate = useNavigate();
	const handleSelectHandler = (language: string): void => {
		navigate(`/learn?language=${language}`);
	};
	return (
		<Container maxWidth="sm">
			<Typography variant="h3" p="2rem" textAlign="center">
				Welcome,Begin your journey of learning
			</Typography>

			<Stack
				direction="row"
				spacing={2}
				p="2rem"
				alignItems="center"
				justifyContent="center"
			>
				{languages.map(({ name, code }) => (
					<Button
						onClick={() => handleSelectHandler(code)}
						color="primary"
						size="large"
						fullWidth={true}
						variant="contained"
						key={code}
					>
						{name}
					</Button>
				))}
			</Stack>
			<Typography textAlign="center">Choose one language from above</Typography>
		</Container>
	);
};
export default Home;
