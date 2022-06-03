import React from "react";

const LogoutButton = ({ onLogoutClick }) => {
	return (
		<div className="logout-button">
			<button
				className="ui primary button"
				href="/"
				onClick={() => onLogoutClick(false)}
			>
				Log Out
			</button>
		</div>
	);
};

export default LogoutButton;
