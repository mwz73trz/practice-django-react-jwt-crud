import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ isLoggedIn, user, handleLogout }) => {
  return (
    <div>
      Home Page
      {user && <div>Hi {user.username}</div>}
      {!isLoggedIn ? (
        <div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default HomePage;
