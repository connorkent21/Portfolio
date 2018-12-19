import React from 'react';
import Modal from 'react-modal';
import ClipLoader from 'react-spinners/ClipLoader';
import { Block, Flex, Copy, Shadow } from './Base';






const PdfModal = ({
  showModal,
  exitModal,
}) => (
  <Modal
    isOpen={showModal}
    onRequestClose={exitModal}
    shouldCloseOnEsc={false}
    shouldCloseOnOverlayClick={false}
    ariaHideApp
    closeTimeoutMS={200}
    className="modal infoModal"
    overlayClassName="modal-overlay"
    style={{
      paddingRight: '0px !important',
      paddingLeft: '0px !important',
      width: '80%',
    }}
  >
  <div style={{
      height: '90%',
      width: '80vw',
      backgroundColor: 'black',
      border: '1px solid #f6f1ed',
      display: 'table',
    }}>
    <object style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        position: 'relative',
        zIndex: '2',
        marginLeft: 0,
        marginTop: 0,
      }}
      type="application/pdf"
      data={require('./resume.pdf')}
    >
      <p>Your browser does not support embedded PDF files. <br /> <br /> Feel free to contact me and I'll send you my resume as soon as possible.</p>
    </object>
  </div>
  <div className='modalButton' onClick={exitModal}>
    Close
  </div>



  </Modal>
);

export default PdfModal;
