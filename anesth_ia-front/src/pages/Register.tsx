import React, { useState } from 'react';

export default function Register() {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation
        if (formData.password !== formData.confirmPassword) {
            alert("Les mots de passe ne correspondent pas");
            return;
        }

        // Logique d'inscription ici
        console.log('Données du formulaire:', formData);
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">

            <h3 className="text-center text-primary mb-4">Inscription</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">

                    <input
                        type="text"
                        className="form-control"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Nom"
                        aria-label="Nom"
                        style={{ boxShadow: "none" }}
                        required
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        placeholder="Prénom"
                        aria-label="prénom"
                        style={{ boxShadow: "none" }}
                        required
                    />
                </div>

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

                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Mot de passe"
                        aria-label="mot-de-passe"
                        style={{ boxShadow: "none" }}
                        required
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirmez votre mot de passe"
                        style={{ boxShadow: "none" }}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100 mb-3"
                    style={{ boxShadow: "none" }}
                >
                    S'inscrire
                </button>

                <div className="text-center">
                    <span>Vous avez déjà un compte ? </span>
                    <a href="/login" className="text-decoration-none">Se connecter</a>
                </div>
            </form>
        </div>
    );
};

