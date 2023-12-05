import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const [error, setError] = useState('')

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const navigate = useNavigate();

    const { logIn } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('')
                navigate(from, { replace: true })


            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <div className=' text-danger mb-2'>
                {error}
            </div>

            <Button variant="primary" type="submit">
                LogIn
            </Button>
        </Form>
    );
};

export default Login;