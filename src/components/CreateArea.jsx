import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
	const [todo, setTodo] = useState({
		title: "",
		content: "",
	});
	const [isFocused, setFocused] = useState(false);

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
			<form className="create-note">
				{isFocused && (
					<input
						onChange={reflectChanges}
						name="title"
						placeholder="Title"
						value={todo.title}
					/>
				)}
				<textarea
					onChange={reflectChanges}
					onMouseOver={() => {
						setFocused(true);
					}}
					name="content"
					placeholder="Take a note..."
					rows={isFocused ? "3" : "1"}
					value={todo.content}
				/>
				<Zoom in={isFocused}>
					<Fab
						onClick={() => {
							props.add(todo);
							setTodo({ title: "", content: "" });
							setFocused(false);
						}}
						type="button"
					>
						<AddIcon style={{ verticalAlign: "middle" }} />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
