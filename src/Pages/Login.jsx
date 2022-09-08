import { useNavigate } from "react-router";
import MyApp from "../components/context/MyApp";
function Login() {
  let navigate = useNavigate();
  function handleClick() {
    alert("You have successfully logged in");
    navigate("/home");
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
      <MyApp />
    </div>
  );
}

export default Login;
