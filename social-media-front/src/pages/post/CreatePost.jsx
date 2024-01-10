import { Alert, Button } from "antd";
import "./createPost.css";
import { useEffect, useState } from "react";
import { PostAPI } from "../../api/PostAPI";

const CreatePost = () => {
    const [inputFields, setInputFields] = useState({
        description: "",
        image: null,
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [success, setSuccess] = useState(null);

    const validateValues = (inputFields) => {
        let errors = {};
        if (!inputFields.description) {
            errors.email = "Donner une description valide";
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
        setInputFields((prevFields) => ({
            ...prevFields,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = (event) => {
        console.log("submittig");
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };

    const finishSubmit = () => {
        const formData = new FormData();

        formData.append("description", inputFields.description);
        formData.append("image", inputFields.image);

        PostAPI.addPost(formData)
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
        setIsFormValid(Object.keys(errors).length === 0 && submitting);
        if (isFormValid) {
            finishSubmit();
        } else {
            setSubmitting(false);
        }
    }, [errors, submitting]);

    return (
        <div className="create-post">
            <h2>Creer un nouveau post</h2>
            {success === false && (
                <Alert
                    message="Error"
                    description="Echec de creation de post"
                    type="error"
                    showIcon
                />
            )}

            {success === true && (
                <Alert
                    message="Succes"
                    description="Post cree avec succes."
                    type="success"
                    showIcon
                />
            )}
            <div className="form">
                <form>
                    <div className="input-box">
                        <label htmlFor="description">Description</label>
                        <textarea
                            placeholder="Contenu de votre poste"
                            id="description"
                            name="description"
                            value={inputFields.description}
                            onChange={handleChange}
                            style={{
                                border: errors.description
                                    ? "1px solid red"
                                    : null,
                            }}
                        ></textarea>
                    </div>
                    <div className="input-box">
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            onChange={handleImageChange}
                        ></input>
                    </div>

                    <div className="input-box">
                        <Button
                            onClick={handleSubmit}
                            className="submit-button"
                        >
                            Publier
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
