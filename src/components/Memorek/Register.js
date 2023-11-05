import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useData from "./hooks/useData";
import axiosPrivate from "./api/axios";
import './Register.css';

const Register = () => {
    const { auth, setAuth, successAuth, setSuccessAuth, changeMenu, setChangeMenu } = useData();

    const userRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPrivate.post('/register',
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setUsername('');
            setPassword('');
            console.log(JSON.stringify(response.data));
        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('No server response.');
            } else if (err.response?.status === 400) {
                setErrMsg('Invalid username or password.');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized.');
            } else {
                setErrMsg('Register failed.');
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
        <section className="register">
            <p className="register-error-message">{errMsg ? errMsg : <span style={{ color: "black" }}>Register</span>}</p>
            <form className="register__container" onSubmit={handleSubmit}>
                <label htmlFor="username" className="register__container-title">Username:</label>
                <input
                    className="register-register"
                    type="text"
                    id="username"
                    placeholder="username"
                    ref={userRef}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password" className="register__container-title">Password:</label>
                <input
                    className="register-register"
                    type="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="register-button">Register</button>
            </form>
        </section>
    );

};

export default Register;

