import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, toggleTodo, updateTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo, id) => (
          <>
            <Todo
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
            {id < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
