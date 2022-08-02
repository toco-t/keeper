import React, { useState } from "react";

function CreateArea(props) {
	const [todo, setTodo] = useState({
		title: "",
		content: "",
	});

	function reflectChanges(event) {
		const { value, name } = event.target;
		setTodo((prevValues) => {
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
					value={todo.title}
				/>
				<textarea
					onChange={reflectChanges}
					name="content"
					placeholder="Take a note..."
					rows="3"
				/>
				<button
					onClick={() => {
						props.add(todo);
						setTodo({ title: "", content: "" });
						document.querySelector("textarea").value = "";
					}}
					type="button"
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default CreateArea;
