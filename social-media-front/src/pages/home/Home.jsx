import FeedCard from "../../components/cards/FeedCard";
import UserCard from "../../components/cards/UserCard";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="feed">
                <h2>Fil d'actualite</h2>
                <FeedCard />
                <FeedCard />
            </div>
            <div className="network">
                <h2>Reseaux</h2>
                <div className="network-body">
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </div>
            </div>
        </div>
    );
};

export default Home;
