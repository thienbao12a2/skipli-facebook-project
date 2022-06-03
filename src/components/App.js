import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./App.css";

class App extends React.Component {
	state = {
		isLoggedIn: false,
		name: "",
		picture: "",
		birthday: "",
		hometown: "as",
		friends: 0,
	};

	responseFacebook = (response) => {
		this.setState({
			isLoggedIn: true,
			name: response.name,
			picture: response.picture.data.url,
			birthday: response.birthday,
			hometown: response.hometown.name,
			friends: response.friends.summary.total_count,
		});
	};

	onLogoutClick = (value) => {
		this.setState({ isLoggedIn: value });
	};

	render() {
		let content = this.state.isLoggedIn ? (
			<Dashboard
				userName={this.state.name}
				userPicture={this.state.picture}
				userBirthday={this.state.birthday}
				userHometown={this.state.hometown}
				userFriends={this.state.friends}
				onLogoutClick={this.onLogoutClick}
			/>
		) : (
			<Login responseFacebook={this.responseFacebook} />
		);
		return <div>{content}</div>;
	}
}

export default App;
