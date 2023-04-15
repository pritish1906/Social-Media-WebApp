import { Link} from 'react-router-dom'
import { auth } from '../../src/config/firebase'
import './navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { signOut } from 'firebase/auth'
// import { faHome, faAddressCard, faRightToBracket, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Navigationbar = () => {
    const [user] = useAuthState(auth)
    
    const logOutUser = async () => {
        await signOut(auth);

    }
    return (
        <div>
            <Navbar  className='navbar ourSideBar'>
                    <Nav className="me-auto allItems">
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
                            <Nav.Link href="#" className='sidebarItem' style={{color: '#f5f1ee'}}>{user?.displayName}</Nav.Link>
                            </>
                        )}
                        {user && (
                            <>
                            <Nav.Link href="#"><Link to="/home" className='sidebarItem'>Home</Link></Nav.Link>
                            </>
                        )}
                        

                        {user && (
                            <Nav.Link href='#'><Link to="/createpost"  className='sidebarItem'>Create</Link></Nav.Link>
                        )}
                        {
                            !user ? <Nav.Link href="#" ><Link to="/" className='sidebarItem'> Log In</Link></Nav.Link>
                            : <Nav.Link onClick={logOutUser}  ><Link to="/" className='sidebarItem'>Log Out</Link></Nav.Link>
                        
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