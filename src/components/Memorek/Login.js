import { useEffect, useState, useRef } from "react";
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const userRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
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