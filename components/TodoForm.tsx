import React from "react";
import "@styles/modal.css";
interface TodoFormProps {
  type: string;
  title: string;
  description: string;
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  setTodoDescription: React.Dispatch<React.SetStateAction<string>>;
  submit: () => void;
  close: () => void;
}

function TodoForm({
  type,
  title,
  description,
  setTodoTitle,
  setTodoDescription,
  submit,
  close,
}: TodoFormProps) {
  return (
    <div className="modal_container">
      <div className="modal">
        <h1> Todo {type} </h1>
        <div className="content">
          <div className="d-flex todo_edit_part">
            <h2>Title</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
          </div>
          <div className="d-flex todo_edit_part">
            <h2>Description</h2>
            <textarea
              value={description}
              onChange={(e) => setTodoDescription(e.target.value)}
            />
          </div>
        </div>
        <button
          className="close green_button"
          onClick={() => {
            submit();
            close();
          }}
        >
          Save
        </button>
        <button className="close red_button" onClick={() => close()}>
          Close
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
