import React from 'react';
import Loading from './LoadingComponent';
import SubmitComment from './SubmitCommentComponent';
import {
    Card, CardBody, CardImg, CardText, CardTitle,
    ListGroup, ListGroupItem, Row, ListGroupItemText, ListGroupItemHeading,
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseURL';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const DiscDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="conatiner">
                <div class="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="conatiner">
                <div class="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem ><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <Row>
                    <div className="col-md-5 m-1">
                        <FadeTransform in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(-50%)'
                            }}>
                            <Card>
                                <CardImg width="100%" src={baseUrl + props.dish.image} alt={props.dish.name}></CardImg>
                                <CardBody>
                                    <CardTitle>{props.dish.name}</CardTitle>
                                    <CardText>{props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </FadeTransform>
                    </div>
                    <div className="col-md-5 m-1">
                        <ListGroup>
                            <ListGroupItemHeading>Comments</ListGroupItemHeading>
                            <Stagger in>
                                {props.comments.map((comment) => {
                                    return (
                                        <Fade in>
                                            <ListGroupItem key={comment.id}>
                                                <ListGroupItemText>{comment.comment}</ListGroupItemText>
                                                <ListGroupItemText>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(comment.date)))}</ListGroupItemText>
                                            </ListGroupItem>
                                        </Fade>
                                    );
                                })}
                            </Stagger>
                        </ListGroup>
                        <SubmitComment postComment={props.postComment} dishId={props.dish.id} />
                    </div>
                </Row>

            </div>
        );
    else
        return (<Loading></Loading>)
}

export default DiscDetail;