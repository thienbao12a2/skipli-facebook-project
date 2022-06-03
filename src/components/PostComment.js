import React, { useState } from "react";
import SchedulePost from "./SchedulePost";
import SubmitButton from "./SubmitButton";
import PageOrGroup from "./PageOrGroup";

const PostPage = ({ onCommentSubmit }) => {
	const [text, setText] = useState("");
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(new Date());
	const [pageActive, setPageActive] = useState(true);
	const [groupActive, setGroupActive] = useState(false);

	const onButtonClick = () => {
		onCommentSubmit(text, date, pageActive, groupActive);
	};

	const onScheduleChange = (date) => {
		setDate(date);
	};

	const onPageClick = (event) => {
		event.preventDefault();
		setPageActive(true);
		setGroupActive(false);
	};

	const onGroupClick = (event) => {
		event.preventDefault();
		setGroupActive(true);
		setPageActive(false);
	};

	return (
		<div>
			<form className="ui form">
				<div className="field">
					<label style={{ color: "white" }}>Post a Status</label>
					<PageOrGroup
						onPageClick={onPageClick}
						onGroupClick={onGroupClick}
						pageActive={pageActive}
						groupActive={groupActive}
					/>
					<br />
					<br />
					<input
						type="text"
						placeholder="Say Something Cool"
						value={text}
						onChange={(event) => setText(event.target.value)}
					/>
				</div>
			</form>
			<br />

			{!groupActive ? (
				<button
					className="ui primary button"
					type="submit"
					onClick={() => setOpen(!open)}
				>
					Schedule
				</button>
			) : null}
			{open && !groupActive ? (
				<SchedulePost onScheduleChange={onScheduleChange} />
			) : null}

			{!open ? <SubmitButton onButtonClick={onButtonClick} /> : null}
			<br />
			{open ? <SubmitButton onButtonClick={onButtonClick} /> : null}
		</div>
	);
};

export default PostPage;
