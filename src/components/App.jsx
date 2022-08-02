import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";
import { v4 as uuid } from "uuid";

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(note) {
		setNotes((prevNotes) => {
			return [...prevNotes, note];
		});
	}

	function removeNote(note) {
		setNotes(() => {
			return notes.filter((task, index) => {
				return index !== note;
			});
		});
	}

	return (
		<div>
			<Header />
			<CreateArea add={addNote} />
			{notes.map((note, index) => {
				return (
					<Note
						key={uuid()}
						index={index}
						title={note.title}
						content={note.content}
						remove={removeNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
