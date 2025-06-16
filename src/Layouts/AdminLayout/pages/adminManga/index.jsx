// --- MUDANÇAS: Reativa o CRUD importando as funções do objeto Mangas do services/api.js ---
import React from "react";
import { useForm } from "react-hook-form";
import { useMangas } from '../../../../application/hooks/useMangas';

// Cria o client do React Query
function AdminMangaInner() {
    // Hooks do react-hook-form para lidar com o formulário
    const { register, handleSubmit, reset, setValue } = useForm();
    // Estados locais para controle de edição
    const [editing, setEditing] = React.useState(false);
    const [editingId, setEditingId] = React.useState(null);

    // Usa o hook customizado para CRUD de mangás
    const { mangas, isLoading, create, update, remove } = useMangas();

    // Submissão do formulário (adiciona ou edita)
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

    // Preenche o formulário para edição
    const handleEdit = (manga) => {
        setEditing(true);
        setEditingId(manga.id);
        setValue("title", manga.title);
        setValue("author", manga.author);
    };

    // Exclui o mangá selecionado
    const handleDelete = (id) => {
        remove.mutate(id);
        // Se estava editando o mesmo mangá, sai do modo edição
        if (editing && editingId === id) {
            setEditing(false);
            setEditingId(null);
            reset();
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Gerenciar Mangás</h2>
            {/* Formulário de cadastro/edição de mangá */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-6">
                <input
                    {...register("title", { required: true })}
                    placeholder="Título"
                    className="border px-2 py-1 rounded"
                />
                <input
                    {...register("author", { required: true })}
                    placeholder="Autor"
                    className="border px-2 py-1 rounded"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
                    {editing ? "Salvar" : "Adicionar"}
                </button>
                {editing && (
                    <button type="button" onClick={() => { setEditing(false); setEditingId(null); reset(); }} className="bg-gray-400 text-white px-4 py-1 rounded">Cancelar</button>
                )}
            </form>
            {/* Exibe loading enquanto busca dados */}
            {isLoading ? (
                <p>Carregando mangás...</p>
            ) : (
                <ul className="space-y-2">
                    {/* Lista de mangás com botões de editar e excluir */}
                    {mangas && mangas.length > 0 ? mangas.map(manga => (
                        <li key={manga.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
                            <span>
                                <strong>{manga.title}</strong> — {manga.author}
                            </span>
                            <span className="flex gap-2">
                                <button onClick={() => handleEdit(manga)} className="bg-yellow-400 px-3 py-1 rounded">Editar</button>
                                <button onClick={() => handleDelete(manga.id)} className="bg-red-500 text-white px-3 py-1 rounded">Excluir</button>
                            </span>
                        </li>
                    )) : <li>Nenhum mangá cadastrado.</li>}
                </ul>
            )}
        </div>
    );
}

// Provider do React Query para o componente
function AdminManga() {
    return (
        <AdminMangaInner />
    );
}

export default AdminManga;