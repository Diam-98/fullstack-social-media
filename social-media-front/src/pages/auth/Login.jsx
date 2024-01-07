import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthAPI } from "../../api/AuthAPI";
import { Alert, Button } from "antd";
import { useAuth } from "../../context/AuthProvider";

const Login = () => {
    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [success, setSuccess] = useState(null);
    const { setUser, setToken } = useAuth();
    const navigate = useNavigate();

    const validateValues = (inputFields) => {
        let errors = {};
        if (!inputFields.email) {
            errors.email = "Donner l'addresse email";
        }

        if (!inputFields.password) {
            errors.password = "Donner le mot de passe";
        }

        return errors;
    };

    const handleChange = (e) => {
        setInputFields((prevFields) => ({
            ...prevFields,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };

    const finishSubmit = () => {
        AuthAPI.login(inputFields)
            .then((response) => {
                setUser(response.data.data.user);
                setToken(response.data.data.token);
                setSubmitting(false);
                setSuccess(true);
                navigate("/home");
            })
            .catch((err) => {
                setSuccess(false);
                setSubmitting(false);
            });
    };

    useEffect(() => {
        setIsFormValid(Object.keys(errors).length === 0 && submitting);
        if (isFormValid) {
            finishSubmit();
        } else {
            setSubmitting(false);
        }
    }, [errors, submitting]);

    return (
        <div className="auth-box">
            {success === false && (
                <Alert
                    message="Error"
                    description="Email ou mot de passe incorrect"
                    type="error"
                    showIcon
                />
            )}
            <form>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="hello@gmail.com"
                        id="email"
                        name="email"
                        value={inputFields.email}
                        onChange={handleChange}
                        style={{
                            border: errors.email ? "1px solid red" : null,
                        }}
                    />
                    {errors.email && (
                        <p style={{ color: "red" }}>Donner un email correct</p>
                    )}
                </div>
                <div className="input-box">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        placeholder="Donner votre mot de passe"
                        id="password"
                        name="password"
                        value={inputFields.password}
                        onChange={handleChange}
                        style={{
                            border: errors.password ? "1px solid red" : null,
                        }}
                    />
                    {errors.password && (
                        <p style={{ color: "red" }}>
                            Donner un mot de passe correct
                        </p>
                    )}
                </div>
                <div className="input-box">
                    <span>
                        Pas de compte ? <Link to="/register">S'inscrire</Link>{" "}
                    </span>
                </div>
            </form>
            <Button type="primary" onClick={handleSubmit} loading={submitting}>
                Se connecter
            </Button>
        </div>
    );
};

export default Login;
