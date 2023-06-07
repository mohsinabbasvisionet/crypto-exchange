import UserDetail from "./UserDetail";

export default function UsersContainer({users}) {

    return (
        <>
            {users?.map((user) => (
               <UserDetail user={user} key={user.id} />
            ))}
        </>
    );

}