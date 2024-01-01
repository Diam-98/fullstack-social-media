import { Link } from "react-router-dom";
import userProfile from "../../assets/images/robot-avatar.png";
import { EditOutlined, HeartOutlined } from "@ant-design/icons";
import game from "../../assets/images/jeux-video.jpg";
import { Button } from "antd";

const FeedCard = () => {
    return (
        <div className="feed-card">
            <div className="card-top">
                <div className="left-side">
                    <img src={userProfile} alt="user profile" />
                    <div className="author-info">
                        <h3>Diam Diallo</h3>
                        <p>Il y'a 30 minutes</p>
                    </div>
                </div>
                <div className="right-side">
                    <Link to="/" className="link-icon">
                        <EditOutlined />
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <div className="post-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque architecto molestiae similique provident ab
                        accusamus magni sequi quo ipsum illum ex unde aliquam
                        quasi debitis nihil, nulla explicabo distinctio id.
                    </p>
                </div>
                <img src={game} alt="post image" />
            </div>
            <div className="card-bottom">
                <Button className="post-button" icon={<HeartOutlined />}>
                    0
                </Button>
            </div>
        </div>
    );
};

export default FeedCard;
