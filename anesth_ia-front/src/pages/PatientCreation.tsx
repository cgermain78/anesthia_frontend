import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function PatientCreation() {
    const navigate = useNavigate();
    const { id } = useParams();

    // Données initiales du patient - à remplacer par vos vraies données
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        dateNaissance: "",
        email: "",
        telephone: "",
        adresse: "",
        allergies: "",
        groupeSanguin: ""
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

        // Logique de sauvegarde ici (API call)
        console.log('Données modifiées:', formData);

        // Rediriger vers la page du patient
        navigate(`/patient/${id}`);
    };

    return (
        <div className="container py-4">

            <div className="card shadow-sm my-3">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">Nouveau patient</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        {/* Informations personnelles */}
                        <h5 className="text-primary mb-3">Informations personnelles</h5>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="nom" className="form-label">Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    style={{ boxShadow: "none" }}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="prenom" className="form-label">Prénom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="prenom"
                                    name="prenom"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    style={{ boxShadow: "none" }}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="dateNaissance" className="form-label">Date de naissance</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateNaissance"
                                    name="dateNaissance"
                                    value={formData.dateNaissance}
                                    onChange={handleChange}
                                    style={{ boxShadow: "none" }}
                                    required
                                />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ boxShadow: "none" }}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="telephone" className="form-label">Téléphone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="telephone"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    style={{ boxShadow: "none" }}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="adresse" className="form-label">Adresse</label>
                            <input
                                className="form-control"
                                id="adresse"
                                name="adresse"
                                value={formData.adresse}
                                onChange={handleChange}
                                style={{ boxShadow: "none" }}
                            />
                        </div>

                        <hr className="my-4" />

                        {/* Informations médicales */}
                        <h5 className="text-primary mb-3">Informations médicales</h5>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="groupeSanguin" className="form-label">Groupe sanguin</label>
                                <select
                                    className="form-control"
                                    id="groupeSanguin"
                                    name="groupeSanguin"
                                    value={formData.groupeSanguin}
                                    onChange={handleChange}
                                    style={{ boxShadow: "none" }}
                                    required
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="allergies" className="form-label">Allergies</label>
                            <textarea
                                className="form-control"
                                id="allergies"
                                name="allergies"
                                rows={2}
                                value={formData.allergies}
                                onChange={handleChange}
                                placeholder="Séparez les allergies par des virgules"
                                style={{ boxShadow: "none" }}
                            />
                            <small className="text-muted">Ex: Pénicilline, Latex, Arachides</small>
                        </div>

                        {/* Boutons d'action */}
                        <div className="d-flex justify-content-end gap-2 mt-4">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                style={{ boxShadow: "none" }}
                                onClick={() => navigate(`/dashboard`)}
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ boxShadow: "none" }}
                            >
                                Enregistrer les modifications
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}