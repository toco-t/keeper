import React from "react";

function Note() {
	const noteTitle = "Title";
	const noteContent = "Content...";

	return (
		<div>
			<h1>{noteTitle}</h1>
			<p>{noteContent}</p>
		</div>
	);
}

export default Note;
