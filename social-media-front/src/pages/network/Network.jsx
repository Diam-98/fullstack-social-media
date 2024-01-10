import { useEffect, useState } from "react";
import UserCard from "../../components/cards/UserCard";
import SearchBox from "../../components/search/SearchBox";
import "./network.css";
import { UserAPI } from "../../api/UserAPI";

const Network = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const myNetwork = () => {
        UserAPI.getMyNetwork()
            .then((response) => {
                setUsers(response.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        myNetwork();
    }, []);

    return (
        <div className="network">
            <h2>Tous les utilisateurs</h2>
            <SearchBox />
            <hr />
            <div className="user-list">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default Network;
