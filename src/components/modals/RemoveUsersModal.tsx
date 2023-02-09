import React, {Dispatch, FC} from 'react';
import {Button, Modal} from "react-bootstrap";
import {useAppDispatch} from "../../hooks/redux";
import {userSlice} from "../../store/reducers/UserSlice";

interface RemoveUsersModalProps {
    show: boolean,
    setShow: Dispatch<boolean>,
    names: string[],
    ids: number[],
    setNames: Dispatch<string[]>,
    setIds: Dispatch<number[]>,
}

const RemoveUsersModal:FC<RemoveUsersModalProps> = ({show,setShow,names,ids,setNames,setIds}) => {
    const dispatch = useAppDispatch();
    const {removeSomeUsers} = userSlice.actions;
    return (
        <div>
            <Modal show={show} onHide={() => {setShow(false)}}>
                <Modal.Header closeButton>
                    Are you sure that you want to remove this users?
                </Modal.Header>
                <Modal.Body>
                    {names.map((name,index) =>
                        <div key={index} className="mb-10">{name}</div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        dispatch(removeSomeUsers(ids));
                        setShow(false)
                        setNames(names.filter(name => name === ""));
                        setIds(ids.filter(id => id === 0));
                    }}>Remove</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RemoveUsersModal;