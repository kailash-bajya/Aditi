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
    // this.service = service;
    // const itemToEdit = props.item;
    // this.state = {
    //   name: itemToEdit.name,
    //   summary: itemToEdit.summary,
    //   year: itemToEdit.year,
    //   country: itemToEdit.country,
    //   description: itemToEdit.description,
    //   link: itemToEdit.link
    // };
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
    
    if(this.validate.validateInputs(this.state)){
      console.log('submit value:::::', this.state)    
      const x = await this.service.registerInstitute(this.state);
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
    }
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
              <label htmlFor="feEmailAddress">Email</label>
              <FormInput name="email" id="feEmailAddress"
                      type="email"
                      placeholder="Email" onChange={this.handleInputChange}/>
            </Col>
            <Col md="6" className="form-group">
              <label htmlFor="feEmailAddress">Mobile Number</label>
              <FormInput name="contact_no" id="feEmailAddress"
                      type="number"
                      placeholder="Mobile Number" onChange={this.handleInputChange}/>
            </Col>
          </Row>
          <Row form>
            <Col md="6" sm="12" className="form-group">
              <label htmlFor="feEmailAddress">Password</label>
              <FormInput
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </Col>
            <Col md="6" sm="12" className="form-group">
              <label htmlFor="feEmailAddress">Re-Enter Password</label>
              <FormInput
                name="re_password"
                type="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row form>
            <Col md="6" sm="12" className="form-group">
              <label htmlFor="feEmailAddress">Address</label>
              <FormInput
                name="address"
                placeholder="Address"
                onChange={this.handleInputChange}
              />
            </Col>
            <Col md="6" sm="12" className="form-group">
              <label htmlFor="feEmailAddress">City</label>
              <FormInput
                name="city"
                placeholder="City"
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row form>
            <Col md="4" sm="8">
            <label htmlFor="feEmailAddress">State</label>
              <FormInput name="state" placeholder="State"/>
            </Col>
            <Col md="4" sm="8" className="pull-left">
              <label htmlFor="feEmailAddress">Postal Code</label>
              <FormInput name="postal_code" placeholder="Postal Code" type="number"/>
            </Col>
            <Col md="4" sm="8" className="form-group">
              <label htmlFor="feEmailAddress">Country</label>
              <FormSelect>
                <option>India</option>
              </FormSelect>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="form-group">
              <FormCheckbox>
                {/* eslint-disable-next-line */}I agree with your{" "}
                <a href="#">Privacy Policy</a>.
              </FormCheckbox>
            </Col>
          </Row>
          <Button onClick={() => this.onSubmit()}>Create New Account</Button>
        </Form>
      </Col>
    )
  }
}
// const RegisterInstituteForms = (props) => (
//   <Col sm="12" md="12">
//     <Form>
//       <Row form>
//         <Col md="6" className="form-group">
//           <label htmlFor="feEmailAddress">Email</label>
//           <FormInput value="qteteret@gmail.com" name="email" id="feEmailAddress"
//                   type="email"
//                   placeholder="Email" onChange={props.handleInputChange}/>
//         </Col>
//         <Col md="6" className="form-group">
//           <label htmlFor="feEmailAddress">Mobile Number</label>
//           <FormInput id="feEmailAddress"
//                   type="number"
//                   placeholder="Mobile Number" />
//         </Col>
//       </Row>
//       <Row form>
//         <Col md="6" sm="12" className="form-group">
//           <label htmlFor="feEmailAddress">Password</label>
//           <FormInput
//             type="password"
//             placeholder="Password"
//             onChange={this.handleInputChange}
//           />
//         </Col>
//         <Col md="6" sm="12" className="form-group">
//           <label htmlFor="feEmailAddress">Re-Enter Password</label>
//           <FormInput
//             type="password"
//             placeholder="Password"
//             onChange={this.handleInputChange}
//           />
//         </Col>
//       </Row>
//       <Row form>
//         <Col md="6" sm="12" className="form-group">
//           <label htmlFor="feEmailAddress">Address</label>
//           <FormInput
//             placeholder="Address"
//             onChange={this.handleInputChange}
//           />
//         </Col>
//         <Col md="6" sm="12" className="form-group">
//           <label htmlFor="feEmailAddress">City</label>
//           <FormInput
//             placeholder="City"
//             onChange={() => {}}
//           />
//         </Col>
//       </Row>
//       <Row form>
//         <Col md="4" sm="8">
//         <label htmlFor="feEmailAddress">State</label>
//           <FormInput placeholder="State"/>
//         </Col>
//         <Col md="4" sm="8" className="pull-left">
//           <label htmlFor="feEmailAddress">Postal Code</label>
//           <FormInput placeholder="Postal Code" type="number"/>
//         </Col>
//         <Col md="4" sm="8" className="form-group">
//           <label htmlFor="feEmailAddress">Country</label>
//           <FormSelect>
//             <option>India</option>
//           </FormSelect>
//         </Col>
//       </Row>
//       <Row>
//         <Col md="12" className="form-group">
//           <FormCheckbox>
//             {/* eslint-disable-next-line */}I agree with your{" "}
//             <a href="#">Privacy Policy</a>.
//           </FormCheckbox>
//         </Col>
//       </Row>
//       <Button type="submit">Create New Account</Button>
//     </Form>
//   </Col>
// );

// RegisterInstituteForms.propTypes = {
//   /**
//    * The component's title.
//    */
//   // title: PropTypes.string,
//   /**
//    * The discussions dataset.
//    */
//   props: PropTypes.array
// };

// RegisterInstituteForms.defaultProps = {
  
//   // props: [
//   //   {
//   //     id: 1,
//   //     date: "3 days ago",
//   //     author: {
//   //       image: require("../../images/avatars/1.jpg"),
//   //       name: "John Doe",
//   //       url: "#"
//   //     },
//   //     post: {
//   //       title: "Hello World!",
//   //       url: "#"
//   //     },
//   //     body: "Well, the way they make shows is, they make one show ..."
//   //   }
//   // ]
// };

// RegisterInstituteForms.onclick = (data)=>{
//   service.RegisterInstituteForms(data).then(response=>{
//     console.log('registerinstitut response::::::', response);
//   }).catch(err=>{
//     console.log('error ocured::::::::::', err);
//   })
//   // if (this.validator.validateInputs(this.state)) {
//   //   this.props.onSubmit(this.state);
//   // }
// }
// RegisterInstituteForms.handleInputChange = (event) =>{
//   console.log('onn change triggred', event);
//   const target = event.target;
//   const value = target.value;
//   const name = target.name;
//   this.setState({
//     [name]: value
//   });
// }
RegisterInstituteForms.service = service;
export default RegisterInstituteForms;
