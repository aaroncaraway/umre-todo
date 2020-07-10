import React, { useContext } from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Todo from "./Todo";
import { TodoContext } from "./context/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, id) => (
            <>
              <Todo {...todo} key={todo.id} />
              {id < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
