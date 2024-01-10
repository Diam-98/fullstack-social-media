import "./profile.css";
import userProfile from "../../assets/images/robot-avatar.png";
import { Button, Alert } from "antd";
import { useEffect, useState } from "react";
import { UserAPI } from "../../api/UserAPI";

const Update = () => {
    const [inputFields, setInputFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        bio: "",
        image: null,
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [success, setSuccess] = useState(null);

    const getUser = () => {
        UserAPI.currentUser()
            .then((response) => {
                console.log(response.data.data);
                setInputFields(response.data.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

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

        return errors;
    };

    const handleChange = (e) => {
        setInputFields((prevFields) => ({
            ...prevFields,
            [e.target.name]: e.target.value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setInputFields((prevFields) => ({
                    ...prevFields,
                    image: reader.result,
                }));
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        console.log("submittig");
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };

    const finishSubmit = () => {
        UserAPI.profile(inputFields)
            .then((response) => {
                console.log(response.data);
                setSubmitting(false);
                setSuccess(true);
            })
            .catch((err) => {
                console.log(err.response);
                setSuccess(false);
                setSubmitting(false);
            });
    };

    useEffect(() => {
        getUser();
        setIsFormValid(Object.keys(errors).length === 0 && submitting);
        if (isFormValid) {
            finishSubmit();
        } else {
            setSubmitting(false);
        }
    }, [errors, submitting]);

    return (
        <div className="profile">
            <h2>Modifier mon profile</h2>
            {success === false && (
                <Alert
                    message="Error"
                    description="Echec de modification de profile"
                    type="error"
                    showIcon
                />
            )}

            {success === true && (
                <Alert
                    message="Succes"
                    description="Profile modifie avec succes"
                    type="success"
                    showIcon
                />
            )}
            <div className="profile-form">
                <form>
                    <div className="exist-image">
                        <img
                            src={
                                inputFields.image
                                    ? inputFields.image
                                    : userProfile
                            }
                            alt="user profile"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="firstname">Prenom</label>
                        <input
                            type="text"
                            placeholder="Prenom"
                            id="firstname"
                            name="firstName"
                            onChange={handleChange}
                            value={inputFields.firstName}
                        />
                        {errors.firstName && (
                            <p style={{ color: "red" }}>
                                Renseigner votre prenom
                            </p>
                        )}
                    </div>
                    <div className="input-box">
                        <label htmlFor="lastname">Nom</label>
                        <input
                            type="text"
                            placeholder="Nom"
                            id="lastname"
                            name="lastName"
                            onChange={handleChange}
                            value={inputFields.lastName}
                        />
                        {errors.lastName && (
                            <p style={{ color: "red" }}>Renseigner votre nom</p>
                        )}
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={inputFields.email}
                        />
                        {errors.email && (
                            <p style={{ color: "red" }}>
                                Renseigner votre email
                            </p>
                        )}
                    </div>
                    <div className="input-box">
                        <label htmlFor="description">Description</label>
                        <textarea
                            placeholder="Contenu de votre poste"
                            id="description"
                            name="bio"
                            onChange={handleChange}
                            value={inputFields.bio}
                        ></textarea>
                    </div>

                    <div className="input-box">
                        <Button
                            className="submit-button"
                            onClick={handleSubmit}
                        >
                            Publier
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
