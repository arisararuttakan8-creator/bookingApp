import { useContext } from "react"
import "./navbar.css"
import {Link} from "react-router-dom"
import {AuthContext} from "../../context/AuthContext"
import UserDropdown from "../userDropdown/UserDropdown"

const Navbar = () => {
  const { user ,dispatch } = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
          <span className="logo">arisbooking</span>
        </Link>
       { user ? (
                <UserDropdown 
                    user={user}        
                    dispatch={dispatch} 
                />
            ) :  (<div className="navItems">
          <Link to="/register">
            <button className="navButton">Register</button>
          </Link>
          <Link to="/login">
            <button className="navButton" >Login</button>
          </Link>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar