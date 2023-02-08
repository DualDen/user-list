import React, {FC} from 'react';
import {User} from "../types/User";

interface UserProps{
    user: User
}

const UserItem:FC<UserProps> = ({user}) => {


    return (
        <div className={"userItem"}>
            <div className={"userItemImage"}><img className={"userItemAvatar"} src={user.avatar ? user.avatar : "https://www.wolflair.com/wp-content/uploads/2017/02/placeholder.jpg?w=640"} alt=""/></div>
            <div className={"userItemInfo"}>
                <div className={"userItemName"}>
                    <div className={"userItemLastName"}>{user.lastName}</div>
                    <div className={"userItemFirstName"}>{user.firstName}</div>
                    <div className={"userItemPatronymic"}>{user.patronymic}</div>
                </div>
                <div className={"userItemEmail"}>{user.email}</div>
            </div>
        </div>
    );
};

export default UserItem;