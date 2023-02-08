import React, {Dispatch, FC} from 'react';
import {Button, Modal} from "react-bootstrap";
import {Form, Formik,Field} from "formik";
import {userSlice} from "../../store/reducers/UserSlice";
import {User} from "../../types/User";
import {useAppDispatch} from "../../hooks/redux";
import * as yup from 'yup';

interface AddUserModalProps {
    modalShow: boolean,
    setModalShow: Dispatch<boolean>,
}

const validationSchema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required('Last Name is required'),
    avatar: yup.string().url("This field must be url"),
});

const AddUserModal: FC<AddUserModalProps> = ({modalShow,setModalShow}) => {
    const handleHide = () => setModalShow(false);
    const dispatch = useAppDispatch();
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
                        (values) => {
                            dispatch(addUser(values));
                        }
                    } validate={(values) => {
                        const errors = {}
                    }}
                            validationSchema={validationSchema}>
                        { ({errors,touched,values}) => (
                        <Form>
                            <div className={"formField"}>
                            <label htmlFor={"avatar"}>Avatar</label>
                            <Field id={"avatar"} name={"avatar"} placeholder={"Link to your avatar"}/>
                                {errors.avatar && touched.avatar ? <div className="error">{errors.avatar}</div> : null}
                            </div>

                            <div className={"formField"}>
                            <label htmlFor={"firstName"}>First Name</label>
                            <Field id={"firstName"} name={"firstName"} placeholder={"Your first name"}/>
                                {errors.firstName && touched.firstName ? <div className="error">{errors.firstName}</div> : null}
                            </div>

                            <div className={"formField"}>
                            <label htmlFor={"lastName"}>Last Name</label>
                            <Field id={"lastName"} name={"lastName"} placeholder={"Your last name"}/>
                                {errors.lastName && touched.lastName ? <div className="error">{errors.lastName}</div> : null}
                            </div>

                            <div className={"formField"}>
                            <label htmlFor={"patronymic"}>Patronymic</label>
                            <Field id={"patronymic"} name={"patronymic"} placeholder={"Your patronymic"}/>
                            </div>

                            <div className={"formField"}>
                            <label htmlFor={"email"}>E-mail</label>
                            <Field id={"email"} name={"email"} placeholder={"Your e-mail"}/>
                                {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
                            </div>

                            <div className={"formField"}>
                            <label htmlFor={"about"}>About</label>
                            <Field id={"about"} name={"about"} placeholder={"About you"}/>
                            </div>

                            <div className={"submitButton"}>
                            <Button variant="primary" type={'submit'} onClick={()=> {
                                if (values.email === "" || values.firstName === "" || values.lastName === "") {
                                    return
                                }
                                handleHide();


                            }}>
                                Create User
                            </Button>
                            </div>
                        </Form>
                            )}
                    </Formik>
                </Modal.Body>

            </Modal>
        </div>
    );
};

export default AddUserModal;