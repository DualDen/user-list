import React, {Dispatch, FC} from 'react';
import {Modal} from "react-bootstrap";
import {avatarApi} from "../api/AvatarService";
import {User} from "../types/User";

interface AvatarModalProps {
    isShowed: boolean,
    setIsShowed: Dispatch<boolean>,
    setAvatar: Dispatch<any>,
}

const AvatarModal:FC<AvatarModalProps> = ({isShowed,setIsShowed,setAvatar}) => {
    const {data: woof} = avatarApi.useFetchAvatarsQuery("");
    return (
        <>
            <Modal show={isShowed} onHide={() => {setIsShowed(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose your Avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    <img onClick={(e) => {
                        setAvatar(woof?.url);
                        setIsShowed(false);
                    }} style={{width: "100%", height: "auto"}} src={woof?.url}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    Hello
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AvatarModal;