import React from 'react';
import {
  Col, Row,
  Form, FormGroup,
  Label, Input,
  Button,
} from 'reactstrap';

export default function RegisterForm(props) {
  const { onInput, onSubmit, error } = props;
  return (
    <Form className="register-form" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <h3 className="register-head">Register</h3>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" onChange={onInput} name="first-name" id="firstName" placeholder="First Name" required />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" onChange={onInput} name="last-name" id="lastName" placeholder="Last Name" required />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" onChange={onInput} name="email" id="email" placeholder="Enter email address" required />
      </FormGroup>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" onChange={onInput} name="password" id="password" placeholder="Password" required />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="confirmPassword">Confirm password</Label>
            <Input type="password" onChange={onInput} name="confirm-password" id="confirmPassword" placeholder="Password" required />
          </FormGroup>
        </Col>
      </Row>
      <Button color="success" block>Sign in</Button>
      <span className="throw-error">{error}</span>
    </Form>
  );
}
