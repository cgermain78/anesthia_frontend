import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Parameters() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        titre: 'Dr.',
        specialite: 'Anesthésiste',
        nom: 'Moreau',
        prenom: 'Eléna',
        email: 'elena.moreau@medspot.com',
        ancienPassword: '',
        nouveauPassword: '',
        confirmerPassword: ''
    });

    const [showPasswordSection, setShowPasswordSection] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation du mot de passe si la section est affichée
        if (showPasswordSection) {
            if (formData.nouveauPassword !== formData.confirmerPassword) {
                setMessage({ type: 'danger', text: 'Les mots de passe ne correspondent pas' });
                return;
            }
            if (formData.nouveauPassword && !formData.ancienPassword) {
                setMessage({ type: 'danger', text: 'Veuillez entrer votre ancien mot de passe' });
                return;
            }
        }

        // Logique de sauvegarde ici
        console.log('Données à sauvegarder:', formData);
        setMessage({ type: 'success', text: 'Paramètres sauvegardés avec succès !' });

        // Réinitialiser les champs de mot de passe
        setFormData(prev => ({
            ...prev,
            ancienPassword: '',
            nouveauPassword: '',
            confirmerPassword: ''
        }));
    };

    return (
        <div className="container py-4" style={{}}>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center py-3">
                <h2 className="text-primary mb-0">Mes paramètres</h2>
                <button
                    className="btn btn-outline-primary"
                    style={{ boxShadow: "none" }}
                    onClick={() => navigate('/dashboard')}
                >
                    ← Retour au tableau de bord
                </button>
            </div>

            {/* Message de confirmation */}
            {message.text && (
                <div className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
                    {message.text}
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setMessage({ type: '', text: '' })}
                    ></button>
                </div>
            )}

            {/* Formulaire */}
            <div className="card shadow-sm">
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                        {/* Informations professionnelles */}
                        <h5 className="mb-3 pb-2 border-bottom">Informations professionnelles</h5>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="titre" className="form-label">Titre</label>
                                <select
                                    className="form-select"
                                    id="titre"
                                    name="titre"
                                    value={formData.titre}
                                    onChange={handleChange}
                                    style={{ boxShadow: "none" }}
                                >
                                    <option value="">Aucun</option>
                                    <option value="Dr.">Dr.</option>
                                    <option value="Pr.">Pr.</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="specialite" className="form-label">Spécialité</label>
                                <select
                                    className="form-select"
                                    id="specialite"
                                    name="specialite"
                                    value={formData.specialite}
                                    onChange={handleChange}
                                    style={{ boxShadow: "none" }}
                                >
                                    <option value="Anesthésiste">Anesthésiste</option>
                                    <option value="Chirurgien">Chirurgien</option>
                                    <option value="Cardiologue">Cardiologue</option>
                                    <option value="Pédiatre">Pédiatre</option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>
                        </div>

                        {/* Informations personnelles */}
                        <h5 className="mb-3 pb-2 border-bottom mt-4">Informations personnelles</h5>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="nom" className="form-label">Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    placeholder="Votre nom"
                                    style={{ boxShadow: "none" }}
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="prenom" className="form-label">Prénom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="prenom"
                                    name="prenom"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    placeholder="Votre prénom"
                                    style={{ boxShadow: "none" }}
                                    required
                                />
                            </div>
                        </div>



                        {/* Section mot de passe */}
                        <h5 className="mb-3 pb-2 border-bottom mt-4">Sécurité</h5>

                        {!showPasswordSection ? (
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                style={{ boxShadow: "none" }}
                                onClick={() => setShowPasswordSection(true)}
                            >
                                Modifier mon mot de passe
                            </button>
                        ) : (
                            <>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="ancienPassword"
                                        name="ancienPassword"
                                        value={formData.ancienPassword}
                                        onChange={handleChange}
                                        placeholder="Votre ancien mot de passe"
                                        style={{ boxShadow: "none" }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="nouveauPassword"
                                        name="nouveauPassword"
                                        value={formData.nouveauPassword}
                                        onChange={handleChange}
                                        placeholder="Votre nouveau mot de passe"
                                        style={{ boxShadow: "none" }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmerPassword"
                                        name="confirmerPassword"
                                        value={formData.confirmerPassword}
                                        onChange={handleChange}
                                        placeholder="Confirmez votre nouveau mot de passe"
                                        style={{ boxShadow: "none" }}
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-outline-secondary me-2"
                                    style={{ boxShadow: "none" }}
                                    onClick={() => {
                                        setShowPasswordSection(false);
                                        setFormData(prev => ({
                                            ...prev,
                                            ancienPassword: '',
                                            nouveauPassword: '',
                                            confirmerPassword: ''
                                        }));
                                    }}
                                >
                                    Annuler
                                </button>
                            </>
                        )}

                        {/* Boutons d'action */}
                        <div className="mt-4 pt-3 border-top d-flex justify-content-end gap-2">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                style={{ boxShadow: "none" }}
                                onClick={() => navigate('/dashboard')}
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ boxShadow: "none" }}
                            >
                                Sauvegarder les modifications
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Section danger */}
            <div className="card mt-4  d-flex align-items-center"
                style={{ border: "none" }}>

                <button
                    className=" btn btn-outline-danger"
                    style={{ boxShadow: "none" }}
                    onClick={() => {
                        if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
                            console.log('Suppression du compte');
                        }
                    }}
                >
                    Supprimer mon compte
                </button>
            </div>
        </div>
    );
}