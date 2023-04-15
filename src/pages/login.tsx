import { auth, provider } from '../../src/config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'

export const Login = () => {


    const navigate = useNavigate();
    const loginWithGoogle = async () => {
        console.log("hi")
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/home")
    }

    return (
        <div>
            <h3 className='heading'>LOGIN TO YOUR ACCOUNT</h3>
            <section className='paragraph'>
                <p>Welcome to our login page! Here, you can sign in to your account and connect with others around the world. Stay up to date with the latest news, trends, and conversations by logging in now.</p>
                <p> Don't have an account yet? Sign up today and join our community!</p>
            </section>
            <div className="loginForm">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="name" className='formInputs' placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" className='formInputs' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" className='formInputs' placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" className='formInputs' placeholder="Confirm Password" />
                    </Form.Group>

                    <Button className='btn' type="submit">Sign Up</Button>
                    <Button className='btn' onClick={loginWithGoogle}>
                    Sign In
                </Button>
            </Form>
            </div>
        </div>
    )
}