import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/auth/AuthLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import MainLayout from "./MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Explore from "./pages/explore/Explore.jsx";
import Network from "./pages/network/Network.jsx";
import Favorit from "./pages/favorits/Favorit.jsx";
import CreatePost from "./pages/post/CreatePost.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Update from "./pages/profile/Update.jsx";
import PostDetail from "./pages/post/PostDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="/home" element={<MainLayout />}>
                    <Route index="/home" element={<Home />} />
                    <Route path="/home/explore" element={<Explore />} />
                    <Route path="/home/network" element={<Network />} />
                    <Route path="/home/favorits" element={<Favorit />} />
                    <Route path="/home/post/create" element={<CreatePost />} />
                    <Route path="/home/profile" element={<Profile />} />
                    <Route path="/home/profile/update" element={<Update />} />
                    <Route
                        path="/home/post/detail/:slug"
                        element={<PostDetail />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
