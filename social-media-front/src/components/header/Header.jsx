import "./header.css";
import userProfile from "../../assets/images/robot-avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { UserAPI } from "../../api/UserAPI";

const Header = ({ user }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        UserAPI.logout("/logout")
            .then((response) => {
                navigate("/login", { replace: true });
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return (
        <div className="header">
            <div className="logo">
                <span>Connector.</span>
            </div>
            <div className="right-side">
                <Link to="/home/profile" className="profile">
                    <img src={userProfile} alt="user profile" />
                    <div className="user-infos">
                        <span>
                            {user?.firstName} {user?.lastName}
                        </span>
                        <p>@{user?.firstName}</p>
                    </div>
                </Link>
                <Button className="logout" onClick={handleLogout}>
                    <LogoutOutlined />
                </Button>
            </div>
        </div>
    );
};

export default Header;
