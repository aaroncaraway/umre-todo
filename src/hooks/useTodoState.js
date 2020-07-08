import React from "react";
import uuid from "uuid";
import useLocalStorage from "./useLocalStorage";

const useTodoState = (initialTodos) => {
  const [todos, setTodos] = useLocalStorage("todos", initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };
  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    updateTodo,
  };
};

export default useTodoState;
