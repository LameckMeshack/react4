import { useParams } from "react-router-dom";

export default function Todo() {
  let params = useParams();
  return (
    <div>
      {" "}
      <h1>Todo</h1>
      <h3>This is to do index: {params.id}</h3>
    </div>
  );
}
