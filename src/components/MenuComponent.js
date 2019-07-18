import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';

function Menu(props){
    
    const media = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-md-5 m-1">
                <Link to ={`/menu/${dish.id}`}>
                    <Card >
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>

                        <CardImgOverlay >
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Link>
            </div>
        );
    });
    console.log("render")
    if (props.dishes.isLoading){
        return (
            <div className="conatiner">
                <div class="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess){
        return (
            <div className="conatiner">
                <div class="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to ="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {media}
                </div>
            </div>
        );

}
export default Menu;