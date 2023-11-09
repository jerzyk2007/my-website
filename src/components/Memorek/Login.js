import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useData from "./hooks/useData";
import axios from './api/axios';
import Instruction from "./Instruction";
import { FiX } from "react-icons/fi";
import './Login.css';

const Login = () => {
    const { setAuth, successAuth, setSuccessAuth, changeMenu, setChangeMenu } = useData();
    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login',
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ username, password, roles, accessToken });
            setSuccessAuth(true);
            setChangeMenu(!changeMenu);
            navigate('/memorek');
            // console.log(JSON.stringify(response.data));
        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('No server response.');
            } else if (err.response?.status === 400) {
                setErrMsg('Invalid username or password.');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized.');
            } else {
                setErrMsg('Login failed.');
            }
        }
    };

    useEffect(() => {
        setErrMsg('');
    }, [username, password]);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    return (
        !successAuth ? (<section className="login">
            <p className={errMsg ? "login-error-message" : "login-error-message--offscreen"} ref={errRef}>{errMsg}</p>
            <h1 className="login-title">Login</h1>
            <form className="login__container" onSubmit={handleSubmit}>
                <label htmlFor="username" className="login__container-title">Username:</label>
                <input
                    className="login-login"
                    type="text"
                    id="username"
                    placeholder="username"
                    ref={userRef}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password" className="login__container-title">Password:</label>
                <input
                    className="login-login"
                    type="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="login-button">Login</button>
            </form>
            <FiX className='login-close-button' onClick={() => navigate(-1)} />
        </section>) : <Instruction />
    );

};

export default Login;