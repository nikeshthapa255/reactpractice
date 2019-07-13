import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, ListGroup, ListGroupItem, Row, ListGroupItemText, ListGroupItemHeading} from 'reactstrap';


const DiscDetail = (props) => {
    return (
        <div className="container">
            <Row>
                <div className="col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={props.dish.image} alt={props.dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-5 m-1">
                    <ListGroup>
                        <ListGroupItemHeading>Comments</ListGroupItemHeading>
                        {props.dish.comments.map((comment)=>{
                            return(
                                <ListGroupItem key={comment.id}>
                                    <ListGroupItemText>{comment.comment}</ListGroupItemText>
                                    <ListGroupItemText>{comment.author}, {new Intl.DateTimeFormat('en-US',{year:"numeric",month: "short", day:"2-digit"}).format(new Date(Date.parse(comment.date)))}</ListGroupItemText>
                                </ListGroupItem>
                            );
                        }) }
                    </ListGroup>
                </div>
            </Row>
            
        </div>
     );
}
 
export default DiscDetail;