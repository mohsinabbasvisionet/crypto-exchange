import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../redux/actions/selectUser";

export default function UserDetailRedux ({ user }){
    const {selectedUser} = useSelector(state => state.selectUserReducer)
    const dispatch = useDispatch();

    return (

        <>
            <h1>{user.email}</h1>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.website}</p>
            { selectedUser.id === user.id && (
                <button style={{backgroundColor:'grey'}}>Edit</button>
            )}

            <button style={{backgroundColor:"green"}}
            onClick={() => {
                dispatch(selectUser(user));
            }}
            > Select</button>
            <hr/>
        </>
    );

}