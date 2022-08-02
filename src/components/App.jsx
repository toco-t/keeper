import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";
import { v4 as uuid } from "uuid";

function App() {
	const [notes, setNotes] = useState([]);

	function addTask(note) {
		setNotes((prevNotes) => {
			return [...prevNotes, note];
		});
	}

	return (
		<div>
			<Header />
			<CreateArea add={addTask} />
			{notes.map((note, index) => {
				return (
					<Note
						key={uuid()}
						index={index}
						title={note.title}
						content={note.content}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
