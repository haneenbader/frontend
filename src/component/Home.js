import React, { Component } from 'react'
import axios from 'axios';
import CokitelCard from './CokitelCard'
import { Row, Col } from 'react-bootstrap'

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            addDrink: []
        }
        // console.log(this.state.result)
    }

    componentDidMount = async () => {
        const result = axios.get(`${process.env.REACT_APP_SERVER}/getData`);
        this.setState({
            result: result.data
        })
        // console.log(this.state.result)
    }

    addToFav = async (data) => {
        const addDrink = await axios.post(`${process.env.REACT_APP_SERVER}/addToFav`, data);
        this.setState({
            addDrink: addDrink.data
        })
    }

    render() {
        return (
            <div>
                <Row xs={2} md={3} lg={6}>
                    {this.state.result.map((item, index) => {
                        return (
                            <Col>
                                <CokitelCard
                                    drink={item}
                                    addToFav={this.addToFav}
                                    key={index}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}

export default Home
