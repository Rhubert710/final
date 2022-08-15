import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import validateUser from "../Utils/Validation";

const PostUser = ({ postUserData, setPostUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mssg, setMssg] = useState("");
  const [hasAccount, sethasAccount] = useState(false);
  const navigate = useNavigate();

  const accountMap = {};

  return (
    <div id="loginDiv">
      <h4 style={{marginTop:'0px'}}>
        {(hasAccount) ? 'Login' : 'Create New User'}
      </h4>
      <div>First Name</div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <br/><br/>
      <label>Last Name</label>
      <br></br>
      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <br/><br/>
      <label>Email</label>
      <br></br>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <br/><br/>
      <div>Account type</div><br/>
        <input type="radio" name="userRole" value="Management"></input>
        <label style={{marginRight:'12px'}} >Management</label>
        <input type="radio" name="userRole" value="staff"></input>
        <label>staff</label>
        <br/>
      <button
        onClick={async () => {
          const validateUserObj = validateUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
          });
          if (validateUserObj.isValid === false) {
            setMssg(validateUserObj.mssg);
          }
          if (validateUserObj.isValid === true) {
            setPostUser(true);
            const { success, message } = await postUserData({
              firstName: firstName,
              lastName: lastName,
              email: email,
            });
            setMssg(message);
            setPostUser(false);
            if (success === true) {
              navigate("/user-list");
            }
          }
        }}
        style={{
          marginTop:'24px',
          color:'white', 
          backgroundColor:'#1b417d',
          padding:'8px',
        }}
      >
        Submit
      </button>
      <br /><br/>

      <div
        style={{color:'rgb(86,26,139)',cursor:'pointer'}}
        onClick={()=>{
          sethasAccount(!hasAccount)
        }}
          > {(hasAccount)? 'Create account' : 'already have an account? Login'}
      </div>
      <div>{mssg}</div>
    </div>
  );
};

export default PostUser;
