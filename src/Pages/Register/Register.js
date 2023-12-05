
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

    const [errorMessage, setError] = useState(' ')
    const [checkbox, setCheckbox] = useState(false);
    const navigate = useNavigate();

    const { user, createUser, updateUserProfile, emailVerification } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                handleProfileUpdate(name, url);
                handleEmailVerification();
                setError(' ')
                form.reset();

                navigate('/')

            })
            .catch(error => {
                console.error('create user error', error)
                setError(error.message)
            })
    }

    const check = (event) => {
        const value = event.target.checked;
        setCheckbox(value);

    }

    const handleProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        console.log('function called', profile)
        updateUserProfile(profile)
            .then(() => {
                console.log('successfully updated user');
            })
            .catch(error => {
                console.error('update user error message', error)
            })

    }

    const handleEmailVerification = () => {
        emailVerification()
            .then(() => {

                console.log('email verification message sent ')
                toast.success('email verification message sent ')
            })
            .catch(error => {
                console.error('email verification error', error)
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Useraname" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name='url' placeholder="Your Useraname" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={check}
                        type="checkbox"
                        label={<>Accept <Link to='/term'> Terms and Condition </Link></>} />
                </Form.Group>
                <div className=' mb-2 text-danger'>
                    {errorMessage}
                </div>

                <Button variant="primary" type="submit" disabled={!checkbox}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;