import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';


const GoogleSignin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if(user){
        
        navigate('/checkout')
    }

    return (
        
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
    );
};

export default GoogleSignin;