import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function MainLayout() {
    return (
        <>
            <div className="main">
                <Header />
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
