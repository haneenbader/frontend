import React, { Component } from 'react'
import { Card , Button} from 'react-bootstrap'

export class CokitelCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.drink.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{this.props.drink.strDrink}</Card.Title>
                        
                        <Button onClick={()=>this.props.addToFav(this.props.drink)} variant="primary">Add Favorite</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CokitelCard
