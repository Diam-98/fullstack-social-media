import "./profile.css";
import userProfile from "../../assets/images/robot-avatar.png";
import { Link } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import PostCard from "../../components/cards/PostCard";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-top">
                <div className="left">
                    <img src={userProfile} alt="User profile" />
                    <div className="infos">
                        <h3>Diam Diallo</h3>
                        <span>@diamil</span>
                        <p>Ma superbe bio.</p>
                        <div className="stats">
                            <span>2 Posts</span>
                            <span>20 Connexions</span>
                            <span>25 Favoris</span>
                        </div>
                    </div>
                </div>
                <Link to="/home/profile/update" className="nav-link">
                    <EditOutlined />
                    <span>Modifier mon profile</span>
                </Link>
            </div>
            <h2>Mes posts</h2>
            <div className="post-list">
                <PostCard />
                <PostCard />
            </div>
        </div>
    );
};

export default Profile;
