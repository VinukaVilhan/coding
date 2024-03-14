import { useState } from 'react';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLogin } from '../hooks/useLogin';


const LogIn = () => {
    const [email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password)
    }

    return(
        <div>
            <Form className='login' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isLoading}>Submit</Button>
                {error && <div className='error'>{error}</div>}
            </Form>
        </div>    
    );
} 

export default LogIn
