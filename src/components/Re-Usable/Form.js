import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const getLocalStorage = () => {
 let list = localStorage.getItem("USERS");
 if (list) {
  let getItem = localStorage.getItem("USERS");
  return JSON.parse(getItem);
 } else {
  return [];
 }
};

const Form = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [data, setData] = useState(getLocalStorage());
 const [counter, setCounter] = useState(0);

 const navigate = useNavigate();

 const onNameChangeHandler = (e) => {
  setName(e.target.value);
 };

 const onEmailChangeHandler = (e) => {
  setEmail(e.target.value);
 };
 const onSubmitHandler = (e) => {
  e.preventDefault();

  const inputData = {
   name: name,
   email: email,
  };

  localStorage.setItem("USERS", JSON.stringify(data));

  setData([...data, inputData]);
  setCounter(counter + 1);

  if (data.length >= 2) {
   navigate("/success");
  }
  console.log(data, "data");

  setName("");
  setEmail("");

  alert(
   `Fill the form ${counter} of 2 times so that you will redirect to users page...!`
  );
 };

 return (
  <form className="row g-3 needs-validation p-md-2" onSubmit={onSubmitHandler}>
   <div className="col-md-12">
    <input
     type="text"
     className="form-control bg-dark text-white p-3"
     id="validationCustom01"
     placeholder="Enter Your Name"
     value={name}
     onChange={onNameChangeHandler}
     required
    />
    <div className="valid-feedback">Enter Your Email</div>
   </div>
   <div className="col-md-12">
    <input
     type="email"
     placeholder="Enter Your Email"
     className="form-control bg-dark text-white p-3"
     id="validationCustom02"
     value={email}
     onChange={onEmailChangeHandler}
     required
    />
    <div className="valid-feedback">Looks good!</div>
   </div>

   <div className="col-12">
    <Button variant="outline-light p-3 " type="submit">
     Submit
    </Button>
   </div>
  </form>
 );
};

export default Form;
