import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInput from "./hooks/useInputState";
import { TodoContext } from "./context/TodoContext";

const EditTodoForm = ({ id, task, toggleEdit }) => {
  const { updateTodo } = useContext(TodoContext);
  const [value, handleChange, reset] = useInput(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateTodo(id, value);
        reset();
        toggleEdit();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        autoFocus
      ></TextField>
    </form>
  );
};

export default EditTodoForm;
