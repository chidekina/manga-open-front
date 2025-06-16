import { NavLink } from "react-router-dom";

const AdminBar = ({ adminLinks }) => {
    return (
        <ul className="w-screen h-12 bg-(--secondary-color) flex px-20 gap-10 items-center uppercase font-bold text-(--text-color) text-xl justify-evenly">
            {adminLinks.map(link => (
                <li key={link.id}>
                    <NavLink to={link.path}>
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

export default AdminBar;