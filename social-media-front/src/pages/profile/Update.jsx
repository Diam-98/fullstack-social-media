import "./profile.css";
import userProfile from "../../assets/images/robot-avatar.png";
import { Button } from "antd";

const Update = () => {
    return (
        <div className="profile">
            <h2>Modifier mon profile</h2>
            <div className="profile-form">
                <form>
                    <div className="exist-image">
                        <img src={userProfile} alt="user profile" />
                        <input type="file" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="firstname">Prenom</label>
                        <input
                            type="text"
                            placeholder="Prenom"
                            id="firstname"
                            name="firstName"
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="lastname">Nom</label>
                        <input
                            type="text"
                            placeholder="Nom"
                            id="lastname"
                            name="lastName"
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="description">Description</label>
                        <textarea
                            placeholder="Contenu de votre poste"
                            id="description"
                        ></textarea>
                    </div>

                    <div className="input-box">
                        <Button className="submit-button">Publier</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
