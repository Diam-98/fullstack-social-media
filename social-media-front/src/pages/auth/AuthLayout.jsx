import { Outlet } from "react-router-dom";
import "./auth.css";

const AuthLayout = () => {
    return (
        <div className="auth">
            <Outlet />
        </div>
    );
};

export default AuthLayout;
