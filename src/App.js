import "./App.css";
import Form from "./components/form";
import MyApp from "./components/context/MyApp";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Form />
      <MyApp />
      <br />
      <Todos />
    </div>
  );
}

export default App;
