import React from "react";
import TextField from "@material-ui/core/TextField";
import useInput from "./hooks/useInputState";

const EditTodoForm = ({ id, task, updateTodo, toggleEdit }) => {
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
