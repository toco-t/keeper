import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
	const [notes, setNotes] = useState([]);

	function addTask(note) {
		setNotes((prevNotes) => {
			prevNotes.push(note);
		});
		console.log(note, notes);
	}

	return (
		<div>
			<Header />
			<CreateArea addTask={addTask} />
			<Note key={1} title="Note title" content="Note content" />
			<Footer />
		</div>
	);
}

export default App;
