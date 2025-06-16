// src/infrastructure/api/mangaApi.js
import { API } from "./index";

export const MangaApi = {
    async getAll() {
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
};
