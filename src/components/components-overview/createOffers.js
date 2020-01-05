import React from "react";
import PropTypes from "prop-types";
import service from "../../services/service.js";
import  { Redirect } from 'react-router-dom';
import validator from "../../services/register-validator.js";
import Configuration from '../../services/config';

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
class CreateOffersForm extends React.Component {
  constructor(props) {
    super(props);
    this.service = new service();
    this.validate = new validator();
    this.config  = new Configuration();
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.response_message = null;
    this.show_message =false;
    this.redirect = false;
    this.series_list = this.getSeriesList(this);
  }

  async getSeriesList(event){

    const series_list = await this.service.get(this.state, this.config['get_series']);
    console.log('series list:::::::::::::::', series_list);
    alert(series_list.msg);
    if(series_list.status != 200){

      this.show_message = true;
      this.setState({
        response_message: series_list.msg
      });
    }

    this.setState({
      'series_list' : series_list
    })
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
    //   console.log('submit value:::::', this.state)    
      const x = await this.service.create(this.state, this.config['create_offer']);
      if(x.status==200){
        this.show_message = true;
        this.response_message = x.msg;
        this.setState({
          response_message: x.msg
        });
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
            <h6>Create Offer</h6>
          </Row>
          <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="forName">Name</label>
              <FormInput name="name" id="forName"
                      type="text"
                      placeholder="Offer Name" onChange={this.handleInputChange}/>
            </Col>
            <Col md="6" className="form-group">
              <label htmlFor="forDescription">Description</label>
              <FormInput name="description" id="forDescription"
                      type="text"
                      placeholder="Description" onChange={this.handleInputChange}/>
            </Col>
          </Row>
          <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="forstartingDaate">Offer Start Date</label>
              <FormInput name="starting_date" id="forstartingDaate"
                      type="date"
                      placeholder="Offer Starting Date" onChange={this.handleInputChange}/>
            </Col>
            <Col md="6" className="form-group">
              <label htmlFor="forEndinngDate">Offer End Date</label>
              <div className="input-daterange input-group" id="datepicker-example-2">
              <FormInput name="ending_date" id="forEndinngDate"
                      type="date"
                      placeholder="Offfer Ending Date" onChange={this.handleInputChange}/>
              </div>
            </Col>
          </Row>
          <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="forDiscountInPercentage">Discount In Percent</label>
              <FormInput name="discount_in_perecent" id="forDiscountInPercentage"
                      type="number"
                      placeholder="Discount In Percentage" onChange={this.handleInputChange}/>
            </Col>
            <Col md="6" className="form-group">
              <label htmlFor="forSeriresId">Select Series</label>
              <FormSelect name="series_id" id="forSeriresId"
                      type="date"
                      placeholder="Offfer Ending Date" onChange={this.handleInputChange}/>
            </Col>
          </Row>
          <Button onClick={() => this.onSubmit()}>Create Offer</Button>
        </Form>
      </Col>
    )
  }
}

export default CreateOffersForm;
