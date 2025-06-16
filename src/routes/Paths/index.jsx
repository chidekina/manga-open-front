import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../Layouts/SiteLayout";
import Home from "../../pages/Home";
import About from "../../pages/About"
import NotFound from "../../pages/NotFound";
import Account from "../../pages/Account";
import Mangas from "../../pages/Mangas";
import Contact from "../../pages/Contacts";
import AdminLayout from "../../Layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import AdminManga from "../../Layouts/AdminLayout/pages/adminManga";
import AdminUser from "../../Layouts/AdminLayout/pages/AdminUser";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<Home />} />
                    <Route path="account" element={<Account />} />
                    <Route path="about" element={<About />} />
                    <Route path="mangas" element={<Mangas />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="/admin" element={
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                }>
                    <Route path="mangas" element={<AdminManga />}/>
                    <Route path="users" element={<AdminUser />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;