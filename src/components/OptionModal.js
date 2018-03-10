import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=> (
        <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        >
        <h1 className="modal__title">Selected Option</h1>
        {!!props.selectedOption &&<p className="modal__body">{props.selectedOption.option}</p>}
        <button className="button" onClick={props.clearOptionModal}>Okay</button>
    </Modal>
);


export default OptionModal;