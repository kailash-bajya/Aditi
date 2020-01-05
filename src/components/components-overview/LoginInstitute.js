import React from "react";
import PropTypes from "prop-types";
import service from "../../services/service.js";
import  { Redirect } from 'react-router-dom';
import validator from "../../services/register-validator.js";

import {
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,  
  FormCheckbox,
  Button,
  Card,
  CardHeader
} from "shards-react";
class RegisterInstituteForms extends React.Component {
  constructor(props) {
    super(props);
    this.service = new service();
    this.validate = new validator();
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.response_message = null;
    this.show_message =false;
    this.redirect = false;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onCancel() {
    this.props.onCancel();
  }

  async onSubmit() {
    
    // if(this.validate.validateInputs(this.state)){
      console.log('submit value:::::', this.state)    
      const x = await this.service.loginInstitute(this.state);
      if(x.msg){
        console.log('x message :::::::::', x.msg)
        this.show_message = true;
        this.response_message = x.msg;
        this.setState({
        response_message: x.msg
        });
      }
      if(x.status==200){
        
        if(x.success){
          this.setState({
            redirect: true
          })
        }
      }
    // }
  }

  render (){

    const redirect = this.redirect;
    if(redirect){
      return <Redirect to='/'/>;
    }
    return (
      <Col sm="12" md="12">
        <CardHeader className="border-bottom">
        <p className="m-0">{this.response_message}</p>
      </CardHeader>
        <Form>
          <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="feEmailAddress">Email/phone no</label>
              <FormInput name="username" id="feEmailAddress"
                      type="text"
                      placeholder="Enter email or phone no" onChange={this.handleInputChange}/>
            </Col>
            <Col md="6" className="form-group">
              <label htmlFor="feEmailAddress">Password</label>
              <FormInput name="password" id="feEmailAddress"
                      type="password"
                      placeholder="Enter Password" onChange={this.handleInputChange}/>
            </Col>
          </Row>
          <Button onClick={() => this.onSubmit()}>LogIn</Button>
        </Form>
      </Col>
    )
  }
}

export default RegisterInstituteForms;
