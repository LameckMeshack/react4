import React from "react";
import MyApp from "../components/context/MyApp";
import Deffered from "../components/Deffered";
import Form from "../components/form";
import Layout from "../components/Layout";
import Todos from "../components/Todos";
import Users from "../components/User";

export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Form />
      <MyApp />
      <br />
      <Todos />
      <Users />
      <Layout />
      <Deffered />
    </div>
  );
}
