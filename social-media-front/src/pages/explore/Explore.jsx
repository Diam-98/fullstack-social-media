import { Select } from "antd";
import SearchBox from "../../components/search/SearchBox";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import "./explore.css";
import PostCard from "../../components/cards/PostCard";
import { PostAPI } from "../../api/PostAPI";
import { useEffect, useState } from "react";

const { Option } = Select;

const Explore = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = () => {
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

    useEffect(() => {
        getPosts();
    }, []);

    const handleChange = (value) => {
        console.log(`Option selectione : ${value}`);
    };
    return (
        <div className="explore">
            <h2>Explorer des articles</h2>
            <SearchBox />
            <div className="title-filter">
                <h3>Liste des posts</h3>
                <Select defaultValue="all" onChange={handleChange}>
                    <Option value="all">Tout</Option>
                    <Option value="a-z">
                        A-Z <CaretUpFilled />
                    </Option>
                    <Option value="z-a">
                        Z-A <CaretDownFilled />
                    </Option>
                </Select>
            </div>
            <div className="post-list">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Explore;
