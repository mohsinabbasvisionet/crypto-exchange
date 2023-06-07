import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Success from './Components/Success'
import Login from './Components/Login'
import Signup from './Components/Signup'
import About from "./Components/About"
import Header from './Components/Header'
import "./App.css"
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyComponent from "./Components/MyComponent";
import Blogs from "./Components/Blogs";
import Main from "./Components/Main";
import MainRedux from "./Components/MainRedux";


function App() {

  const users_data = [
    {
      name: 'xyz',
      email: 'xyz@example.com',
      password: 'xyz123',
      cnicFile: '12345678',
      address: 'street abc',
    }
  ];

  const [users,setUsers]=React.useState(users_data);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);


   return (
    <div>
      <Router>
        <Header />
        <div>

            <Route exact path="/login" render={() => <Login users={users} />} />
            <Route path="/success" render={() => <Success users={users} setIsLoggedIn={setIsLoggedIn}  />} />
            <Route path="/about" render={() => <About/>} />
            <Route path="/signup" render={() => <Signup users={users} addUser={setUsers} setIsLoggedIn={setIsLoggedIn} />}  />

            {/*Assignment - 2*/}
            <Route path="/myComponent" render={() => <MyComponent color={"yellow"}/>}  />
            <Route path="/blogs" render={() => <Blogs users={users} />}  />

             {/*Assignment - 3*/}
             <Route path="/main" render={() => <Main users={users}/>} />
             <Route path="/main-redux" render={() => <MainRedux users={users}/>} />
        </div>
       </Router>
    </div>
  );
}

export default App;
