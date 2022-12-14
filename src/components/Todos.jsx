import { useReducer } from "react";
import { Link } from "react-router-dom";

function createInitialState(username) {
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: username + "'s task #" + (i + 1),
    });
  }
  return {
    draft: "",
    todos: initialTodos,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "changed_draft": {
      return {
        draft: action.nextDraft,
        todos: state.todos,
      };
    }
    case "added_todo": {
      return {
        draft: "",
        todos: [
          {
            id: state.todos.length,
            text: state.draft,
          },
          ...state.todos,
        ],
      };
    }
    case "deleted_todo": {
      return {
        draft: state.draft,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    }
    default: {
      return state;
    }
  }
  //   throw Error("Unknown action: " + action.type);
}

export default function Todos({ username = "Rhino" }) {
  const [state, dispatch] = useReducer(reducer, username, createInitialState);
  return (
    <>
      <input
        value={state.draft}
        onChange={(e) => {
          dispatch({
            type: "changed_draft",
            nextDraft: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "added_todo" });
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map((item) => (
          <li key={item.id}>
            {item.text}
            {/* Link to the page */}
            <Link to={`/todos/${item.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
