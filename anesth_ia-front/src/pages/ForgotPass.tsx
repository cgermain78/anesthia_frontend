import React, { useState } from 'react';

export default function ForgotPass() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">


            <form>
                <h3 className="text-center text-primary mb-4">Mot de passe oublié</h3>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        aria-label="email"
                        style={{ boxShadow: "none" }}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100 mb-3"
                    style={{ boxShadow: "none" }}
                >
                    Réinitialiser
                </button>

                <div className="text-center">
                    <a href="/login" className="text-decoration-none">Se connecter</a>
                </div>
            </form>
        </div>

    );
};

