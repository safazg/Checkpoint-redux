import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import "./Edit.css";
import Modal from 'react-modal';
import { useDispatch } from 'react-redux'

Modal.setAppElement('#root')

const Edit = (props) => {
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = useState(false);
  const [id, setid] = useState("");
  const [description, setdes] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
      <div>
      <button className="but" onClick={openModal}>
        Edit
      </button>
      <div className="Add-btn-container">
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <form>
          <label>N°</label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => setid(e.target.value)}
          />
          <label>description</label>
          <input
            type="text"
            name="rating"
            required
            onChange={(e) => setdes(e.target.value)}
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() =>{
              dispatch({type:"edit",editindex:props.index,newid:id,newdes:description});
              closeModal()
          }
          }
        >
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
    </div>
  );
};

export default Edit;