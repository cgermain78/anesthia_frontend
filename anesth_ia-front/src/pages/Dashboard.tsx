import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Patient {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: string;
    operationDate: string;
}

export default function Dashboard() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    // Informations du compte connecté - à remplacer par vos vraies données
    const userInfo = {
        nom: "Moreau",
        prenom: "Dr. Jean",
        hopital: "Centre Hospitalier Universitaire de Lille",
        specialite: "Anesthésiste"
    };

    // Données de test - à remplacer par vos vraies données
    const [patients] = useState<Patient[]>([
        { id: 1, nom: "Dupont", prenom: "Jean", dateNaissance: "15/03/1980", operationDate: "12/10/2025" },
        { id: 2, nom: "Martin", prenom: "Sophie", dateNaissance: "22/07/1992", operationDate: "10/10/2025" },
        { id: 3, nom: "Bernard", prenom: "Pierre", dateNaissance: "05/11/1975", operationDate: "08/10/2025" },
        { id: 4, nom: "Dubois", prenom: "Marie", dateNaissance: "18/09/1988", operationDate: "05/10/2025" },
    ]);

    // Filtrer les patients selon la recherche
    const patientsFiltres = patients.filter(patient =>
        `${patient.prenom} ${patient.nom}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-4" style={{ minHeight: "82vh" }}>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center py-3">
                <h1 className="text-primary mb-0">medspot.</h1>
                <button
                    className="btn btn-outline-primary"
                    style={{ boxShadow: "none" }}
                    onClick={() => navigate('/parametres')}
                >
                    Mes paramètres
                </button>
            </div>

            {/* Carte de présentation du compte */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card shadow-sm" style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}>
                        <div className="card-body d-flex align-items-center py-3">
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white me-3"
                                style={{ width: "50px", height: "50px", fontSize: "20px", fontWeight: "bold" }}>
                                {userInfo.prenom.charAt(0)}{userInfo.nom.charAt(0)}
                            </div>
                            <div>
                                <h5 className="mb-0">{userInfo.prenom} {userInfo.nom}</h5>
                                <small className="text-muted">{userInfo.specialite} • {userInfo.hopital}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barre de recherche */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="input-group">
                        <span className="input-group-text bg-white" style={{ borderRight: "none" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Rechercher un patient..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ boxShadow: "none" }}
                        />
                    </div>
                </div>
            </div>

            {/* Liste des patients */}
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Mes patients ({patientsFiltres.length})</h4>
                        <button
                            className="btn btn-primary"
                            style={{ boxShadow: "none" }}
                            onClick={() => navigate('/ajouter-patient')}
                        >
                            + Nouveau patient
                        </button>
                    </div>

                    {/* Grille de patients */}
                    <div className="row g-3">
                        {patientsFiltres.length > 0 ? (
                            patientsFiltres.map(patient => (
                                <div key={patient.id} className="col-md-6 col-lg-4">
                                    <div
                                        className="card shadow-sm h-100"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => navigate(`/patient/${patient.id}`)}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">
                                                {patient.prenom} {patient.nom}
                                            </h5>
                                            <p className="card-text mb-1">
                                                <small className="text-muted">
                                                    <strong>Date de naissance:</strong> {patient.dateNaissance}
                                                </small>
                                            </p>
                                            <p className="card-text mb-0">
                                                <small className="text-muted">
                                                    <strong>Opération prévue:</strong> {patient.operationDate}
                                                </small>
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent border-top-0">
                                            <button
                                                className="btn btn-sm btn-outline-primary w-100"
                                                style={{ boxShadow: "none" }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate(`/patient/${patient.id}`);
                                                }}
                                            >
                                                Voir le dossier
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <p className="text-muted">Aucun patient trouvé</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}