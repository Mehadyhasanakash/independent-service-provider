import { Button, Form, Nav } from 'react-bootstrap';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init'
import React, { useRef } from 'react';




const Login = () => {


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [signInWithEmailAndPassword,] = useSignInWithEmailAndPassword(auth);

    if(user){
        const path ='/checkout'
        navigate(path)
    }

    const emailref = useRef('')
    const passwordref = useRef('')

    const hendalSubmit = (e) =>{
        e.preventDefault()
        const email = emailref.current.value
        const password = passwordref.current.value

        signInWithEmailAndPassword(email, password)
    }

    
    


    return (
       <div className='container'>
        <div className='row'>
        <Form onSubmit={hendalSubmit} className='w-50 mx-auto mt-5 bg-light shadow p-3 mb-5 bg-body rounded'>
            <h1 className='text-center text-success'>Login form</h1>
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Nav.Link as={Link} to="/register"><h3 className='text-danger'>please click on  Register page!!!</h3></Nav.Link>
</Form>
        </div>
        <div className='row d-flex justify-content-center'>
            <div className='col col-md-4 border-top w-25'>
                
            </div>
            <div className='col col-md-4 d-grid justify-content-center'>
                <h3 className='text-danger '>or</h3>
                <br /> <br />
                <button onClick={()=> signInWithGoogle()} type="button" className="btn btn-success">GoogleSignUP</button>
                        
            </div>
            <div className='col col-md-4 border-top w-25'>
           
            </div>

        </div>


</div>
    );
};

export default Login;