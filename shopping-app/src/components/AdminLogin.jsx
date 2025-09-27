import React, { useState } from 'react';
import '../styles/AdminLogin.css';
import { toast } from 'react-toastify';

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function val_login(e) {
        e.preventDefault();
        if(email === "abc" && password === "1234") {
            toast.success("Login Successful");
        } else {
            toast.error("Login Failed");
        }
    }

    return (
        <div className="admin-login-container">
            <form className="admin-login-form" onSubmit={val_login}>
                <h2>Admin Login</h2>

                <label>Email</label>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />

                <label>Password</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;
