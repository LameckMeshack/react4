import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import Layout from "../components/Layout";
import Users from "../components/User";

export default function Home() {
  const navigate = useNavigate();
  const goTodos = () => {
    navigate("/todos");
  };
  return (
    <div>
      <h1>This is the home page</h1>
      <Form />

      <br />
      <button onClick={goTodos}>Todo</button>
      <Users />
      <Layout />
    </div>
  );
}
