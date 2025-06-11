import { Link } from "react-router-dom";

const AccountLink = () => {
    return (
        <Link to="/account">
            <button className="bg-(--secondary-color)/90 px-4 py-2 font-semibold rounded-md cursor-pointer active:scale-95 duration-150 hover:bg-(--secondary-color)">
                Login | Cadastro
            </button>
        </Link>
    );
}

export default AccountLink;