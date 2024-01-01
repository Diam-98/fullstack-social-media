import UserCard from "../../components/cards/UserCard";
import SearchBox from "../../components/search/SearchBox";
import "./network.css";

const Network = () => {
    return (
        <div className="network">
            <h2>Tous les utilisateurs</h2>
            <SearchBox />
            <hr />
            <div className="user-list">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
        </div>
    );
};

export default Network;
