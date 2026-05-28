import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import "../login/login.css"  // ใช้ style เดิมได้เลยค่ะ
import axios from "../../utils/axios";

const Register = () => {
    const [credentials, setCredentials] = useState({
        userName: undefined,
        email: undefined,
        password: undefined,
    })
    const { dispatch } = useContext(AuthContext) 
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            // 1. register and login
           const registerRes = await axios.post('/auth/register', credentials)
  
            // 2. dispatch เหมือน Login 
            dispatch({ type: "LOGIN_SUCCESS", payload: registerRes.data.details })
            navigate("/")  
        } catch (err) {
            setError(err.response.data)
        }
        setLoading(false)
    }

    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="username" id="userName" onChange={handleChange} className="lInput"/>
                <input type="email" placeholder="email" id="email" onChange={handleChange} className="lInput"/>
                <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput"/>
                <button disabled={loading} className="lButton" onClick={handleClick}>
                    Register
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Register