import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Patient {
    id: number;
    surname: string;
    name: string;
    dateNaissance: string;
    operationDate: string;
}

export default function Dashboard() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Informations du compte connecté - à remplacer par vos vraies données
    const userInfo = {
        surname: "Moreau",
        name: "Eléna",
        title: "Dr.",
        hospital: "Centre Hospitalier Universitaire de Lille",
        specialty: "Anesthésiste"
    };

    // Données de test - à remplacer par vos vraies données
    const [patients] = useState<Patient[]>([
        { id: 1, surname: "Dupont", name: "Jean", dateNaissance: "15/03/1980", operationDate: "12/10/2025" },
        { id: 2, surname: "Martin", name: "Sophie", dateNaissance: "22/07/1992", operationDate: "10/10/2025" },
        { id: 3, surname: "Bernard", name: "Pierre", dateNaissance: "05/11/1975", operationDate: "08/10/2025" },
        { id: 4, surname: "Dubois", name: "Marie", dateNaissance: "18/09/1988", operationDate: "05/10/2025" },
        { id: 5, surname: "Leblanc", name: "Thomas", dateNaissance: "10/05/1985", operationDate: "15/10/2025" },
        { id: 6, surname: "Moreau", name: "Claire", dateNaissance: "22/11/1990", operationDate: "20/10/2025" },
        { id: 7, surname: "Simon", name: "Lucas", dateNaissance: "03/07/1978", operationDate: "25/10/2025" },
        { id: 4, surname: "Dubois", name: "Marie", dateNaissance: "18/09/1988", operationDate: "05/10/2025" },
        { id: 5, surname: "Leblanc", name: "Thomas", dateNaissance: "10/05/1985", operationDate: "15/10/2025" },
        { id: 6, surname: "Moreau", name: "Claire", dateNaissance: "22/11/1990", operationDate: "20/10/2025" },
        { id: 7, surname: "Simon", name: "Lucas", dateNaissance: "03/07/1978", operationDate: "25/10/2025" },
        { id: 4, surname: "Dubois", name: "Marie", dateNaissance: "18/09/1988", operationDate: "05/10/2025" },
        { id: 5, surname: "Leblanc", name: "Thomas", dateNaissance: "10/05/1985", operationDate: "15/10/2025" },
        { id: 6, surname: "Moreau", name: "Claire", dateNaissance: "22/11/1990", operationDate: "20/10/2025" },
        { id: 7, surname: "Simon", name: "Lucas", dateNaissance: "03/07/1978", operationDate: "25/10/2025" },
    ]);


    // Filtrer les patients pour les suggestions
    const suggestionsFiltrees = searchTerm.length > 0
        ? patients.filter(patient =>
            `${patient.name} ${patient.surname}`.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    // Filtrer les patients pour l'affichage principal
    const patientsFiltres = patients;

    // Fermer les suggestions quand on clique ailleurs
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setShowSuggestions(true);
    };

    const handleSelectPatient = (patient: Patient) => {
        setSearchTerm("");
        setShowSuggestions(false);
        navigate(`/patient/${patient.id}`);
    };

    const handleCreateNewPatient = () => {
        setSearchTerm("");
        setShowSuggestions(false);
        navigate('/patient/create', { state: { searchTerm } });
    };

    return (
        <div className="container py-3" style={{ height: "89vh", display: "flex", flexDirection: "column" }}>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center py-3">
                <h1 className="text-primary mb-0">medspot.</h1>
                <button
                    className="btn btn-outline-primary"
                    style={{ boxShadow: "none" }}
                    onClick={() => navigate('/parameters')}
                >
                    Mes paramètres
                </button>
            </div>

            {/* Carte de présentation du compte */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card shadow-sm bg-body-tertiary border">
                        <div className="card-body d-flex align-items-center py-3">
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white me-3"
                                style={{ width: "50px", height: "50px", fontSize: "20px", fontWeight: "bold" }}>
                                {userInfo.name.charAt(0)}{userInfo.surname.charAt(0)}
                            </div>
                            <div>
                                <h5 className="mb-0">{userInfo.title} {userInfo.name} {userInfo.surname}</h5>
                                <small className="text-muted">{userInfo.specialty} • {userInfo.hospital}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barre de recherche avec suggestions */}
            <div className="row mb-4">
                <div className="col-12">
                    <div ref={searchRef} style={{ position: "relative" }}>
                        <div className="input-group">
                            <span className="input-group-text" style={{ borderRight: "none" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Rechercher un patient..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onFocus={() => setShowSuggestions(true)}
                                style={{ boxShadow: "none" }}
                            />
                        </div>

                        {/* Menu de suggestions */}
                        {showSuggestions && searchTerm.length > 0 && (
                            <div
                                className="card shadow position-absolute w-100"
                                style={{
                                    top: "100%",
                                    zIndex: 1000,
                                    maxHeight: "400px",
                                    overflowY: "auto",
                                    marginTop: "5px"
                                }}
                            >
                                <div className="list-group list-group-flush">
                                    {suggestionsFiltrees.length > 0 ? (
                                        <>
                                            {suggestionsFiltrees.map(patient => (
                                                <button
                                                    key={patient.id}
                                                    className="list-group-item list-group-item-action text-start"
                                                    onClick={() => handleSelectPatient(patient)}
                                                    style={{ cursor: "pointer", border: "none" }}
                                                >
                                                    <div className="d-flex justify-content-between align-items-start">
                                                        <div>
                                                            <strong>{patient.name} {patient.surname}</strong>
                                                            <br />
                                                            <small className="text-muted">
                                                                Né(e) le {patient.dateNaissance}
                                                            </small>
                                                        </div>
                                                        <small className="text-muted">
                                                            {patient.operationDate}
                                                        </small>
                                                    </div>
                                                </button>
                                            ))}
                                        </>
                                    ) : (
                                        <div className="list-group-item text-center py-3">
                                            <p className="text-muted mb-2">Aucun patient trouvé pour "{searchTerm}"</p>
                                            <button
                                                className="btn btn-primary btn-sm"
                                                style={{ boxShadow: "none" }}
                                                onClick={handleCreateNewPatient}
                                            >
                                                + Créer un nouveau patient
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* En-tête de la liste */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4>Mes patients ({patientsFiltres.length})</h4>

            </div>

            {/* Zone scrollable pour les patients */}
            <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
                <div className="row g-3">
                    {patientsFiltres.map(patient => (
                        <div key={patient.id} className="col-md-6 col-lg-4">
                            <div
                                className="card shadow-sm h-100"
                                style={{ cursor: "pointer" }}
                                onClick={() => navigate(`/patient/${patient.id}`)}
                            >
                                <div className="card-body">
                                    <h5 className="card-title text-primary">
                                        {patient.name} {patient.surname}
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
                    ))}
                </div>
            </div>
        </div>
    );
}