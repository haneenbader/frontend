import React, { Component } from 'react'
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import UpdateForm from './UpdateForm'


export class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            show: false,
            index: -1,
            strDrink: '',
            strDrinkThumb: '',
            idDrink: '',
        }
        // console.log(this.state.result)
    }

    componentDidMount = async () => {
        const result = axios.get(`${process.env.REACT_APP_SERVER}/getFavData`);
        this.setState({
            result: result.data
        })
        // console.log(this.state.result)
    }



    delete = async (id) => {
        // console.log(this.state.result)
        const newArr = await axios.delete(`${process.env.REACT_APP_SERVER}/deletFav`);
        this.setState({
            result: newArr.data
        })
        // console.log(this.state.result)

    }

    showUpdateForm = (idx) => {
        this.setState({
            show: true,
            index: idx,
            strDrink: this.state.result[idx].strDrink,
            strDrinkThumb: this.state.result[idx].strDrinkThumb,
            idDrink: this.state.result[idx].idDrink,

        })
    }


    handleClose = () => {
        this.setState({
            show: false
        })
    }

    updateData = async (e) => {
        e.preventDefult();
        const obj = {
            strDrink: e.target.strDrink.value,
            strDrinkThumb: e.target.strDrinkThumb.value,
            id: this.state.result[this.state.index]['idDrink']

        }

        const newData = await axios.delete(`${process.env.REACT_APP_SERVER}/updateFav`, obj);
        this.setState({
            result: newData.data,
            show: false
        })
    }




    render() {
        return (
            <div>
                <Row xs={2} md={3} lg={6}>
                    {this.state.result.map((item, idx) =>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title>{item.strDrink}</Card.Title>

                                    <Button onClick={() => this.showUpdateForm(idx)} variant="primary"> Update </Button>
                                    <Button onClick={() => this.delete(item.idDrink)} variant="primary"> Update </Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>

                <UpdateForm
                    show={this.state.show}
                    handleClose={this.handleClose}
                    strDrink={this.state.strDrink}
                    strDrinkThumb={this.state.strDrinkThumb}
                    idDrink={this.state.idDrink}
                    updateData={this.updateData}

                />

            </div>
        )
    }
}

export default Favorite
