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
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        label="Edit Todo"
        fullWidth
      ></TextField>
    </form>
  );
};

export default EditTodoForm;
