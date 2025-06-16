import { Navigate, replace } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem("isLoggedIn");

    if (!isAuthenticated) {
        return <Navigate to="/account" replace />
    };
    return children;
}
 
export default ProtectedRoute;