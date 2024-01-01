import { SearchOutlined } from "@ant-design/icons";
import "./searchBox.css";

const SearchBox = () => {
    return (
        <div className="search-box">
            <SearchOutlined />
            <input type="text" placeholder="Rechercher un article" />
        </div>
    );
};

export default SearchBox;
