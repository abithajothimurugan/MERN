import React from 'react';
import "../ConditionalRendering/ConditionalRendering.css";
import html from "../assert/image/html.png";

function Homepage({ onLogout }) {
    return (
        <>
            <nav className="navbar">
                <div className="logo">ClassSphere</div>

                <div className="nav-links">
                    <button className="login-btn" onClick={onLogout}>
                        Logout
                    </button>
                </div>
            </nav>
            <div className="homepage-text">
                <h1>Welcome to Your Dashboard</h1>
                <p>Start learning new skills with high-quality beginner-friendly courses.</p>
            </div>

            <div className="hero homepage-hero">
                <div className="homepage-content">
                  

                    <div className="dashboard-cards">
                        <div className="dash-card">
                            <sapan>50% off</sapan>
                            <img src={html} alt="" />
                            <h1>HTML</h1>
                            <p>Beginner Level</p>
                            <button>Buy now</button>
                        </div>
                        <div className="dash-card">
                            <sapan>50% off</sapan>
                            <img src={html} alt="" />
                            <h1>CSS</h1>
                            <p>Beginner Level</p>
                            <button>Buy now</button>
                        </div>
                        <div className="dash-card">
                            <sapan>50% off</sapan>
                            <img src={html} alt="" />
                            <h1>React JS</h1>
                            <p>Beginner Level</p>
                            <button>Buy now</button>
                        </div>
                        <div className="dash-card">
                            <sapan>50% off</sapan>
                            <img src={html} alt="" />
                            <h1>React JS</h1>
                            <p>Beginner Level</p>
                            <button>Buy now</button>
                        </div>
                        <div className="dash-card">
                            <sapan>50% off</sapan>
                            <img src={html} alt="" />
                            <h1>React JS</h1>
                            <p>Beginner Level</p>
                            <button>Buy now</button>
                        </div>
                        <div className="dash-card">
                            <sapan>50% off</sapan>
                            <img src={html} alt="" />
                            <h1>React JS</h1>
                            <p>Beginner Level</p>
                            <button>Buy now</button>
                        </div>
                        <div className="dash-card">
                            <sapan>50% off</sapan>
                            <img src={html} alt="" />
                            <h1>React JS</h1>
                            <p>Beginner Level</p>
                            <button>Buy now</button>
                        </div>
                        <div className="dash-card">
                            <sapan>50% off</sapan>
                            <img src={html} alt="" />
                            <h1>React JS</h1>
                            <p>Beginner Level</p>
                            <button>Buy now</button>
                        </div>
                    </div>

                  
                </div>
            </div>
        </>
    );
}

export default Homepage;
