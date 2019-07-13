import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function Menu(props){
    
    const media = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-md-5 m-1">
                <Card onClick={()=>props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>

                    <CardImgOverlay >
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
export default Menu;