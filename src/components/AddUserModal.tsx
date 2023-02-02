import React, {Dispatch, FC} from 'react';
import {Button, Modal} from "react-bootstrap";

interface AddUserModalProps {
    modalShow: boolean,
    setModalShow: Dispatch<boolean>,
}

const AddUserModal: FC<AddUserModalProps> = ({modalShow,setModalShow}) => {
    const handleHide = () => setModalShow(false);

    return (
        <div>
            <Modal show={modalShow} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleHide}>
                        Create User
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddUserModal;