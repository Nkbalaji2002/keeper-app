import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ title, content, onDelete, id }) => {
  function handleDeleteClick() {
    onDelete(id);
  }
  return (
    <>
      <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={handleDeleteClick}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};

export default Note;
