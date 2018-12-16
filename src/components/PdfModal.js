import React from 'react';
import Modal from 'react-modal';


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
    }}>


      <object style={{
          height: '100%',
          width: '100%',
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
