import React from "react";
import FacebookLogin from "react-facebook-login";
import "./Login.css";

const Login = ({ responseFacebook }) => {
	return (
		<div>
			<div className="centered-login">
				<FacebookLogin
					appId="711610503217009"
					autoLoad={false}
					fields="name,picture,birthday,hometown,friends"
					callback={responseFacebook}
				/>
			</div>
		</div>
	);
};

export default Login;
