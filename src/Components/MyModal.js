import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Modal , Button, Form} from 'react-bootstrap'


const MyModal = ({show, showHandler}) => {


  return(
    <Modal show={show} stopPropagation>
    <Modal.Header closeButton onClick={showHandler} ></Modal.Header>
    <Modal.Body>
      <input></input>
    </Modal.Body>
      
    <Modal.Footer>
       <Button onClick={showHandler}>
          Close
        </Button>
    </Modal.Footer>
       


    </Modal>
  )
    
  
};

export default MyModal;
