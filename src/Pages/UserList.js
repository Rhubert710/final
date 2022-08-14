import React, { useState } from "react";

const UserList = ({userList,}) => {

  return (
    <div>
      <div>
        <h2>User List: </h2>
        <div id="users">
          {userList.map((user) => {
            return (
              <div key={user.id}>
                <br />

                <div>
                  First Name: 
                  {user.firstName}
                </div>
                <br />

                <div>
                  Last Name: 
                  {user.lastName}
                </div>
                <br />

                <div>
                  Email: 
                  {user.email}
                </div>
                <br/>
            
                <div>//////////////////////////////////////////////////</div>
              </div>
            );
          })}
        </div>
      </div>
 
    </div>
  );
};

export default UserList;
