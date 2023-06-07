import {useContext} from "react";
import selectedUserContext from "../Context/selectedUserContext";

export default function UserDetail ({ user }){
    /*const selectedUser = useContext(selectedUserContext);
    return(
        <>
            <h1>{user.email}</h1>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.website}</p>
            { selectedUser?.id === user.id && (
                <button style={{backgroundColor:'grey'}}>Edit</button>
            )}
            <hr/>
        </>
    );*/

    const SelectedUserContext = selectedUserContext;
    return (
        <SelectedUserContext.Consumer>
            {
                ({selectedUser, setSelectedUser}) => (
                    <>
                        <h1>{user.email}</h1>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.website}</p>
                        { selectedUser?.id === user.id && (
                            <button style={{backgroundColor:'grey'}}>Edit</button>
                        )}
                        <button style={{backgroundColor:"green"}} onClick={() => {
                            setSelectedUser(user)
                        }}> Select</button>
                        <hr/>
                    </>
                )
            }
        </SelectedUserContext.Consumer>
    );

}