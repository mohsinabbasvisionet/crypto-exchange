import React from 'react'
import Signup from "./Signup";
import {useSelector} from "react-redux";

function Success({updateValue, loggedInUser}) {

    const handleLogout = () => {
        updateValue(false); // Set login status to false on logout
    };

   return (
    <div>
        {loggedInUser ? (
            <div>
                <div className="alert alert-success" role="alert"> User {loggedInUser.email} logged in Successfully </div>
                <h2>Welcome User!</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <Signup/>
        )}
    </div>
  )
}

export default Success;