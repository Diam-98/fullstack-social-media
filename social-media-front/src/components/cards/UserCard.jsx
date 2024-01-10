import { Link } from "react-router-dom";
import userProfile from "../../assets/images/robot-avatar.png";
import { Button } from "antd";
import "./userCard.css";

const UserCard = ({ user }) => {
    return (
        <div className="network-user">
            <Link to="/">
                <img
                    src={user?.image ? user?.image : userProfile}
                    alt={user?.firstName}
                />
            </Link>
            <Link to="/" className="link">
                <span>
                    {user?.firstName} {user?.lastName}
                </span>
            </Link>
            <p>@{user?.firstName}</p>
            <Button className="connect-button">Ajouter</Button>
        </div>
    );
};

export default UserCard;
