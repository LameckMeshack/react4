import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import TodoPage from "./Pages/TodoPage";
import Deffered from "./components/Deffered";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/search" element={<Deffered />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
