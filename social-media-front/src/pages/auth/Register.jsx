import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="auth-box">
            <form>
                <div className="input-box">
                    <label htmlFor="fistName">Prenom</label>
                    <input type="text" placeholder="Prenom" id="fistName" />
                </div>
                <div className="input-box">
                    <label htmlFor="lastName">Nom</label>
                    <input type="text" placeholder="Nom" id="lastName" />
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="hello@gmail.com"
                        id="email"
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        placeholder="Donner votre mot de passe"
                        id="password"
                    />
                </div>
                <div className="input-box">
                    <button>Se connecter</button>
                    <span>
                        Deja un compte ? <Link to="/login">Se connecter</Link>{" "}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Register;
