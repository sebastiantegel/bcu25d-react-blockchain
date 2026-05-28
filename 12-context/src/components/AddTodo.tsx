import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const AddTodo = () => {
  const [userText, setUserText] = useState("");
  const { dispatch } = useContext(TodosContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "add",
          payload: userText,
        });
        setUserText("");
      }}
    >
      <input
        type="text"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />
      <button>Spara</button>
    </form>
  );
};
