import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { API } from "../../services/api";


const Account = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = async (formData) => {
        const response = await API.get('users?login=' + formData.login);
        const { data } = response;
        if (data.length) {
            const user = data[0];
            if (user.password === formData.password) {
                localStorage.setItem("isLoggedIn", "true");
                navigate("/admin"); // Login correto, redireciona
            } else {
                alert("Senha incorreta");
            }
        } else {
            alert("Usuário não encontrado");
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-120">
            <form
                className="flex flex-col justify-center items-center gap-10 text-center font-bold"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label
                    htmlFor="login"
                    className="flex flex-col gap-2"
                >
                    <p>Login</p>
                    <input
                        name="login"
                        className="rounded-3xl bg-(--primary-color)/40 px-4"
                        {...register("login",
                            { required: true })}
                    />
                </label>
                <label
                    htmlFor="password"
                    className="flex flex-col gap-2"
                >
                    <p>Senha</p>
                    <input
                        name="password"
                        type="password"
                        className="rounded-3xl bg-(--primary-color)/40 px-4"
                        {...register("password",
                            { required: true })}
                    />
                </label>
                {errors.password && <span>This field is required</span>}
                <input
                    id="entrar"
                    type="submit"
                    className="bg-(--secondary-color) px-6 py-2 rounded-3xl"
                    value="Entrar"
                />
            </form>
        </div>
    )
}

export default Account;