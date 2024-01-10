import { useEffect, useState } from "react";
import PostCard from "../../components/cards/PostCard";
import "./favorit.css";
import { PostAPI } from "../../api/PostAPI";

const Favorit = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFavorits = () => {
        PostAPI.favoritPosts()
            .then((response) => {
                setPosts(response.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        getFavorits();
    }, []);

    return (
        <div className="favorit">
            <h2>Mes favorits</h2>
            <div className="post-list">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Favorit;
