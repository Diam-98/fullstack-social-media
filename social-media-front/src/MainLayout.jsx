import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { useAuth } from "./context/AuthProvider";
import { useEffect } from "react";
import { UserAPI } from "./api/UserAPI";

function MainLayout() {
    const { user, setUser, token } = useAuth();
    useEffect(() => {
        UserAPI.currentUser()
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((err) => {
                const resp = err.response;
                if (resp.status === 401) {
                    return (
                        <Navigate
                            to="/login"
                            state={{ from: location }}
                            replace
                        />
                    );
                }
            });
    }, []);

    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (
        <>
            <div className="main">
                <Header user={user} />
                <div className="content">
                    <Sidebar />
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainLayout;
