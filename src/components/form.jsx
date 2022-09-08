import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  //   useEffect(() => {
  //     console.log(formData);
  //   }, [formData]);
  return (
    <form onSubmit={handleSubmit}>
      <h1> Form </h1>
      <label htmlFor="title">Title</label> <br />
      <input onChange={onChange} type="text" name="title" id="title" />
      <br />
      <label htmlFor="body">Body</label> <br />
      <textarea onChange={onChange} name="body" id="body"></textarea>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
