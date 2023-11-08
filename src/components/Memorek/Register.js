import { useRef, useState, useEffect } from 'react';

const Register = () => {
    return (
        <div>Register</div>
    );
};

export default Register;

// import { useEffect, useState, useRef } from "react";
// import useAxiosPrivate from "./hooks/useAxiosPrivate";
// import './Register.css';

// const Register = () => {

//     const userRef = useRef();
//     const axiosPrivate = useAxiosPrivate();

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [registerSuccess, setRegisterSuccess] = useState('');

//     const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//     const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axiosPrivate.post('/register',

//                 JSON.stringify({ username, password }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true,
//                 }
//             );
//             setUsername('');
//             setPassword('');
//             setRegisterSuccess(response.data);

//         }
//         catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No server response.');
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Invalid username or password.');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized.');
//             } else if (err.response?.status === 409) {
//                 setErrMsg('User is existing in database.');
//             } else {
//                 setErrMsg('Register failed.');
//             }
//         }
//     };

//     useEffect(() => {
//         setErrMsg('');
//     }, [username, password]);

//     useEffect(() => {
//         userRef.current.focus();
//     }, []);

//     return (
//         <section className="register">
//             <p className="register-error-message">{errMsg ? errMsg : registerSuccess ? registerSuccess : <span style={{ color: "black" }}>Register</span>}</p>
//             <form className="register__container" onSubmit={handleSubmit}>
//                 <label htmlFor="username" className="register__container-title">Username:</label>
//                 <input
//                     className="register-register"
//                     type="text"
//                     id="username"
//                     placeholder="username"
//                     ref={userRef}
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <label htmlFor="password" className="register__container-title">Password:</label>
//                 <input
//                     className="register-register"
//                     type="password"
//                     id="password"
//                     placeholder="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <label htmlFor="password" className="register__container-title">Password:</label>
//                 <input
//                     className="register-register"
//                     type="password"
//                     id="password"
//                     placeholder="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button className="register-button">Register</button>
//             </form>
//         </section>
//     );

// };

// export default Register;

