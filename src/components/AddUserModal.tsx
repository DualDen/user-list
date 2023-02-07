import React, {Dispatch, FC} from 'react';
import {Button, Modal} from "react-bootstrap";
import {Form, Formik,Field} from "formik";
import {userSlice} from "../store/reducers/UserSlice";
import {User} from "../types/User";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import * as yup from 'yup';

interface AddUserModalProps {
    modalShow: boolean,
    setModalShow: Dispatch<boolean>,
}

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
});

const AddUserModal: FC<AddUserModalProps> = ({modalShow,setModalShow}) => {
    const handleHide = () => setModalShow(false);
    const dispatch = useAppDispatch();
    const {users} = useAppSelector(state => state.userSlice)
    const {addUser} = userSlice.actions;
    const id = Math.floor(Math.random() * 100);
    const date = new Date().getTime().toString();
    const initialValues:User = {
        id: id,
        createDate: date,
        avatar: "",
        firstName: "",
        lastName: "",
        patronymic: "",
        email: "",
        about: "",
    };


    return (
        <div>
            <Modal show={modalShow} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={initialValues}  onSubmit={
                        (values,actions) => {
                            dispatch(addUser(values));
                        }

                    } validate={values => {
                        const errors:any = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}>
                        <Form>
                            <div className={"formField"}>
                            <label htmlFor={"avatar"}>Avatar</label>
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
                                Create User
                            </Button>
                            </div>
                        </Form>
                    </Formik>
                </Modal.Body>

            </Modal>
        </div>
    );
};

export default AddUserModal;