import React, { useRef } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init'





const Register = () => {
    const nivigate = useNavigate()

    const [ createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    
    if(user){
            const path = '/chcekout'
            nivigate(path)
            
        
    }
    


    const emailref = useRef('')
    const userref = useRef('')
    const passwordref = useRef('')
    const confirmPasswordref = useRef('')

    const hendalSubmit = (e) =>{
        e.preventDefault()
        const email = emailref.current.value
        const user = userref.current.value
        const password = passwordref.current.value
        const confirmPassword = confirmPasswordref.current.value
        createUserWithEmailAndPassword(email, user, password,confirmPassword)
    }

    



    return (
        <div className='container'>
        <div className='row'>
        <Form onSubmit={hendalSubmit} className='w-50 mx-auto mt-5 bg-light shadow p-3 mb-5 bg-body rounded'>
            <h1 className='text-center text-primary'>Register form</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>User Name</Form.Label>
    <Form.Control ref={userref} type="Name" placeholder="Enter name" />
    <Form.Text className="text-muted">
      We'll never share your user name with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailref} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordref} type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword2">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control ref={confirmPasswordref} type="Confirm password" placeholder="Confirm Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Nav.Link as={Link} to="/login"><h3 className='text-danger'>Already  Register / <span className='text-success'>please login page!!!</span></h3></Nav.Link>


 

</Form>
        {/* </div>
        <div className='row d-flex justify-content-center'>
            <div className='col col-md-4 border-top w-25'>
                
            </div>
            <div className='col col-md-4 d-grid justify-content-center'>
                <h3 className='text-danger '>or</h3>
                <br /> <br />
                <button onClick={()=> signInWithGoogle()} type="button" className="btn btn-success">GoogleSignUP</button>
                        
            </div>
            <div className='col col-md-4 border-top w-25'>
           
            </div> */}

        </div>


</div>
    );
};

export default Register;