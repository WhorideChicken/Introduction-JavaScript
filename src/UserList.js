import React from "react";
function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList({users}){

return(
    <div>
        {users.map(user =>(
            <User user={user} key={user.id}/>
        ))}
    </div>
);
}

//useRef Hook은 DOM을 선택하는 용도 외에도, 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리 할 수 있다.

export default UserList;