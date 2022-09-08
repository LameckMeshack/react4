import "./App.css";
import Form from "./components/form";
import MyApp from "./components/context/MyApp";
import Todos from "./components/Todos";
import Users from "./components/User";
import Layout from "./components/Layout";
import Deffered from "./components/Deffered";

function App() {
  return (
    <div className="App">
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

export default App;
