import React, { useEffect, useState } from "react";
import PostPage from "./PostComment";
import ProfileCard from "./ProfileCard";
import LogoutButton from "./LogoutButton";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = ({
	userName,
	userPicture,
	userBirthday,
	userHometown,
	userFriends,
	onLogoutClick,
}) => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [duplicate, setDuplicate] = useState(false);
	const [oldText, setOldText] = useState(" ");

	useEffect(() => {
		setTimeout(() => {
			setSuccess(false);
		}, 4000);
	}, [success]);

	useEffect(() => {
		setTimeout(() => {
			setError(false);
		}, 4000);
	}, [error]);

	const onCommentSubmit = async (text, date, pageActive, groupActive) => {
		let id;
		let accessToken;
		if (!pageActive && groupActive) {
			//long lived access token for group
			accessToken =
				"EAAOUZB0qf7BYBALwzJHkwwXPtZAGjgXJf7TqDOuH5H1OpAt88ZC8XrPJ7upRmIvk4XBKwFlWEC4L7f0cIOWexmcdkFROmCtiP6QbMEzADxO7dXHUdvP9BlO8ZAUec0bMgMATcWBNmrpJkc4QJ1m9CBATYy068kFDZAZCxfz7J74UgPCecMNA6lfbguXHhI4ZBkZD";
			id = 755824655783030;
		} else {
			//long lived access token for page
			accessToken =
				"EAARocSAg2LQBAFRdOpiA240QbXDUpgvsjfXOo9gSA6cpN3RxRsN3ZBRqfnr5Oj0eZCIh6RZChy4TmSpXAwrTyeYRiUkV7gwJ0Be9hrFZCqjrlVtZCFeluWxgILVENBS6ZAMleMhj0eeH3nqfDUFxOwcNh5s3kAZB6baS1nHa1eNl80bwYQMROb2CccU3x6R0dMZD";
			id = 105780858815092;
		}

		const scheduledTimeStamp = Math.floor(date.getTime() / 1000);
		const myTimeStamp = Math.floor(new Date().getTime() / 1000);
		const firstLimit = (scheduledTimeStamp - myTimeStamp) / 60;
		const secondLimit = myTimeStamp + 6480000;
		console.log(scheduledTimeStamp, myTimeStamp);
		try {
			const response = await axios.post(
				`https://graph.facebook.com/${id}/feed`,
				{
					message: text,
					//long lived access token
					access_token: accessToken,
					...(firstLimit > 10 && scheduledTimeStamp < secondLimit
						? {
								published: false,
								scheduled_publish_time: scheduledTimeStamp,
						  }
						: {}),
				}
			);
			setSuccess(true);
			setOldText(text);
		} catch (error) {
			if (text === oldText && text) {
				setDuplicate(true);
				setError(true);
			} else {
				setError(true);
			}
		}
	};

	return (
		<div className="centered-dashboard">
			<ProfileCard
				userName={userName}
				userPicture={userPicture}
				userBirthday={userBirthday}
				userHometown={userHometown}
				userFriends={userFriends}
			/>
			<LogoutButton onLogoutClick={onLogoutClick} />
			<PostPage onCommentSubmit={onCommentSubmit} />
			{success
				? "Post Successful!"
				: error && duplicate && oldText
				? "You Cannot Post A Duplicated Status Immediately"
					? error && !oldText
					: null
				: error
				? "Post Failed!"
				: null}
		</div>
	);
};

export default Dashboard;
