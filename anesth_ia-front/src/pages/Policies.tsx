import { useNavigate } from 'react-router-dom';

export default function Policies() {
    const navigate = useNavigate();

    return (
        <div className="container py-4 "
            style={{ height: "95vh" }}>
            <button
                className="btn btn-outline-primary my-3"
                style={{ boxShadow: "none" }}
                onClick={() => navigate(-1)}
            >
                ← Retour
            </button>

            <div className="card shadow-sm">
                <div className="card-body p-5">
                    <h1 className="text-primary mb-4">Mentions légales</h1>

                    <section className="mb-4">
                        <h4 className="text-primary mb-3">Éditeur du site</h4>
                        <p><strong>Nom de la société :</strong> Medspot SAS</p>
                        <p><strong>Siège social :</strong> 123 Avenue de la Santé, 75014 Paris, France</p>
                        <p><strong>SIRET :</strong> 123 456 789 00012</p>
                        <p><strong>Capital social :</strong> 1 €</p>
                        <p><strong>Email :</strong> contact@medspot.com</p>
                        <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                    </section>

                    <section className="mb-4">
                        <h4 className="text-primary mb-3">Hébergeur</h4>
                        <p><strong>Nom :</strong> OVH SAS</p>
                        <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
                        <p><strong>Téléphone :</strong> 1007</p>
                    </section>

                    <section className="mb-4">
                        <h4 className="text-primary mb-3">Propriété intellectuelle</h4>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p>
                            La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit est formellement interdite
                            sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h4 className="text-primary mb-3">Protection des données personnelles</h4>
                        <p>
                            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD),
                            vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                        </p>
                        <p>
                            Pour exercer ces droits, vous pouvez nous contacter à l'adresse : <strong>rgpd@medspot.com</strong>
                        </p>
                        <p>
                            Les données collectées sur ce site sont destinées exclusivement à un usage interne et ne seront en aucun cas cédées à des tiers.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h4 className="text-primary mb-3">Cookies</h4>
                        <p>
                            Le site medspot utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
                            En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h4 className="text-primary mb-3">Limitation de responsabilité</h4>
                        <p>
                            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour,
                            mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                        </p>
                        <p>
                            Medspot ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur,
                            lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées,
                            soit de l'apparition d'un bug ou d'une incompatibilité.
                        </p>
                    </section>

                    <p className="text-muted small mt-5">
                        <strong>Date de dernière mise à jour :</strong> 17 octobre 2025
                    </p>
                </div>
            </div>
        </div>
    );
}