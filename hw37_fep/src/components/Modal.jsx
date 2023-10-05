import React from 'react'
import '../components/Modal.css'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ENTRY } from '../store/slice';
import { DeleteEntryFromList } from '../store';

function Modal({ setOpenModal, entry }) {
    const list = useSelector(state => state.list.value)
    const dispatch = useDispatch();


//Dispatcher to update the list in state with target entry DELETED
    const DeleteEntryFromState = (entry) => {
                              dispatch(DELETE_ENTRY(DeleteEntryFromList(list, entry)))
  }


//Confirm delete click handler
    const confirmDelete = (entry) => {
        DeleteEntryFromState(entry);
        setOpenModal(false);

    }

    return (
        <div className='modalBackground'>
            <div className='modalCntr'>
                <div className='titleCloseBtn'>
                    <button className='modalClose' onClick={() => setOpenModal(false)}>x</button>
                </div>
                <div className='title'>
                    <h3>confirm delete?</h3>
                </div>
                <div className='body'>
                    <p>entry <strong>{entry.name}</strong> will be deleted permanetly</p>
                </div>
                <div className='footer'>
                    <button className='modalConfirm' onClick={() => confirmDelete(entry)}>yes</button>
                    <button className='modalCancel' onClick={() => setOpenModal(false)} id='cancelBtn'>no</button>
                </div>
            </div>
        </div>
   );
};

export default Modal