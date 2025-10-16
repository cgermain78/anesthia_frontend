export default function Footer() {
    return (
        <footer className="mt-5 pt-4 pb-3">
            <div className="container">

                <ul className="d-flex list-unstyled justify-content-center align-items-center gap-3 mb-0">
                    <li><a href="/contact" className="text-muted text-decoration-none small">Contact</a></li>
                    <li><a href="/mentions-legales" className="text-muted text-decoration-none small">Mentions légales</a></li>
                </ul>
            </div>
            <div className="row mt-1">
                <div className="col-12 text-center">
                    <p className="text-muted small mb-0">
                        © 2025 medspot. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer >
    )
}