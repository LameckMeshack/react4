import React from "react";
import { useNavigate } from "react-router-dom";
import Todos from "../components/Todos";

function TodoPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Todos />
      <button onClick={() => navigate(-1)}>Home</button>
      {/* this will take me to the previous page (home) */}
    </div>
  );
}

export default TodoPage;
