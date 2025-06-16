import { useState } from "react";
import { useForm } from "react-hook-form"
import { useUsers } from "../../../../application/hooks/useUsers";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function AdminUserInner() {
    const { register, handleSubmit, reset, setValue } = useForm();
    const [editing, setEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const { users, isLoading, create, update, remove } = useUsers();

    const onSubmit = (data) => {
        if (editing) {
            update.mutate({ id: editingId, ...data });
            setEditing(false);
            setEditingId(null);
        } else {
            create.mutate(data);
        }
        reset();
    };

    const handleEdit = (user) => {
        setEditing(true);
        setEditingId(user.id);
        setValue("name", user.name);
        setValue("login", user.login);
        setValue("password", user.password);
    };

    const handleDelete = (id) => {
        remove.mutate(id);

        if (editing && editingId === id) {
            setEditing(false);
            setEditingId(null);
            reset();
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Gerenciar Usuários</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-6">
                <input
                    {...register("name", { required: true })}
                    placeholder="Nome"
                    className="border px-2 py-1 rounded"
                />
                <input
                    {...register("login", { required: true })}
                    placeholder="Login"
                    className="border px-2 py-1 rounded"
                />
                <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Senha"
                    className="border px-2 py-1 rounded"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
                    {editing ? "Salvar" : "Adicionar"}
                </button>
                {editing && (
                    <button type="button" onClick={() => { setEditing(false); setEditingId(null); reset(); }} className="bg-gray-400 text-white px-4 py-1 rounded">Cancelar</button>
                )}
            </form>
            {isLoading ? (
                <p>Carregando Usuários...</p>
            ) : (
                <ul className="space-y-2">
                    {users && users.length > 0 ? users.map(user => (
                        <li key={user.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
                            <span>
                                <strong>{user.name}</strong> - {user.login}
                            </span>
                            <span className="flex gap-2">
                                <button onClick={() => handleEdit(user)} className="bg-yellow-400 px-3 py-1 rounded">Editar</button>
                                <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-3 py-1 rounded">Excluir</button>
                            </span>
                        </li>)) : <li>Nenhum usuário cadastrado.</li>}
                </ul>
            )}
        </div>
    );
}
const AdminUser = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <AdminUserInner />
        </QueryClientProvider>
    )
}

export default AdminUser;