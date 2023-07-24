import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

const CreateArea = ({ onAdd }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    onAdd(note);

    setNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <>
      <form>
        {isExpanded ? (
          <input
            type="text"
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onClick={expand}
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded ? true : null}>
          <Fab onClick={submitNote} className="button">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </>
  );
};

export default CreateArea;
