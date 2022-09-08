import { useNavigate } from "react-router";
function Login() {
  let navigate = useNavigate();
  function handleClick() {
    alert("You have successfully logged in");
    navigate("/home");
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}

export default Login;
