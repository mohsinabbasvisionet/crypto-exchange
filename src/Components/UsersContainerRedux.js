import UserDetailRedux from "./UserDetailRedux";

export default function UsersContainerRedux({users}) {

    return (
        <>
            {users?.map((user) => (
               <UserDetailRedux user={user} key={user.id} />
            ))}
        </>
    );

}