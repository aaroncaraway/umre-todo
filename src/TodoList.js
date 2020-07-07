import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Todo from "./Todo";

const TodoList = (props) => {
  const todos = props.todos;
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
