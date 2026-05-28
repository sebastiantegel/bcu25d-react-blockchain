import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";
import { TodosContext } from "../contexts/TodosContext";
import { useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      <AddTodo />
      <Todos />
    </TodosContext.Provider>
  );
};
