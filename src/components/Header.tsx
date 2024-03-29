import { AppBar, Typography, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
const styles = {
	color: "white",
	margin: ".5rem",
	textDecoration: "none",
};

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h5" mr="auto" textTransform="uppercase">
					Learndo.
				</Typography>
				<Link style={styles} to="/">
					Home
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
