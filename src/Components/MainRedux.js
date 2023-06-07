import {useEffect, useState} from "react";
import axios from 'axios';
import Header from "./Header";
import UsersContainerRedux from "./UsersContainerRedux";
import {Provider} from "react-redux";
import store from "../redux/store";

export default function MainRedux(){
    const [users, setUsers] = useState();
    const [selectedUser, setSelectedUser] = useState();


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setUsers(res.data);
        });
    }, []);

    return(
      <Provider store={store}>
          <UsersContainerRedux users={users} />
      </Provider>
    );
}

