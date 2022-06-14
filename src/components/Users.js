import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Heading from "./Re-Usable/Heading";

const getLocalStorage = () => {
 let list = localStorage.getItem("USERS");
 if (list) {
  let getItem = localStorage.getItem("USERS");
  return JSON.parse(getItem);
 } else {
  return [];
 }
};

const Users = () => {
 const navigate = useNavigate();
 const [localData, setLocalData] = useState(getLocalStorage());
 const onRemoveHandler = () => {
  localStorage.removeItem("USERS");
  navigate("/");
 };
 return (
  <div className="container-fluid bg-dark text-white">
   <div className="row  min-vh-100  d-md-flex justify-content-md-center align-items-md-center">
    <div className="col-12 col-md-12 text-center">
     <Heading text="Here are the list of all Signup Users...!" />
     {localData.length > 0
      ? localData.map((i, index) => {
         return (
          <div key={index}>
           <h6 className="m-2 p-3">Name: {i.name}</h6>
           <p>{i.email}</p>
          </div>
         );
        })
      : "No Data Has Found Now Please go to signup Page and Try to fill out the Form or Try Refreshing The Browser"}
     <Button variant="outline-light" onClick={onRemoveHandler}>
      Remove Users
     </Button>
    </div>
   </div>
  </div>
 );
};

export default Users;
