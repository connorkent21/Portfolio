import React from 'react';
import Modal from 'react-modal';






const PdfModal = ({
  showModal,
  exitModal,
}) => (
  <Modal
    isOpen={showModal}
    onRequestClose={exitModal}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    onclick={exitModal}
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
      marginTop: '50px',
      height: '75%',
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
