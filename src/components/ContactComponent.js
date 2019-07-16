import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Form, Col, FormGroup, Label, Input, Button, FormFeedback
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched:{
                firstname: false,
                lastname: false,
                email: false,
                telnum: false
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    
    handleInputChange(event){
        const target= event.target;
        const value= target.type === "checkbox" ? target.checked : target.value;
        const name= target.name;
        this.setState({
            [name]: value
            });
    }

    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{ ...this.state.touched,[field]:true}
        });
    }

    validateForm({firstname,lastname,telnum,email}){
        const error={
            firstname: "",
            lastname: "",
            telnum: "",
            email: ""
        }
        if (this.state.touched.firstname && firstname.length<3)
            error.firstname="First Name should be >=3 lenghth";
        if (this.state.touched.firstname && firstname.length>10)
            error.firstname="First Name should be <=10 lenghth";
        if (this.state.touched.lastname && lastname.length<3)
            error.lastname="last Name should be >=3 lenghth";
        if (this.state.touched.lastname && lastname.length>10)
            error.lastname="Last Name should be <=10 lenghth";
        
        const reg=/^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            error.telnum="Tel. Number sould contain only numbers";
        
        const regemail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        if (this.state.touched.email && !regemail.test(email))
            error.email="Email invalid.";
        
        return error
    }
    handleSubmit(event){
        console.log("FORM INFO:-" + JSON.stringify(this.state)+String(this.state.agree));
        alert("FORM INFO:-" + JSON.stringify(this.state)+String(this.state.agree));
        event.preventDefault();
    }

    render() {
        const error=this.validateForm(this.state)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            16 Biga, Naya Gaon<br />
                            Hathibadkala, Dehradun<br />
                            Uttarakhand,India<br />
                            <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                                confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Send us your feedback</h2>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form  onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" id="firstname"
                                        placeholder="First Name" 
                                        onBlur={this.handleBlur('firstname')}
                                        valid={error.firstname === ''}
                                        invalid={error.firstname !== ''}
                                        value={this.state.firstname} onChange={this.handleInputChange}/>
                                    <FormFeedback>{error.firstname}</FormFeedback>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" id="lastname"
                                        placeholder="Last Name" 
                                        onBlur={this.handleBlur('lastname')}
                                        valid={error.lastname === ''}
                                        invalid={error.lastname !== ''}
                                        value={this.state.lastname} onChange={this.handleInputChange}/>
                                    <FormFeedback>{error.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" name="telnum" id="telnum"
                                        placeholder="Tel. Number" 
                                        onBlur={this.handleBlur('telnum')}
                                        valid={error.telnum === ''}
                                        invalid={error.telnum !== ''}
                                        value={this.state.telnum} onChange={this.handleInputChange} />
                                    <FormFeedback>{error.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" name="email" id="email"
                                        placeholder="Email" 
                                        onBlur={this.handleBlur('email')}
                                        valid={error.email === ''}
                                        invalid={error.email !== ''}
                                        value={this.state.email} onChange={this.handleInputChange}/>
                                    <FormFeedback>{error.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}} >
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                                value={this.state.agree}  
                                                onChange={this.handleInputChange}></Input>
                                            {' '}<strong>May we contact you</strong>
                                        </Label>

                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange} >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" id="message"
                                        row="12" 
                                        value={this.state.message} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary" >Send Feeback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    </div>
                </div>
                );
            }
        }
        
        export default Contact;
