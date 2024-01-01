import "./createPost";
import postImage from "../../assets/images/jeux-video.jpg";
import userProfile from "../../assets/images/robot-avatar.png";
import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const PostDetail = () => {
    return (
        <div className="post-detail">
            <div className="post-container">
                <div className="left">
                    <img src={postImage} alt="Post Image" />
                </div>

                <div className="right">
                    <div className="author">
                        <div className="left">
                            <img src={userProfile} alt="user profile" />
                            <div className="infos">
                                <span>Diam Diallo</span>
                                <p>Il y'a 3jours</p>
                            </div>
                        </div>
                        <Button
                            className="like-button"
                            icon={<HeartOutlined />}
                        >
                            15
                        </Button>
                    </div>
                    <hr />
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
