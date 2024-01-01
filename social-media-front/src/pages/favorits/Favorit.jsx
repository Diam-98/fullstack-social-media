import PostCard from "../../components/cards/PostCard";
import "./favorit.css";

const Favorit = () => {
    return (
        <div className="favorit">
            <h2>Mes favorits</h2>
            <div className="post-list">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    );
};

export default Favorit;
