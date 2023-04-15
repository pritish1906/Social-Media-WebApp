import { Link} from 'react-router-dom'
import { auth } from '../config/firebase'
// import './navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { signOut } from 'firebase/auth'
import { faHome, faAddressCard, faRightToBracket, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Navigationbar2 = () => {
    const [user] = useAuthState(auth)
    
    const logOutUser = async () => {
        await signOut(auth);

    }
    return (
        <div>
            <Navbar  className='navbar'>
                    <Nav className="me-auto ">
                        <div className='imgCenter'>
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
                        </div>
                    
                        {user && (
                            <>
                            <Nav.Link href="#">{user?.displayName}</Nav.Link>
                            <Nav.Link href="#"><Link to="/home">Home</Link></Nav.Link>
                            </>
                        )}
                        

                        {user && (
                            <Nav.Link href='#'><Link to="/createpost">Create</Link></Nav.Link>
                        )}
                        {
                            !user ? <Nav.Link href="#"><Link to="/" className='sidebarItem'><FontAwesomeIcon className="fontAwesome"  style={{fontSize: 'large'}} icon={faRightToBracket}/>Log In</Link></Nav.Link>
                            : <Nav.Link onClick={logOutUser} ><Link to="/">Log Out</Link></Nav.Link>
                        
                        }
                        
                        


                        
                    </Nav>
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