import React, {FC, useState} from 'react';
import {useAppSelector} from "../hooks/redux";
import ZeroUsers from "./ZeroUsers";
import {Button} from "react-bootstrap";
import AddUserModal from "./AddUserModal";

const UsersPage:FC = () => {
    const {users} = useAppSelector(state => state.userSlice);
    const [modalShow,setModalShow] = useState(false);
    return (
        <div>
            <AddUserModal modalShow={modalShow} setModalShow={setModalShow}/>
            <Button onClick={() => {setModalShow(true)}}>
            Add User
            </Button>
            <div className={'userList'}>
            {users.length ? users.map(user =>
                <div>{user}</div>)
            :
                <ZeroUsers/>
            }
            </div>
        </div>
    );
};

export default UsersPage;