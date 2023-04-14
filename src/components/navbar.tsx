import {  } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { signOut } from 'firebase/auth'
export const Navigationbar = () => {
    const [user] = useAuthState(auth)
    
    const logOutUser = async () => {
        await signOut(auth);

    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    {user &&
                    (
                        <img
                        src={user?.photoURL || ""}
                        width="30"
                        height="30"
                    
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    )}
                
            

                    <Nav className="me-auto">
                    
                        {user && (
                            <>
                            <Nav.Link href="#">{user?.displayName}</Nav.Link>
                            <Nav.Link href="/home">Home</Nav.Link>
                            </>
                        )}
                        

                        {user && (
                            <Nav.Link href='/createpost'>Create</Nav.Link>
                        )}
                        {
                            !user ? <Nav.Link href="/login">Log In</Nav.Link>
                            : <Nav.Link onClick={logOutUser} >LogOut</Nav.Link>
                        
                        }
                        
                        


                        
                    </Nav>
                    
                </Container>
            </Navbar>
            <br />
        </div>
    )
}

// {/* <Link to='/'>HOME</Link>
//             <Link to='/login'>LOGIN</Link>
            
//             <div>
//                 <p></p>
//                 <img src={ user?.photoURL || ""} width = "100" height="100" alt = "displayPhoto" /> 
//             </div> */}