import { Button } from "antd";
import "./createPost.css";

const CreatePost = () => {
    return (
        <div className="create-post">
            <h2>Creer un nouveau post</h2>
            <div className="form">
                <form>
                    <div className="input-box">
                        <label htmlFor="description">Description</label>
                        <textarea
                            placeholder="Contenu de votre poste"
                            id="description"
                        ></textarea>
                    </div>
                    <div className="input-box">
                        <input type="file"></input>
                    </div>

                    <div className="input-box">
                        <Button className="submit-button">Publier</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
