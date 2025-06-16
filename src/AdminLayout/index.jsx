import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../SiteLayout/Header";
import Footer from "../SiteLayout/Footer";

const menuItems = [
    { label: "Dashboard", path: "/admin" },
    { label: "Gerenciar Mangás", path: "/admin/mangas" },
    { label: "Gerenciar Usuários", path: "/admin/users" },
];

const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Footer />
        </div>
    );
};

export default AdminLayout;