import { Select } from "antd";
import SearchBox from "../../components/search/SearchBox";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import "./explore.css";
import PostCard from "../../components/cards/PostCard";

const { Option } = Select;

const Explore = () => {
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
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    );
};

export default Explore;
