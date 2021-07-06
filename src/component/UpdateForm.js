import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'


export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.handleClose}

                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Drink</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.upateData}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="strDrink" defaultValue={this.props.strDrink} />
                                <Form.Label>Img</Form.Label>
                                <Form.Control type="text" name="strDrinkThumb" defaultValue={this.props.strDrinkThumb} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

export default UpdateForm
