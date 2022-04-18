import React, { useRef } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init'





const Register = () => {
    const nivigate = useNavigate()

    const [ createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    
    if(user){
            const path = '/checkout'
            nivigate(path)
            
        
    }
    


    const emailRef = useRef('')
  
    const passwordRef = useRef('')
    

    const hendalSubmit = (e) =>{
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
          createUserWithEmailAndPassword(email, password)

        
        
      
  
        // console.log(email, user, password, confirmPassword)
    }

    



    return (
        <div className='container'>
        <div className='row'>
        <Form onSubmit={hendalSubmit} className='w-50 mx-auto mt-5 bg-light shadow p-3 mb-5 bg-body rounded'>
            <h1 className='text-center text-primary'>Register form</h1>
     

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>

  

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Nav.Link as={Link} to="/login"><h3 className='text-danger'>Already  Register / <span className='text-success'>please login page!!!</span></h3></Nav.Link>


 

</Form>
        

        </div>


</div>
    );
};

export default Register;