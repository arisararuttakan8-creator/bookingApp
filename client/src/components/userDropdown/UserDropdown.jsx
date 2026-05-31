import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./userDropdown.css"

const UserDropdown = ({ user, dispatch }) => {
    console.log('user : ' , user)
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
        navigate("/")
    }

    return (
        <div className="userMenu">
            <span onClick={() => setShowMenu((prev)=> !prev)}>
                {user.username} ▾
            </span>
            {showMenu && (
                <div className="dropdown">
                    <div className="dropdownItem" onClick={() => navigate("#")}>My Account</div>
                    <div className="dropdownItem" onClick={() => navigate("#")}>Bookings & Trips</div>
                    <div className="dropdownItem" onClick={handleLogout}>Sign Out</div>
                </div>
            )}
        </div>
    )
}
export default UserDropdown;