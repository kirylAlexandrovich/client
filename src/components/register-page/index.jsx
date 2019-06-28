/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './register-page.css';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class RegisterPage extends React.Component {
  render() {
    return (
      <Form className="register-form">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="first-name" id="firstName" placeholder="First Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" name="last-name" id="lastName" placeholder="Last Name" />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter email address" />
        </FormGroup>

        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="text" name="first-name" id="firstName" placeholder="Password" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Confirm password</Label>
              <Input type="text" name="last-name" id="lastName" placeholder="Password" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck" />
          <Label for="exampleCheck" check>Check me out</Label>
        </FormGroup>
        <Button outline color="success">Sign in</Button>
      </Form>
    );
  }
}

export default RegisterPage;
