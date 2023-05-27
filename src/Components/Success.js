import React from 'react'
import Signup from "./Signup";

function Success({users, setIsLoggedIn}) {

    const handleLogout = () => {
        setIsLoggedIn(false); // Set login status to false on logout
        console.log(setIsLoggedIn);
    };

   return (
    <div>
        <div className="alert alert-success" role="alert"> User logged in Successfully </div>

        {setIsLoggedIn ? (
            <div>
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