import { Button, Form, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init'
import React, { useRef } from 'react';
import GoogleSignin from '../GoogleSignIn/GoogleSignin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';





const Login = () => {

    const navigate = useNavigate()
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);

    if(user){
        
        navigate('/checkout')
    }

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const hendalSubmit = (e) =>{
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
          signInWithEmailAndPassword(email, password)
          console.log(email,password)
        
    }

    
    


    return (
       <div className='container'>
        <div className='row'>
        <Form onSubmit={hendalSubmit} className='w-50 mx-auto mt-5 bg-light shadow p-3 mb-5 bg-body rounded'>
            <h1 className='text-center text-success'>Login form</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Nav.Link as={Link} to="/register"><h3 className='text-danger'>please click on  Register page!!!</h3></Nav.Link>
</Form>
        </div>
        

      <GoogleSignin></GoogleSignin>


</div>
    );
};

export default Login;