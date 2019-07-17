import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required= (val) => val && val.length;
const maxLength= (len) => (val) => (val) && (val.length <= len);
const minLength= (len) => (val) => (val) && (val.length >= len);


class SubmitComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.toggleModal=this.toggleModal.bind(this)
    }

    handleSubmit(value){
        console.log("Form data"+JSON.stringify(value))
        alert("Form data"+JSON.stringify(value))
    }

    toggleModal(){
        this.setState({modal: !this.state.modal});
    }
    render() {
        return ( 
            <div className="py-2">
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
            <Modal toggle={this.toggleModal} isOpen={this.state.modal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(value)=>this.handleSubmit(value)}>
                        <div className="form-group ">
                            <label htmlFor="rating">
                                <strong>Rating</strong>
                            </label>
                            <div className="col col-12">
                                <Control.select model=".rating" name="rating" id="raiting" className="form-control"
                                    >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="name">
                                <strong>Your Name</strong>
                            </label>
                            <div className="col col-12">
                                <Control.text model=".name" name="name" id="name" placeholder="Your Name" 
                                    className="form-control"
                                    validators={{
                                        required,minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: "Required ",
                                        minLength: "Must be greater than 2 characters",
                                        maxLength: "Must be lesser than 16 characters"
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="comment">
                                <strong>Comment</strong>
                            </label>
                            <div className="col col-12">
                                <Control.textarea model=".comment" name="comments" id="comment" rows={6}  className="form-control"
                                    validators={{
                                        required
                                    }}/>
                                <Errors 
                                    className="text-danger"
                                    model=".comment"
                                    show="touched"
                                    messages={{
                                        required: "Required"
                                    }}
                                    />
                            </div>
                        </div>
                        
                        
                        
                        <button className="btn btn-primary" type="submit" onClick={this.toggleModal}>Submit</button>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
         );
    }
}

export default SubmitComment;