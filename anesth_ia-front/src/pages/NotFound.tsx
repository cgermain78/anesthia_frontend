import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1 className="text-primary mb-0" style={{ fontSize: "50px" }}>404</h1>
                <h2 className="mb-3">Page introuvable</h2>
                <p className="text-muted mb-4">
                    Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>
                <div className="d-flex gap-2 justify-content-center">
                    <button
                        className="btn btn-primary"
                        style={{ boxShadow: "none" }}
                        onClick={() => navigate('/dashboard')}
                    >
                        Retour au tableau de bord
                    </button>
                    <button
                        className="btn btn-outline-primary"
                        style={{ boxShadow: "none" }}
                        onClick={() => navigate(-1)}
                    >
                        Page précédente
                    </button>
                </div>
            </div>
        </div>
    );
}