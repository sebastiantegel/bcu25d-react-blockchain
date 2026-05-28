import { Todo } from "@sebastiantegel/edutypes";

export type TodoAction = {
  type: string;
  payload: string;
};

export const TodoReducer = (todos: Todo[], action: TodoAction) => {
  if (action.type === "add") {
    return [...todos, new Todo(action.payload)];
  }

  if (action.type === "remove") {
    return todos.filter((t) => t.id !== +action.payload);
  }

  if (action.type === "toggle") {
    return todos.map((t) => {
      if (t.id === +action.payload) return { ...t, done: !t.done };
      return t;
    });
  }

  return todos;
};
