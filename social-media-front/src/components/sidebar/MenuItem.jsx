import { useNavigate } from "react-router-dom";

const MenuItem = ({ menuItem, isSelected, onSelect }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        onSelect(menuItem.id);
        navigate(menuItem.path);
    };

    const activeMenuItemClassname = isSelected
        ? "menu-item active"
        : "menu-item";
    return (
        <li className={activeMenuItemClassname} onClick={handleNavigate}>
            <div className="nav-link">
                {menuItem.icon}
                <span className="link-text">{menuItem.title}</span>
            </div>
        </li>
    );
};

export default MenuItem;
