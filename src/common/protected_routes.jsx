import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Protected_routes({ Component }) {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const checkToken = async () => {
        if (!token) {
            navigate('/');
        }
    };
    useEffect(() => {
        if (!isChecked) {
            checkToken();
            setIsChecked(true);
        }
    }, []);
    return <>{Component && <Component />}</>;
}
