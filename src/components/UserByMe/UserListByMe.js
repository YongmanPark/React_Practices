import React from 'react';
import CourseItem from './UserItems';

const UserListByMe = (props) =>{
    return (
        <div>
            <ul>
                {props.userList.map( userList => <CourseItem key={userList.id} onDelete={props.onDelete}>
                    {userList.name} ({userList.age} Years old)</CourseItem>)}
            </ul>
        </div>
    )
}

export default UserListByMe;