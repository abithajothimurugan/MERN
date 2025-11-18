import React, { useState } from "react";
import "../ConditionalRendering/ConditionalRendering.css";

function Login({ CloseForm, onLoginSuccess }) {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleLogin = () => {
        setShowOverlay(true);

        setTimeout(() => {
            setShowOverlay(false);
            onLoginSuccess();
        }, 1200);
    };

    return (
        <>
            {/* SUCCESS OVERLAY */}
            {showOverlay && (
                <div className="success-overlay">
                    <div className="success-box">
                        <h2>Login Successful!</h2>
                    </div>
                </div>
            )}

            <div className="login-container">
                <p className="close-btn" onClick={CloseForm}>×</p>

                <h1 className="login-title">Login</h1>

                <label>Username</label>
                <input type="text" autoComplete="off" />

                <label>Password</label>
                <input type="password" autoComplete="new-password" />

                <button className="login-submit" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </>
    );
}

export default Login;
