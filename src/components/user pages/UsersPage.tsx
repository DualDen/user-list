import React, {FC, useState} from 'react';
import {useAppSelector} from "../../hooks/redux";
import ZeroUsers from "../ZeroUsers";
import {Button, InputGroup} from "react-bootstrap";
import AddUserModal from "../modals/AddUserModal";
import UserItem from "../UserItem";
import {Link} from "react-router-dom";
import {User} from "../../types/User";
import RemoveUsersModal from "../modals/RemoveUsersModal";
import {CSSTransition, TransitionGroup} from "react-transition-group";


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

            <Button style={{marginTop: 20,marginBottom:20,marginRight: 50}} onClick={() => {setModalShow(true)}}>
            Add User
            </Button>
            {checkedArr.length !== 0 && <Button onClick={() => {setRemoveUserModalShow(true)}}>Remove Users</Button> }

            <div className={'userList'}>
                <TransitionGroup>
            {users.length ? users.map((user:User) =>
                <CSSTransition timeout={500} classNames="item">
                <div key={user.id} style={{display: "flex", justifyContent: "space-between"}}>
                    <Link style={{textDecoration: "none"}} to={`/${user.id}`}><UserItem key={user.id} user={user}/></Link>
                    <InputGroup.Checkbox onChange={() => {
                        checkedArr.indexOf(user.id) === -1 ? setCheckedArr([...checkedArr,user.id]) : setCheckedArr(checkedArr.filter(id => id !== user.id));
                        checkedNames.indexOf(user.firstName + " " + user.lastName) === -1 ? setCheckedNames([...checkedNames,user.firstName + " " + user.lastName]) :
                            setCheckedNames(checkedNames.filter(name => name !== user.firstName + " " + user.lastName));
                    }}>
                    </InputGroup.Checkbox>
                </div>
                </CSSTransition>
                )
            :
                <ZeroUsers/>
            }
                </TransitionGroup>
            </div>
        </div>
    );
};

export default UsersPage;