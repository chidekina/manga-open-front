import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AdminBar from "./components/AdminBar";

import adminLinks from './data/links.json';

const AdminLayout = () => {

    return (
        <>
            <Header />
            <AdminBar adminLinks={adminLinks} />
            <Outlet />
            <Footer />
        </>
    );
}

export default AdminLayout;