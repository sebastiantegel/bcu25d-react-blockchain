import type { Todo } from "@sebastiantegel/edutypes";
import { createContext, type Dispatch } from "react";
import type { TodoAction } from "../reducers/TodoReducer";

export type TodosContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
};

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  dispatch: () => {},
});
