import { useEffect, useState, useRef } from "react";
import axios from './api/axios';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const userRef = useRef();

    const handleLogin = async () => {
        try {
            const response = await axios.post('/login',
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // const response = await axios.post('http://localhost:3500/login');
            console.log(response.data);
        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('No response from the server.');
            } else if (err.response?.status === 400) {
                setErrMsg('Invalid email or password.');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };



    useEffect(() => {
        userRef.current.focus();
    }, []);

    return (
        <section className="login">
            <p className="login-error-message">{errMsg ? errMsg : <span style={{ color: "black" }}>Login</span>}</p>
            <form className="login__container" onSubmit={handleSubmit}>
                <label htmlFor="username" className="login__container-title">Username</label>
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
                <label htmlFor="password" className="login__container-title">Password</label>
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
        </section>
    );
};

export default Login;