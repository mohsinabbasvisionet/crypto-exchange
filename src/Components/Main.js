import {useEffect, useState} from "react";
import axios from 'axios';
import Header from "./Header";
import UsersContainer from "./UsersContainer";
import selectedUserContext from "../Context/selectedUserContext";


export default function Main(){
    const [users, setUsers] = useState();
    const [selectedUser, setSelectedUser] = useState(
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }
    );
    const SelectedUserContext = selectedUserContext;


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setUsers(res.data);
        });
    }, []);

    return(
      <SelectedUserContext.Provider value={{selectedUser, setSelectedUser}}>
          <UsersContainer users={users} />
      </SelectedUserContext.Provider>
    );
}

