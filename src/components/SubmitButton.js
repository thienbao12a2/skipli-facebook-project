import React from "react";

const SubmitButton = ({ onButtonClick }) => {
	return (
		<button
			className="ui primary button"
			type="submit"
			onClick={onButtonClick}
		>
			Submit Now
		</button>
	);
};
export default SubmitButton;
