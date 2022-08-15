import React, { useState } from "react";
import Tasks from "../Components/Tasks";

const UserList = ({userList}) => {

  return (
    <div style={{display:'flex'}}>
      
        <div id="users" style={{flex:1}}>
          
          
          {userList.map((user) => {
            
            return (
              <div key={user.id}>
                <div>Logged in as:</div>
                <div>{user.firstName} {user.lastName} </div>
                <div>{user.email}</div>
                <br />
              </div>
            );

          })}
          </div>
          <div style={{flex:1}}>
            <Tasks/>
          </div>
      </div>
  );
};

export default UserList;
