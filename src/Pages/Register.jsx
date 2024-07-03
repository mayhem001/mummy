import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("male");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log =  {title, body, author};
    // console.log(formInput);
  }
  return (
    <div className="formInput">
      <h2>Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Enquiry body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Form author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="male">sign in</option>
          <option value="female">login</option>
        </select>
        <button>Submit</button>
        {/* <p>{title}</p> */}
        {/* <p>{body}</p> */}
        {/* <p>{author}</p> */}
      </form>
    </div>
  );
};

export default Register;
