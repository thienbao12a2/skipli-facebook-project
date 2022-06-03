import React, { useState } from "react";

const PageOrGroup = ({
	onPageClick,
	onGroupClick,
	pageActive,
	groupActive,
}) => {
	return (
		<div className="ui buttons">
			<button
				onClick={onPageClick}
				className={`ui button ${pageActive ? "active" : ""}`}
			>
				Page
			</button>
			<button
				onClick={onGroupClick}
				className={`ui button ${groupActive ? "active" : ""}`}
			>
				Group
			</button>
		</div>
	);
};

export default PageOrGroup;
