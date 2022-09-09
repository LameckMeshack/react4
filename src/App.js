import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import TodoPage from "./Pages/TodoPage";
import Deffered from "./components/Deffered";
import Todo from "./components/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="todos" element={<TodoPage />} />
        <Route path="search" element={<Deffered />} />
        <Route path="todos/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
