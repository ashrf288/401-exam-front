import React, { Component } from 'react'
import { Button,Modal } from 'react-bootstrap'
import FavForm from './FavForm'
export class FavModal extends Component {
    handleClose=()=>{
        this.props.setShow(false)
    }
    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={(e)=>{this.handleClose(e)}}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body><FavForm id={this.props.id}/></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={(e)=>{this.handleClose(e)}}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
    }
}

export default FavModal
