
import study from "../assert/image/study.jpg";
import "../ConditionalRendering/ConditionalRendering.css";

const ConditionalRendering = ({ FormLogin }) => {    
    return (
        <>
            <nav className="navbar">
                <div className="logo">ClassSphere</div>

                <div className="nav-links">
                    <button
                        className="login-btn"
                        onClick={FormLogin}
                       >
                        Log In
                    </button>

                    <button className="signup-btn">Sign Up</button>
                </div>
            </nav>

            <div className="hero">
                <div className="hero-left">
                    <h1 className="title">
                        Learn Anything, Anytime
                        <span className="brand-span"> with ClassSphere</span>
                    </h1>

                    <p className="subtitle">
                        Access online courses, learn new skills, and improve your knowledge from anywhere.
                    </p>

                    <button className="hero-btn">Explore Courses</button>
                </div>

                <div className="hero-right">
                    <img src={study} alt="study" className="hero-image" />
                </div>
            </div>
        </>
    );
}

export default ConditionalRendering;
