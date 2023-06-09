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
import CoinInfoPage from "./Components/CoinInfoPage";
import store from "./redux/store";
import {Provider, useDispatch} from "react-redux";
import Coins from "./Components/Coins";
import TransferPage from "./Components/TransferPage"


function App() {

  const users_data = [
    {
        name: 'Mohsin',
        email: 'mohsin@example.com',
        password: 'mohsin123',
        cnicFile: '12345678',
        address: 'street abc',
        coins: {
            "ABC":4,
            "ADCN":3,
            "ADL":1,
            "ADX":5,
            "ADZ":23,
            "AE":4,
        },
    },
    {
        name: 'Ali',
        email: 'ali@example.com',
        password: 'ali123',
        cnicFile: '12345678',
        address: 'street abc',
        coins: {
            "ABC":4,
            "ADCN":3,
            "ADL":1
        },
    },
    {
        name: 'Ahmad',
        email: 'ahmad@example.com',
        password: 'ahmad123',
        cnicFile: '12345678',
        address: 'street abc',
        coins: {
            "ABC":4,
            "ACP":3,
            "ACT":1,
            "ACT*":2,
            "ADA":8,
        },
    }
  ];

  const [users,setUsers]=React.useState(users_data);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);


    const [loggedInUser, setLoggedInUser] = React.useState('Initial value');

    const updateValue = (newValue) => {
        setLoggedInUser(newValue);
    };


    return (
    <div>
        <Provider store={store}>
            <Router>
        <Header />
        <div>

            <Route exact path="/login" render={() => <Login users={users}  updateValue={updateValue} />} />
            <Route path="/success" render={() => <Success  loggedInUser={loggedInUser} updateValue={updateValue} />} />
            <Route path="/about" render={() => <About/>} />
            <Route path="/signup" render={() => <Signup users={users} addUser={setUsers} setIsLoggedIn={setIsLoggedIn} />}  />

            {/*Assignment - 2*/}
            <Route path="/myComponent" render={() => <MyComponent color={"yellow"}/>}  />
            <Route path="/blogs" render={() => <Blogs users={users} />}  />

             {/*Assignment - 3*/}
             {/*<Route path="/main" render={() => <Main users={users}/>} />
             <Route path="/main-redux" render={() => <MainRedux users={users}/>} />*/}

            <Route path="/coin-info" render={() => <CoinInfoPage />} />
            <Route path="/coins" render={() => <Coins loggedInUser={loggedInUser}/>} />
            {/*<Route path="/transfer/:coinSymbol" render={() => <TransferPage currentUser={loggedInUser} users={users}/>} />*/}

            <Route
                path="/transfer/:coinSymbol"
                render={(props) => (
                    <TransferPage {...props}/>
                )}
            />
        </div>
       </Router>
        </Provider>
    </div>
  );
}

export default App;
