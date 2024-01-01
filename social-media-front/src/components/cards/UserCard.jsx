import { Link } from "react-router-dom";
import userProfile from "../../assets/images/robot-avatar.png";
import { Button } from "antd";
import "./userCard.css";

const UserCard = () => {
    return (
        <div className="network-user">
            <Link to="/">
                <img src={userProfile} alt="Profile user" />
            </Link>
            <Link to="/" className="link">
                <span>John Doe</span>
            </Link>
            <p>@john</p>
            <Button className="connect-button">Ajouter</Button>
        </div>
    );
};

export default UserCard;
