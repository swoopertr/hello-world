import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Col, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { useNavigate } from 'react-router';
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [terms, setTerms] =  useState(false);
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/success');
  };

  const checkEmail = (email='') => {
    let isValid = email.match(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
    
    return !!isValid;
  };

  const checkPassword = (password='') => {
    let result = false;
    if (password.length > 4) {
      result = true;
    }
    return result;
  };

  const emailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!checkEmail(email)) {
      console.log("email has problems, form doesnt submit");
    }

    if (!checkPassword(password)) {
      console.log("password should be longer than 4 characters");
    }

    if(!terms){
        console.log("terms is not accepted");
    }


  };

  const passwordHandler = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (!checkEmail(email)) {
      console.log("email has problems, form doesnt submit");
    }

    if (!checkPassword(password)) {
      console.log("password should be longer than 4 characters");
    }

    if(!terms){
        console.log("terms is not accepted");
    }

  };

  const checkboxHandler = (e) => {
    setTerms(e.target.checked);

    if (!checkEmail(email)) {
      console.log("email has problems, form doesnt submit");
    }

    if (!checkPassword(password)) {
      console.log("password should be longer than 4 characters");
    }

    if(!terms){
        console.log("terms is not accepted");
    }

  } 

  return (
    <>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="emailInput"
                name="email"
                placeholder="with a placeholder"
                type="email"
                value={email}
                onChange={emailHandler}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="passwordInput"
                name="password"
                placeholder="password placeholder"
                type="password"
                onChange={passwordHandler}
                value={password}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup check>
          <Input
            id="checkboxInput"
            name="check"
            type="checkbox"
            onChange={checkboxHandler}
            checked={terms}
          />
          <Label check for="exampleCheck">
            Check me out
          </Label>
        </FormGroup>
        <Button 
        id="btnSubmit"
            onClick={submitHandler} 
            disabled={ !(checkEmail(email) && checkPassword(password) && terms) } 
        >
            Sign in
        </Button>
      </Form>
    </>
  );
};

export default Login;
