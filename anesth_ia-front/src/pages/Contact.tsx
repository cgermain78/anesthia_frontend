import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        sujet: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Logique d'envoi du message (API call)
        console.log('Message envoyé:', formData);

        alert('Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.');
        navigate(-1);
    };

    return (
        <div className="container py-4">
            <button
                className="btn btn-outline-primary my-3"
                style={{ boxShadow: "none" }}
                onClick={() => navigate(-1)}
            >
                ← Retour
            </button>

            <div className="row">
                {/* Formulaire de contact */}
                <div className=" mb-4">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Contactez-nous</h3>
                        </div>
                        <div className="card-body p-4">
                            <p className="text-muted mb-4">
                                Une question ? Un problème technique ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nom" className="form-label">Nom complet *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nom"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        placeholder="Dr. Jean Dupont"
                                        style={{ boxShadow: "none" }}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="votre.email@exemple.com"
                                        style={{ boxShadow: "none" }}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="sujet" className="form-label">Sujet *</label>
                                    <select
                                        className="form-control"
                                        id="sujet"
                                        name="sujet"
                                        value={formData.sujet}
                                        onChange={handleChange}
                                        style={{ boxShadow: "none" }}
                                        required
                                    >
                                        <option value="">Sélectionner un sujet</option>
                                        <option value="question">Question générale</option>
                                        <option value="technique">Problème technique</option>
                                        <option value="compte">Gestion de compte</option>
                                        <option value="facturation">Facturation</option>
                                        <option value="suggestion">Suggestion d'amélioration</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message *</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Décrivez votre demande en détail..."
                                        style={{ boxShadow: "none" }}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ boxShadow: "none" }}
                                >
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}