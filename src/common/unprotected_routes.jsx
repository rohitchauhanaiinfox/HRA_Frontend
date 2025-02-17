import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function UnProtected_routes(props) {
    const navigate = useNavigate()
    const { Component } = props
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const checkToken = async() => {
        if (token) {
            if (role=='user'){
                navigate('/dashboard')
            }else if (role=="admin"){
                navigate("/admin-dashboard")
            }
        }
    }
    useEffect(() => {
        checkToken()
    }, [])
    return (
        <>
            <Component />
        </>
    )


}