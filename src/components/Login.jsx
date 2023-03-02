import React from 'react';
import './styles.css'
// import { useRef } from 'react';
// import { Col, Row, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const token = JSON.parse(localStorage.getItem('token'));


export const Login = () => {
    // const inputEmail = useRef(null);
    // const inputPassword = useRef(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    async function onSubmit(data) {
        try {
            const { email, password } = data;
            console.log(data);
            const loginData = await axios.post('http://localhost:3001/login', data);
            console.log(loginData);
            console.log(loginData.data.token);
            localStorage.setItem('token', JSON.stringify(loginData.data.token));
            localStorage.setItem('user', JSON.stringify(loginData.data.user));
        } catch (error) {
            console.log(error);
        }
    }
    // const onSubmit = data => console.log(data);
    

    // async function login(e) {
    //     e.preventDefault();
    //     console.log('login called', inputEmail.current.value, inputPassword.current.value)
    // }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /> { errors.email && <p>Error en el mail</p> }
                <input type="password" placeholder="Password" {...register("password", { required: true})} /> { errors.password && <p>Error en la password</p> }

                <input type="submit" />
            </form>
            {/* <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }} className="d-flex flex-grow-1">
            <Form onSubmit={login}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={inputEmail} name="email" type='email' placeholder="user@emaiil.com"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={inputPassword} name="password" type="password"></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Loguearse
                </Button>
            </Form>
        </Col>
    </Row> */}
        </div>
    )
}
