import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./hooks/useTodoState";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || "";
  const { todos, addTodo, removeTodo, toggleTodo, updateTodo } = useTodoState(
    initialTodos
  );
  // const initialTodos = [
  //   { id: 1, task: "Walk Cats", completed: false },
  //   { id: 2, task: "Walk Turtle", completed: true },
  //   { id: 3, task: "Walk Husband", completed: false },
  // ];

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS!</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
