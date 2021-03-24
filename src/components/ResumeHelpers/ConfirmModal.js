import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ConfirmModal = ({ modal, onDeleteCancel, onConfirmClick }) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={onDeleteCancel}>
                <ModalHeader toggle={onDeleteCancel}>Delete</ModalHeader>
                <ModalBody>
                    Are you sure to delete this resume
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={onConfirmClick}>Yes</Button>{' '}
                    <Button color="primary" onClick={onDeleteCancel}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ConfirmModal;