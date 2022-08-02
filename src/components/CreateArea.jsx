import React, { useState } from "react";

function CreateArea() {
	const [notes, setNotes] = useState({
		title: "",
		content: "",
	});

	function reflectChanges(event) {
		const { value, name } = event.target;
		setNotes((prevValues) => {
			return {
				...prevValues,
				[name]: value,
			};
		});
	}

	return (
		<div>
			<form>
				<input
					onChange={reflectChanges}
					name="title"
					placeholder="Title"
					value={notes.title}
				/>
				<textarea
					onChange={reflectChanges}
					name="content"
					placeholder="Take a note..."
					rows="3"
				/>
				<button onClick={() => {}}>Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
