import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import ZeroUsers from "./ZeroUsers";
import {Button} from "react-bootstrap";
import AddUserModal from "./AddUserModal";
import UserItem from "./UserItem";
import {Link} from "react-router-dom";
import {User} from "../types/User";
import {userSlice} from "../store/reducers/UserSlice";


const UsersPage:FC = () => {
    const {users} = useAppSelector(state => state.userSlice);
    const [modalShow,setModalShow] = useState(false);
    const dispatch = useAppDispatch();
    const {removeUser} = userSlice.actions;
    const checkBoxRef = React.createRef();

    return (
        <div>
            <AddUserModal modalShow={modalShow} setModalShow={setModalShow}/>
            <Button onClick={() => {setModalShow(true)}}>
            Add User
            </Button>
            <div className={'userList'}>
            {users.length ? users.map((user:User) =>

                <div key={user.id} style={{display: "flex", justifyContent: "space-between"}}>
                    <Link style={{textDecoration: "none"}} to={`/${user.id}`}><UserItem key={user.id} user={user}/></Link>
                </div>
                )
            :
                <ZeroUsers/>
            }
            </div>
        </div>
    );
};

export default UsersPage;