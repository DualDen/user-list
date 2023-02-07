import React, {FC, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {User} from "../types/User";
import {Button} from "react-bootstrap";
import EditUserModal from "./EditUserModal";
import {userSlice} from "../store/reducers/UserSlice";

const CurrentUserPage:FC = () => {
    const {removeUser} = userSlice.actions;
    const dispatch = useAppDispatch();
    const [modalShow,setModalShow] = useState(false);
    const {users} = useAppSelector(state => state.userSlice);
    const params = useParams();
    const id: any = params.id;
    const user:any = users.find((user:User) => user.id === parseInt(id));
    if(user === undefined) {
        return <h1>User not found</h1>
    }


    return (
        <div>
            <Button onClick={() => {setModalShow(true)}}>Edit User</Button>
            <Button onClick={() => {dispatch(removeUser(user.id))}}>Delete User</Button>
            <EditUserModal user={user} id={user.id} modalShow={modalShow} setModalShow={setModalShow}/>
            <div className={"userContainer"}>
                <div className="userMainInfo">
                <div className="currentUserImage"><img src={user.avatar === "" ? "https://www.wolflair.com/wp-content/uploads/2017/02/placeholder.jpg?w=640" : user.avatar} alt=""/></div>
                <div className="currentUserInfo">
                    <div className="currentUserName">
                    <div className={"userItemFirstName"}>{user.firstName}</div>
                    <div className={"userItemLastName"}>{user.lastName}</div>
                    <div className={"userItemLastName"}>{user.patronymic}</div>

                </div>
                    <div className="userItemEmail">{user.email}</div>
                </div>
                 </div>
                <div className="currentUserAboutMe">
                    {user.about}
                </div>
            </div>
        </div>
    );
};

export default CurrentUserPage;