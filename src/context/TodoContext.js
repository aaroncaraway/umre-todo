import React, { createContext } from "react";
import useTodos from "../hooks/useTodoState";

export const TodoContext = createContext();

const defaultTodos = [
  { id: 1, task: "Walk Cats", completed: false },
  { id: 2, task: "Walk Turtle", completed: true },
  { id: 3, task: "Walk Husband", completed: false },
];

export const TodoProvider = (props) => {
  const todoStuff = useTodos(defaultTodos);
  return (
    <TodoContext.Provider value={todoStuff}>
      {props.children}
    </TodoContext.Provider>
  );
};
