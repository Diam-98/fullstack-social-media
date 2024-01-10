import { Link } from "react-router-dom";
import "./postCard.css";
import userImage from "../../assets/images/robot-avatar.png";
import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            {post?.image && (
                <Link to="/home/post/detail/jeux-video">
                    <img src={post?.image} alt="post image" />
                </Link>
            )}
            <div className="post-infos">
                <div className="user">
                    <img
                        src={
                            post?.author?.image
                                ? post?.author?.image
                                : userImage
                        }
                        alt="user profile"
                    />
                    <span>
                        {post?.author?.firstName} {post?.author?.lastName}
                    </span>
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
