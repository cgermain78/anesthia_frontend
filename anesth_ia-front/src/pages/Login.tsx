import { useState } from "react";

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="text-primary mb-2">medspot.</h1>

            <div className="card p-4 shadow" style={{ width: "320px" }}>
                <div className="mb-3">
                    <label className="form-label">Login</label>
                    <input
                        type="text"
                        className="form-control"
                        value={login}
                        style={{ boxShadow: "none" }}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Mot de passe</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        style={{ boxShadow: "none" }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="btn btn-primary w-100"
                    style={{ boxShadow: "none" }}
                >Se connecter</button>
            </div>
        </div>
    );
} 