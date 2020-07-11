import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInput from "./hooks/useInputState";
import { TodoContext } from "./context/TodoContext";

const EditTodoForm = ({ id, task, toggleEdit }) => {
  const { dispatch } = useContext(TodoContext);
  const [value, handleChange, reset] = useInput(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE", newTask: value, id: id });
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
