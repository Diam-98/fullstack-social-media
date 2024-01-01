import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="auth-box">
            <form>
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
                        Pas de compte ? <Link to="/register">S'inscrire</Link>{" "}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;
