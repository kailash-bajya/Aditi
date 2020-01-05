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
class CreateSeriesForm extends React.Component {
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
      const x = await this.service.create(this.state, this.config['create_service']);
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
            <h6> Create series</h6>
          </Row>
          <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="forName">Name</label>
              <FormInput name="name" id="forName"
                      type="text"
                      placeholder="Series Name" onChange={this.handleInputChange}/>
            </Col>
            <Col md="6" className="form-group">
              <label htmlFor="forCateegory">Category</label>
              <FormSelect name="category_id" id="forCateegory"
                      placeholder="Seleect Category" onChange={this.handleInputChange}/>
            </Col>
          </Row>
          <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="forExamName">Exam</label>
              <FormSelect name="exam_type" id="forExamName"
                      placeholder="Exam Name" onChange={this.handleInputChange}/>
            </Col>
            <Col md="6" className="form-group">
              <label htmlFor="forPaperCount">No Of Paper</label>
              <FormInput name="papers_count" id="forPaperCount" type="number"
                      placeholder="No of Papers" onChange={this.handleInputChange}/>
            </Col>
          </Row>
          <Row form>
            <label>Series Prices</label>
          </Row>
          <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="forBasePrice">Price</label>
              <FormInput name="paper_base_price" id="forBasePrice" type="number"
                      placeholder="Series Price" onChange={this.handleInputChange}/>
            </Col>
            <Col md="6" className="form-group">
              <label htmlFor="forSellingPrice">Selling Price</label>
              <FormInput name="paper_selling_price" id="forSellingPrice" type="number"
                      placeholder="Series Selling Price" onChange={this.handleInputChange}/>
            </Col>
          </Row>
          <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="forOfferId">select offer On series</label>
              <FormSelect name="series_offer_id" id="forOfferId"
                      placeholder="Series Offer" onChange={this.handleInputChange}/>
            </Col>
          </Row>

          <Row form>
            <label>Paper Prices</label>
          </Row>
          <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="forPaperBasePrice">Price</label>
              <FormInput name="paper_base_price" id="forPaperBasePrice" type="number"
                      placeholder="Series Price" onChange={this.handleInputChange}/>
            </Col>
            <Col md="6" className="form-group">
              <label htmlFor="forPaperSellingPrice">Selling Price</label>
              <FormInput name="paper_selling_price" id="forPaperSellingPrice" type="number"
                      placeholder="Paper Selling Price" onChange={this.handleInputChange}/>
            </Col>
          </Row>
          <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="forPaperOfferId">Select Offer On Paper</label>
              <FormSelect name="paper_offer_id" id="forOfferId"
                      placeholder="Paper Offer" onChange={this.handleInputChange}/>
            </Col>
          </Row>
          <Button className="" onClick={() => this.onSubmit()}>Create  Series</Button>
        </Form>
      </Col>
    )
  }
}

export default CreateSeriesForm;
