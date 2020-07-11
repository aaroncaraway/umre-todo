import React, { useReducer, createContext } from "react";
import todoReducer from "../reducers/todoReducer";
// import useTodos from "../hooks/useTodoState";

export const TodoContext = createContext();
export const DispatchContext = createContext();

const defaultTodos = [
  { id: 1, task: "Walk Cats", completed: false },
  { id: 2, task: "Walk Turtle", completed: true },
  { id: 3, task: "Walk Husband", completed: false },
];

export const TodoProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  // const todoStuff = useTodos(defaultTodos);
  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
};
