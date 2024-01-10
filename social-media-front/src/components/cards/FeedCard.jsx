import { Link } from "react-router-dom";
import userProfile from "../../assets/images/robot-avatar.png";
import { EditOutlined, HeartOutlined } from "@ant-design/icons";
import game from "../../assets/images/jeux-video.jpg";
import { Button } from "antd";

const FeedCard = ({ post }) => {
    console.log(post?.image);
    return (
        <div className="feed-card">
            <div className="card-top">
                <div className="left-side">
                    <img
                        src={
                            post?.author?.image
                                ? post?.author?.image
                                : userProfile
                        }
                        alt="user profile"
                    />
                    <div className="author-info">
                        <h3>
                            {post?.author?.firstName} {post?.author?.lastName}
                        </h3>
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
                    <p>{post?.descriptiton}</p>
                </div>
                <img src={post?.image} alt="post image" />
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
