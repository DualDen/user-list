import React, {Dispatch, FC, useState} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {userSlice} from "../../store/reducers/UserSlice";
import {User} from "../../types/User";
import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import AvatarModal from "./AvatarModal";

interface EditUserModalProps {
    modalShow: boolean,
    setModalShow: Dispatch<boolean>,
    id: number,
    user: User,
}

const EditUserModal:FC<EditUserModalProps> = ({modalShow,setModalShow,id,user}) => {
    const [amIsShowed,setAmIsShowed] = useState(false);
    const [avatar, setAvatar] = useState("");
    const handleHide = () => setModalShow(false);
    const handleShow = () => setAmIsShowed(true)
    const dispatch = useAppDispatch();
    const {updateUser} = userSlice.actions;
    const date = new Date().getTime().toString();
    const initialValues:User = {
        id: id,
        createDate: date,
        avatar: avatar !== "" ? avatar : user?.avatar,
        firstName: user?.firstName,
        lastName: user?.lastName,
        patronymic: user?.patronymic,
        email: user?.email,
        about: user?.about,
    };


    return (
        <div>
            <AvatarModal setAvatar={setAvatar} isShowed={amIsShowed} setIsShowed={setAmIsShowed}/>
            <Modal show={modalShow} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik enableReinitialize={true} initialValues={initialValues}  onSubmit={
                        (values,actions) => {
                            dispatch(updateUser(values));
                        }
                    }>
                        <Form>
                            <div className={"formField"}>
                                <label onClick={handleShow} htmlFor={"avatar"}>Avatar</label>
                                <Field id={"avatar"} name={"avatar"} placeholder={"Link to your avatar"}/>
                            </div>

                            <div className={"formField"}>
                                <label htmlFor={"firstName"}>First Name</label>
                                <Field id={"firstName"} name={"firstName"} placeholder={"Your first name"}/>
                            </div>

                            <div className={"formField"}>
                                <label htmlFor={"lastName"}>Last Name</label>
                                <Field id={"lastName"} name={"lastName"} placeholder={"Your last name"}/>
                            </div>

                            <div className={"formField"}>
                                <label htmlFor={"patronymic"}>Patronymic</label>
                                <Field id={"patronymic"} name={"patronymic"} placeholder={"Your patronymic"}/>
                            </div>

                            <div className={"formField"}>
                                <label htmlFor={"email"}>E-mail</label>
                                <Field id={"email"} name={"email"} placeholder={"Your e-mail"}/>
                            </div>

                            <div className={"formField"}>
                                <label htmlFor={"about"}>About</label>
                                <Field id={"about"} name={"about"} placeholder={"About you"}/>
                            </div>

                            <div className={"submitButton"}>
                                <Button variant="primary" type={'submit'} onClick={handleHide}>
                                    Update User
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                </Modal.Body>

            </Modal>
        </div>

    );

};

export default EditUserModal;