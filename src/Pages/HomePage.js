import React, { useState } from "react";

const HomePage = ({
  clientMessage,
  setClientMessage,
  serverMessage,
  sendRecieveMessage,
  getdogImage,
  dogImage,
  userList,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h2>Home Page</h2>
      <br />

      <h3>Client Message: </h3>
      <div className="messageContainer">{clientMessage}</div>
      <br />

      <h3>Server Message: </h3>
      <div className="messageContainer">{serverMessage}</div>
      <br />

      <div>Enter Message</div>
      <input
      type={'text'}
        value={inputValue}
        onChange={(e) => {
          const dateTime = new Date();
          const newClientMessage = `"${
            e.target.value
          }" at time ${dateTime.toString()}`;
          setClientMessage(newClientMessage);
          setInputValue(e.target.value);
        }}
      ></input>

      <button
        id="sendMessageButton"
        type="submit"
        onClick={() => {
          sendRecieveMessage();
          setInputValue("");
        }}
      >
        Submit
      </button>
      <br />
      <br />
      
    </div>
  );
};

export default HomePage;
