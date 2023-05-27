import React, {useEffect, useState} from 'react'
import { Link,useHistory } from 'react-router-dom';

function Login({users}) {

    const [email, setEmail] = useState("abc@xyz.com");
    const [password, setPassword] = useState("password");
    const [error, setError] = useState("");
    const [attempts, setAttempts] = useState(0);
    const maxAttempts = 3;

    const blockUser = () => {
        setError('Too many failed login attempts. User blocked.');
        // Add logic to block the user (e.g., store the blocked status in state or send a request to the server)
    };

    //just using the effect function
    useEffect(() =>{
       setTimeout(() =>{
           setEmail( "");
           setPassword( "");
       }, 2000)
    }, []);

    const redirectBack = useHistory();


    /*const emailExists = (email) => {
        for (let i = 0; i < users.length; i++) {
            //console.log(users[i].email);
            if (users[i].email === email) {
                return true;
            }
        }
        return false;
    };

    const passwordExists = (password) => {
        for (let i = 0; i < users.length; i++) {
            //console.log(users[i].password);
            if (users[i].password === password) {
                return true;
            }
        }
        return false;
    };*/

    const handleSubmit = (e) => {
        e.preventDefault();
        // Now filter email and password from Users list:
        const emailCheck = users.find(user => user.email === email);
        const passwordCheck = users.find(user => user.password === password);

        //const emailCheck = emailExists(email);
        //const passwordCheck = passwordExists(password);

        if (emailCheck && passwordCheck) {
            setError('');
            setAttempts(0);
            redirectBack.push('/success')
        } else {
            setError('Email not found. Please try again.');
            setAttempts(prevAttempts => prevAttempts + 1);
            if (attempts + 1 >= maxAttempts) {
                blockUser();
            }
        }


    };


    return (
        <div>
            <div className="container">
                <h2>Login Page</h2>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input required
                            className="form-control"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group" >
                        <label>Password:</label>
                        <input required
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
}


export default Login;