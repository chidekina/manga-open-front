// Exemplo de CRUD de mangás em React sem React Query e sem react-hook-form
// Utiliza apenas useState, useEffect e axios diretamente

import { useState, useEffect } from "react";
import { API } from "../../../../services/api";

const AdminMangaAntigo = () => {
    const [mangas, setMangas] = useState([]);
    const [form, setForm] = useState({ id: null, title: "", author: "" });
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    // Buscar mangás
    useEffect(() => {
        const fetchMangas = async () => {
            setLoading(true);
            try {
                const response = await API.get("/mangas");
                setMangas(response.data);
            } catch (err) {
                alert("Erro ao buscar mangás");
            } finally {
                setLoading(false);
            }
        };
        fetchMangas();
    }, []);

    // Lidar com mudanças no formulário
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Adicionar ou atualizar mangá
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editing) {
            try {
                await API.put(`/mangas/${form.id}`, form);
                setMangas(mangas.map(m => m.id === form.id ? form : m));
                setEditing(false);
            } catch (err) {
                alert("Erro ao atualizar mangá");
            }
        } else {
            try {
                const response = await API.post("/mangas", form);
                setMangas([...mangas, response.data]);
            } catch (err) {
                alert("Erro ao adicionar mangá");
            }
        }
        setForm({ id: null, title: "", author: "" });
    };

    // Editar mangá
    const handleEdit = (manga) => {
        setForm(manga);
        setEditing(true);
    };

    // Excluir mangá
    const handleDelete = async (id) => {
        try {
            await API.delete(`/mangas/${id}`);
            setMangas(mangas.filter(m => m.id !== id));
            if (editing && form.id === id) {
                setForm({ id: null, title: "", author: "" });
                setEditing(false);
            }
        } catch (err) {
            alert("Erro ao excluir mangá");
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Gerenciar Mangás (CRUD Antigo)</h2>
            <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Título"
                    className="border px-2 py-1 rounded"
                    required
                />
                <input
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    placeholder="Autor"
                    className="border px-2 py-1 rounded"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
                    {editing ? "Salvar" : "Adicionar"}
                </button>
                {editing && (
                    <button type="button" onClick={() => { setForm({ id: null, title: "", author: "" }); setEditing(false); }} className="bg-gray-400 text-white px-4 py-1 rounded">Cancelar</button>
                )}
            </form>
            {loading ? (
                <p>Carregando mangás...</p>
            ) : (
                <ul className="space-y-2">
                    {mangas.map(manga => (
                        <li key={manga.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
                            <span>
                                <strong>{manga.title}</strong> — {manga.author}
                            </span>
                            <span className="flex gap-2">
                                <button onClick={() => handleEdit(manga)} className="bg-yellow-400 px-3 py-1 rounded">Editar</button>
                                <button onClick={() => handleDelete(manga.id)} className="bg-red-500 text-white px-3 py-1 rounded">Excluir</button>
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AdminMangaAntigo;
