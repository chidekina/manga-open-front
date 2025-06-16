import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:3000"
});

// Funções centralizadas para CRUD de mangás
// (Agora migradas para src/infrastructure/api/mangaApi.js)

export const Mangas = {
    async read() {
        try {
            const res = await API.get("/mangas");
            return res.data;
        } catch (error) {
            return { data: null, error: error.message || "Erro ao buscar mangás" };
        }
    },
    async create(data) {
        if (!data) return { data: null, error: "Dados obrigatórios não informados" };
        try {
            const res = await API.post("/mangas", data);
            return res.data;
        } catch (error) {
            return { data: null, error: error.message || "Erro ao criar mangá" };
        }
    },
    async update(id, data) {
        if (!id || !data) return { data: null, error: "ID e dados obrigatórios" };
        try {
            const res = await API.put(`/mangas/${id}`, data);
            return res.data;
        } catch (error) {
            return { data: null, error: error.message || "Erro ao atualizar mangá" };
        }
    },
    async delete(id) {
        if (!id) return { data: null, error: "ID obrigatório" };
        try {
            await API.delete(`/mangas/${id}`);
            return { data: true };
        } catch (error) {
            return { data: null, error: error.message || "Erro ao deletar mangá" };
        }
    }
}

export const Users = {
    async read() {
        try {
            const res = await API.get("/users");
            return res.data;
        } catch (error) {
            return { data: null, error: error.message }
        }
    }
}
// export const createManga = (data) => API.post("/mangas", data).then(res => res.data);
// export const updateManga = (id, data) => API.put(`/mangas/${id}`, data).then(res => res.data);
// export const deleteManga = (id) => API.delete(`/mangas/${id}`);