import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";


const Account = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        if (data.login === "usuario" && data.password === "senha") {
            navigate("/");
        } else {
            alert("Login ou senha incorretos");
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form
                className="flex flex-col justify-center h-full items-center gap-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="login">
                    <p>Login</p>
                    <input
                        name="login"
                        className="border-solid border-2 border-amber-600"
                        {...register("login",
                            { required: true })}
                    />
                </label>
                <label htmlFor="password">
                    <p>Senha</p>
                    <input
                        name="password"
                        type="password"
                        className="border-solid border-2 border-amber-500"
                        {...register("password",
                            { required: true })}
                    />
                </label>
                {errors.password && <span>This field is required</span>}
                <input
                    type="submit"
                    className="border-solid border-2 border-amber-600"
                />
            </form>
        </div>
    )
}

export default Account;