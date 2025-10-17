import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Formulaire {
    id: number;
    date: string;
    type: string;
    statut: 'complété' | 'en cours' | 'à remplir';
    operationPrevue: string;
}

export default function Patient() {
    const navigate = useNavigate();
    const { id } = useParams();

    // Données du patient - à remplacer par vos vraies données
    const patient = {
        id: id,
        nom: "Dupont",
        prenom: "Jean",
        dateNaissance: "15/03/1980",
        age: 44,
        email: "jean.dupont@email.com",
        telephone: "06 12 34 56 78",
        adresse: "12 rue de la Santé, 75014 Paris",
        numeroSecu: "1 80 03 75 123 456 78",
        medecin: "Dr. Martin",
        allergies: "Pénicilline, Latex",
        groupeSanguin: "A+"
    };

    // Formulaires pré-opératoires - à remplacer par vos vraies données
    const [formulaires] = useState<Formulaire[]>([
        {
            id: 1,
            date: "12/10/2025",
            type: "Consultation pré-anesthésique",
            statut: "complété",
            operationPrevue: "15/10/2025 - Chirurgie orthopédique"
        },
        {
            id: 2,
            date: "20/11/2025",
            type: "Consultation pré-anesthésique",
            statut: "à remplir",
            operationPrevue: "25/11/2025 - Chirurgie abdominale"
        },
        {
            id: 3,
            date: "15/11/2025",
            type: "Consultation pré-anesthésique",
            statut: "à remplir",
            operationPrevue: "25/11/2025 - Chirurgie abdominale"
        }
    ]);

    const getStatutColor = (statut: string) => {
        switch (statut) {
            case 'complété': return 'success';
            case 'en cours': return 'warning';
            case 'à remplir': return 'danger';
            default: return 'secondary';
        }
    };

    return (
        <div className="container py-4">
            {/* Bouton retour */}
            <button
                className="btn btn-outline-primary my-3"
                style={{ boxShadow: "none" }}
                onClick={() => navigate('/dashboard')}
            >
                ← Retour au tableau de bord
            </button>

            {/* Informations du patient */}
            <div className="card shadow-sm mb-4">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">{patient.prenom} {patient.nom}</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <h5 className="text-primary mb-3">Informations personnelles</h5>
                            <p className="mb-2">
                                <strong>Date de naissance:</strong> {patient.dateNaissance} ({patient.age} ans)
                            </p>
                            <p className="mb-2">
                                <strong>Email:</strong> {patient.email}
                            </p>
                            <p className="mb-2">
                                <strong>Téléphone:</strong> {patient.telephone}
                            </p>
                            <p className="mb-2">
                                <strong>Adresse:</strong> {patient.adresse}
                            </p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <h5 className="text-primary mb-3">Informations médicales</h5>
                            <p className="mb-2">
                                <strong>Groupe sanguin:</strong> {patient.groupeSanguin}
                            </p>
                            <p className="mb-2">
                                <strong>Allergies:</strong>
                                <span className="badge bg-danger ms-2">{patient.allergies}</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button
                            className="btn btn-outline-primary me-2"
                            style={{ boxShadow: "none" }}
                            onClick={() => navigate(`/patient/${id}/parameters`)}
                        >
                            Modifier les informations
                        </button>
                        <button
                            className="btn btn-primary"
                            style={{ boxShadow: "none" }}
                            onClick={() => navigate(`/patient/${id}/nouveau-formulaire`)}
                        >
                            + Nouveau formulaire
                        </button>
                    </div>
                </div>
            </div>

            {/* Formulaires pré-opératoires */}
            <div className="card shadow-sm">
                <div className="card-header bg-white">
                    <h4 className="mb-0">Formulaires pré-opératoires</h4>
                </div>
                <div className="card-body">
                    {formulaires.length > 0 ? (
                        <div className="list-group">
                            {formulaires.sort((a, b) => {
                                const dateA = new Date(a.date.split('/').reverse().join('-'));
                                const dateB = new Date(b.date.split('/').reverse().join('-'));
                                return dateB.getTime() - dateA.getTime();
                            }).map(formulaire => (
                                <div
                                    key={formulaire.id}
                                    className="list-group-item list-group-item-action"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate(`/form/${formulaire.id}`)}
                                >
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">{formulaire.type}</h6>
                                            <p className="mb-1 text-muted small">
                                                <strong>Date:</strong> {formulaire.date}
                                            </p>
                                            <p className="mb-1 text-muted small">
                                                <strong>Opération prévue:</strong> {formulaire.operationPrevue}
                                            </p>
                                        </div>
                                        <span className={`badge bg-${getStatutColor(formulaire.statut)}`}>
                                            {formulaire.statut}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <p className="text-muted">Aucun formulaire pré-opératoire</p>
                            <button
                                className="btn btn-primary mt-3"
                                style={{ boxShadow: "none" }}
                                onClick={() => navigate(`/patient/${id}/nouveau-formulaire`)}
                            >
                                Créer le premier formulaire
                            </button>
                        </div>
                    )}
                </div>

            </div>

            {/* ajouter condition : si est dans les patients remplacer par supprimer de mes patients */}
            <div className="card flex-row justify-content-center gap-3 align-items-center"
                style={{ border: "none" }}>
                <button
                    className="btn btn-primary mt-3 "
                    style={{ boxShadow: "none" }}
                    onClick={() => navigate(`/dashboard`)}
                >
                    Ajouter à mes patients
                </button>

            </div>
        </div>
    );
}