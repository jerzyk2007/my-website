import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./hooks/useData";
import Login from './Login';

const RequireAuth = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth?.username) {
            navigate('/memorek/login');
        }
    }, [auth, navigate]);

    return (
        auth?.username
            ? <Outlet />
            : <Login />
    );

};

export default RequireAuth;
