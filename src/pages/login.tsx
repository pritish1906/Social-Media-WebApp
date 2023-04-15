import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            <div className="loginForm">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className='btn' type="submit">Submit</Button>
                    <Button className='btn' onClick={loginWithGoogle}>
                    Sign in with google
                    </Button>
    
                </Form>
                
            </div>

        </div>
    )
}