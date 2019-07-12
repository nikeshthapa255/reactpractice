import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor")
    }
    componentDidMount(){
        console.log("didmount")
    }
    
    
    render() {
        const media = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-md-5 m-1">
                    <Card onClick={()=>this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>

                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log("render")
        return (
            <div className="container">
                <div className="row">
                    {media}
                </div>
            </div>
        );
    }
}


export default Menu;