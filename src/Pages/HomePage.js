import React from "react";
import { Link} from "react-router-dom";

const HomePage = () => {

  return (
    <div style={{textAlign:'center'}}>

      <h2>Welcome to Task Tree!</h2>

      <p>Task Tree is a staff management tool to help you </p>
      <p>be more organized and productive!</p>

      <button
        style={{
          color:'white', 
          backgroundColor:'#174ea6',
          fontSize:'large',
          padding:'8px',
          marginTop:'24px',
        }}
      >
        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/post-user">Get Started!</Link>
      </button>
    </div>
  );
};

export default HomePage;
