import { useEffect, useState } from "react";
import { PostAPI } from "../../api/PostAPI";
import FeedCard from "../../components/cards/FeedCard";
import UserCard from "../../components/cards/UserCard";
import "./home.css";
import { UserAPI } from "../../api/UserAPI";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const getFeeds = () => {
        PostAPI.getAllPost()
            .then((response) => {
                setPosts(response.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            });
    };

    const getUsers = () => {
        UserAPI.users()
            .then((response) => {
                setUsers(response.data.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        getFeeds();
        getUsers();
    }, []);

    if (loading) {
        return "Chargement...";
    }

    if (!loading) {
        return (
            <div className="home">
                <div className="feed">
                    <h2>Fil d'actualite</h2>
                    {posts.map((post) => (
                        <FeedCard key={post.id} post={post} />
                    ))}
                    ;
                </div>
                <div className="network">
                    <h2>Reseaux</h2>
                    <div className="network-body">
                        {users.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
