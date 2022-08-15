import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";
import PostUser from "./Pages/PostUser";
import NavBar from "./Components/NavBar";
import UserList from "./Pages/UserList";




const urlEndpoint = "https://final-backend-rh.herokuapp.com";
function App() {

  const [userList, setUserlist] = useState([]);
  const [postUser, setPostUser] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(`${urlEndpoint}/get-users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJSON = await response.json();
      setUserlist(responseJSON.serverMessage);
    }
    fetchUsers();
  }, [postUser]);

  const postUserData = async (userData) => {
    const response = await fetch(`${urlEndpoint}/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userData }),
    });
    const responseJSON = await response.json();
    return responseJSON;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Routes>

          <Route path="/" element={<NavBar />}>

            <Route
              index
              element={
                <HomePage
                  userList={userList}
                />
              }
            />
            

            <Route
              path="/post-user"
              element={
                <PostUser
                  postUserData={postUserData}
                  setPostUser={setPostUser}
                />
              }
            />

            <Route
              path="user-list"
              element={
                <UserList
                  userList={userList}
                />
              }
            />

          

         </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
