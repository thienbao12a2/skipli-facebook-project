import React from "react";

const ProfileCard = ({
	userName,
	userBirthday,
	userPicture,
	userHometown,
	userFriends,
}) => {
	return (
		<div className="ui card">
			<div className="image">
				<img src={userPicture} />
			</div>
			<div className="content">
				<a className="header">{userName}</a>
				<div className="meta">
					<span className="date">{userBirthday}</span>
				</div>
				<div className="description">{userHometown}</div>
			</div>
			<div className="extra content">
				<a>
					<i className="user icon"></i>
					{`${userFriends} friends`}
				</a>
			</div>
		</div>
	);
};
export default ProfileCard;
