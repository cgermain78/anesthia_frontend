import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Form {
    id: number;
    date: string;
    type: string;
    status: 'completed' | 'in_progress' | 'to_fill';
    scheduledOperation: string;
    patientId: number;
    patientEmail: string;
    patientSurname: string;
    patientName: string;
}

export default function FormSummary() {
    const navigate = useNavigate();
    const { id } = useParams();

    // Form data - replace with your real data
    const form: Form = {
        id: Number(id),
        date: "20/11/2025",
        type: "Consultation pré-anesthésique",
        status: "to_fill",
        scheduledOperation: "25/11/2025 - Chirurgie abdominale",
        patientId: 1,
        patientEmail: "jean.dupont@email.com",
        patientSurname: "Dupont",
        patientName: "Jean"
    };

    const [emailRecipient, setEmailRecipient] = useState(form.patientEmail);
    const [emailSent, setEmailSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailRecipient(e.target.value);
    };

    const handleSendEmail = () => {
        // Email sending logic here (API call)
        console.log('Email sent to:', emailRecipient);
        setEmailSent(true);

        setTimeout(() => {
            setEmailSent(false);
        }, 1000);
    };

    const handleFillForm = () => {
        // Navigate to form filling page
        navigate(`/form/${id}/fill`);
    };

    // If form is not completed
    if (form.status !== 'completed') {
        return (
            <div className="container py-4">
                {/* Back button */}
                <button
                    className="btn btn-outline-primary my-3"
                    style={{ boxShadow: "none" }}
                    onClick={() => navigate(`/patient/${form.patientId}`)}
                >
                    ← Retour au dossier patient
                </button>

                <div className="row j">
                    <div className="">
                        {/* Form information */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-warning text-white">
                                <h4 className="mb-0">Formulaire en attente</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="text-primary mb-3">{form.type}</h5>
                                <div className="mb-3">
                                    <p className="mb-2">
                                        <strong>Patient :</strong> {form.patientName} {form.patientSurname}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Email :</strong> {form.patientEmail}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Date du formulaire :</strong> {form.date}
                                    </p>
                                    <p className="mb-0">
                                        <strong>Opération prévue :</strong> {form.scheduledOperation}
                                    </p>
                                </div>
                                <div className="alert alert-warning mb-0" role="alert">
                                    <strong>⚠️ Ce formulaire n'a pas encore été rempli</strong>
                                </div>
                            </div>
                        </div>

                        {/* Options to fill the form */}
                        <div className="card shadow-sm">
                            <div className="card-body p-4">
                                <h5 className="mb-4">Comment souhaitez-vous procéder ?</h5>

                                {/* Option 1: Send by email */}
                                <div className="card mb-3" style={{ border: "2px solid #dee2e6" }}>
                                    <div className="card-body">
                                        <h6 className="text-primary mb-2">
                                            📧 Envoyer le lien au patient
                                        </h6>
                                        <p className="text-muted mb-3">
                                            Le patient recevra un email avec un lien sécurisé pour remplir le formulaire à distance.
                                        </p>

                                        <div className="row">
                                            <div className="col-md-8 mb-2">
                                                <label htmlFor="email" className="form-label">Adresse email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    value={emailRecipient}
                                                    onChange={handleChange}
                                                    placeholder="email@exemple.com"
                                                    style={{ boxShadow: "none" }}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-4 mb-2 d-flex align-items-end">
                                                <button
                                                    className="btn btn-primary w-100"
                                                    style={{ boxShadow: "none" }}
                                                    onClick={handleSendEmail}
                                                    disabled={!emailRecipient || emailSent}
                                                >
                                                    {emailSent ? '✓ Envoyé' : 'Envoyer'}
                                                </button>
                                            </div>
                                        </div>

                                        {emailSent && (
                                            <p className="text-success mt-2 mb-0">
                                                <small>✓ Le lien a été envoyé à {emailRecipient}</small>
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Option 2: Fill now */}
                                <div className="card" style={{ border: "2px solid #dee2e6" }}>
                                    <div className="card-body">
                                        <h6 className="text-primary mb-2">
                                            ✏️ Remplir le formulaire maintenant
                                        </h6>
                                        <p className="text-muted mb-3">
                                            Remplissez le formulaire directement en consultation avec le patient.
                                        </p>
                                        <button
                                            className="btn btn-outline-primary"
                                            style={{ boxShadow: "none" }}
                                            onClick={handleFillForm}
                                        >
                                            Commencer le formulaire
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // If form is completed - placeholder for now
    return (
        <div className="container py-4">
            {/* Back button */}
            <button
                className="btn btn-outline-primary mb-4"
                style={{ boxShadow: "none" }}
                onClick={() => navigate(`/patient/${form.patientId}`)}
            >
                ← Retour au dossier patient
            </button>

            <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                    <h4 className="mb-0">Formulaire complété</h4>
                </div>
                <div className="card-body">
                    <h5 className="text-primary mb-3">{form.type}</h5>
                    <div className="mb-3">
                        <p className="mb-2">
                            <strong>Patient :</strong> {form.patientName} {form.patientSurname}
                        </p>
                        <p className="mb-2">
                            <strong>Date :</strong> {form.date}
                        </p>
                        <p className="mb-0">
                            <strong>Opération prévue :</strong> {form.scheduledOperation}
                        </p>
                    </div>

                    <hr />

                    {/* Completed form content will go here */}
                    <div className="alert alert-info">
                        <strong>📋 Affichage du formulaire complété à venir</strong>
                        <p className="mb-0 mt-2">
                            Les réponses du patient et les informations pré-anesthésiques s'afficheront ici.
                        </p>
                    </div>

                    <div className="mt-4">
                        <button
                            className="btn btn-outline-primary me-2"
                            style={{ boxShadow: "none" }}
                            onClick={() => navigate(`/form/${id}/edit`)}
                        >
                            Modifier le formulaire
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            style={{ boxShadow: "none" }}
                            onClick={() => window.print()}
                        >
                            Imprimer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}