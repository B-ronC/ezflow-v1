import "./profile.css";
import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Profile({ user }) {
	return (
		<div className="profile">
			<AccountCircleIcon
				style={{ fontSize: "5vmin" }}
				className="profileIcon"
			/>
			<h1 className="userName">{user.attributes.name}</h1>
		</div>
	);
}

export default withAuthenticator(Profile);
