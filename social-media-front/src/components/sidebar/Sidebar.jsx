import {
    FormOutlined,
    HeartOutlined,
    HomeOutlined,
    SwitcherOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import "./sidebar.css";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";

const menuItem = [
    {
        id: 1,
        title: "Accueil",
        path: "/home",
        icon: <HomeOutlined />,
    },
    {
        id: 2,
        title: "Explorer",
        path: "/home/explore",
        icon: <SwitcherOutlined />,
    },
    {
        id: 3,
        title: "Reseau",
        path: "/home/network",
        icon: <TeamOutlined />,
    },
    {
        id: 4,
        title: "Favoris",
        path: "/home/favorits",
        icon: <HeartOutlined />,
    },
    {
        id: 5,
        title: "Publier",
        path: "/home/post/create",
        icon: <FormOutlined />,
    },
];

const Sidebar = () => {
    const [selectedItemId, setSelectedItemId] = useState(false);
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const updateDimensions = () => {
        setIsMobile(window.innerWidth <= 650);
    };

    const handleItemOnSelect = (itemId) => {
        setSelectedItemId(itemId);
    };

    return (
        <div className={isMobile ? "bottom-bar" : "sidebar"}>
            <ul>
                {menuItem.map((item) => (
                    <MenuItem
                        key={item.id}
                        menuItem={item}
                        isSelected={item.id === selectedItemId}
                        onSelect={handleItemOnSelect}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
