import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { Button } from "antd";
import { UserAPI } from "../../api/UserAPI";

const Register = () => {
    const [inputFields, setInputFields] = useState({
        firstName: "",
        lastName: "",
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

        if (!inputFields.firstName) {
            errors.firstName = "Donner votre prenom";
        }

        if (!inputFields.lastName) {
            errors.lastName = "Donner votre nom";
        }

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
        UserAPI.register(inputFields)
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
            <form>
                <div className="input-box">
                    <label htmlFor="fistName">Prenom</label>
                    <input
                        type="text"
                        placeholder="Prenom"
                        id="fistName"
                        name="firstName"
                        value={inputFields.firstName}
                        onChange={handleChange}
                        style={{
                            border: errors.firstName ? "1px solid red" : null,
                        }}
                    />
                    {errors.firstName && (
                        <p style={{ color: "red" }}>Renseigner votre nom</p>
                    )}
                </div>
                <div className="input-box">
                    <label htmlFor="lastName">Nom</label>
                    <input
                        type="text"
                        placeholder="Nom"
                        id="lastName"
                        name="lastName"
                        value={inputFields.lastName}
                        onChange={handleChange}
                        style={{
                            border: errors.lastName ? "1px solid red" : null,
                        }}
                    />
                    {errors.lastName && (
                        <p style={{ color: "red" }}>Renseigner votre prenom</p>
                    )}
                </div>
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
                        <p style={{ color: "red" }}>Renseigner votre email</p>
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
                            Renseigner votre mot de passe
                        </p>
                    )}
                </div>
            </form>
            <div className="input-box">
                <Button
                    type="primary"
                    onClick={handleSubmit}
                    loading={submitting}
                >
                    S'inscrire
                </Button>
                <span>
                    Deja un compte ? <Link to="/login">Se connecter</Link>{" "}
                </span>
            </div>
        </div>
    );
};

export default Register;
