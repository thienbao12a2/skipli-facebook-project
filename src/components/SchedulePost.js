import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./Clock.css";
import "./DateTimePicker.css";
import "./Calendar.css";

const SchedulePost = ({ onScheduleChange }) => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		onScheduleChange(date);
	}, [date]);

	return (
		<div className="app">
			<h3 className="text-center">Select a Time</h3>
			<div className="calendar-container">
				<DateTimePicker onChange={setDate} value={date} />
			</div>
			<p className="text-center">
				<span className="bold">Selected Date:</span>{" "}
				{date ? date.toDateString() : null}
			</p>
		</div>
	);
};

export default SchedulePost;
