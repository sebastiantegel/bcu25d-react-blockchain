import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const Todos = () => {
  const { todos, dispatch } = useContext(TodosContext);

  return (
    <>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span className={t.done ? "done" : ""}>{t.text}</span>
            <button
              onClick={() =>
                dispatch({
                  type: "remove",
                  payload: t.id.toString(),
                })
              }
            >
              Ta bort
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "toggle",
                  payload: t.id.toString(),
                })
              }
            >
              Ändra
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
