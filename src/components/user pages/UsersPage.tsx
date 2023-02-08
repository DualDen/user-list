import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import ZeroUsers from "../ZeroUsers";
import {Button, InputGroup} from "react-bootstrap";
import AddUserModal from "../modals/AddUserModal";
import UserItem from "../UserItem";
import {Link} from "react-router-dom";
import {User} from "../../types/User";
import {userSlice} from "../../store/reducers/UserSlice";
import RemoveUsersModal from "../modals/RemoveUsersModal";


const UsersPage:FC = () => {
    const {users} = useAppSelector(state => state.userSlice);
    const [modalShow,setModalShow] = useState(false);
    const [removeUserModalShow,setRemoveUserModalShow] = useState(false);
    const [checkedArr,setCheckedArr] = useState<number[]>([]);
    const [checkedNames,setCheckedNames] = useState<string[]>([]);


    return (
        <div>
            <AddUserModal modalShow={modalShow} setModalShow={setModalShow}/>
            <RemoveUsersModal show={removeUserModalShow} setShow={setRemoveUserModalShow} names={checkedNames} ids={checkedArr}
            setNames={setCheckedNames} setIds={setCheckedArr}
            />
            <Button onClick={() => {setModalShow(true)}}>
            Add User
            </Button>
            {checkedArr.length !== 0 && <Button onClick={() => {setRemoveUserModalShow(true)}}>Remove Users</Button> }
            <div className={'userList'}>
            {users.length ? users.map((user:User) =>

                <div key={user.id} style={{display: "flex", justifyContent: "space-between"}}>
                    <Link style={{textDecoration: "none"}} to={`/${user.id}`}><UserItem key={user.id} user={user}/></Link>
                    <InputGroup.Checkbox onChange={() => {
                        checkedArr.indexOf(user.id) === -1 ? setCheckedArr([...checkedArr,user.id]) : setCheckedArr(checkedArr.filter(id => id !== user.id));
                        setCheckedNames([...checkedNames,user.firstName + " " + user.lastName]);
                    }}>
                    </InputGroup.Checkbox>
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