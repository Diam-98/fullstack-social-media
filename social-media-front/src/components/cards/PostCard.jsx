import { Link } from "react-router-dom";
import "./postCard.css";
import postImage from "../../assets/images/jeux-video-1.jpeg";
import userImage from "../../assets/images/robot-avatar.png";
import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const PostCard = () => {
    return (
        <div className="post-card">
            <Link to="/home/post/detail/jeux-video">
                <img src={postImage} alt="post image" />
            </Link>
            <div className="post-infos">
                <div className="user">
                    <img src={userImage} alt="user profile" />
                    <span>John Doe</span>
                </div>
                <div className="post-reaction">
                    <Button className="post-button" icon={<HeartOutlined />}>
                        12
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
