import { NavLink } from "react-router-dom"
export function Error(){
    return (
        <>
        <h1 className="">Argent Bank</h1>
          <section className="sign-in-content">
            <div>
                <h2>Erreur De Connexion</h2>
                <NavLink to='/' reloadDocument>
                    <p>{"Retour à la page d'accueil"}</p>
                </NavLink>
            </div>
          </section>

        </>
    )
}