import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="text-primary mb-2">medspot.</h1>

            <div className="card p-4 shadow" style={{ width: "320px" }}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={login}
                        placeholder="Email"
                        aria-label="Email"
                        style={{ boxShadow: "none" }}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>

                <div className="mb-3">

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        style={{ boxShadow: "none" }}
                        placeholder="Mot de passe"
                        aria-label="Mot de passe"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="btn btn-primary w-100"
                    style={{ boxShadow: "none" }}
                >Se connecter</button>

                <div className="mb-3" style={{ marginTop: "15px" }}>
                    <button
                        className="btn btn-primary w-100 text-primary"
                        style={{ boxShadow: "none", background: "none" }}
                        onClick={() => navigate('/register')}
                    >
                        Inscription
                    </button>
                </div>
                <div className="text-center">
                    <a href="/forgotpassword">Mot de passe oublié</a>
                </div>
            </div>
        </div>
    );
} 