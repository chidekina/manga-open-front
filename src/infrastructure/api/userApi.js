import { API } from './index';

export const UserApi = {
    async getAll() {
        try {
            const res = await API.get("/users");
            return res.data;
        } catch (error) {
            return { data: null, error: error.message || "Erro au buscar usuários" };
        }
    },
    async create(data) {
        if (!data) return { data: null, error: "Dados obrigatórios não informados" };

        try {
            const res = await API.post("/users", data);
            return res.data;
        } catch (error) {
            return { data: null, error: error.message || "Erro ao criar usuário" };
        }
    },
    async update(id, data) {
        if (!id || !data) return { data: null, error: "ID e dados obrigatórios" };

        try {
            const res = await API.put(`/users/${id}`, data);
            return res.data;
        } catch (error) {
            return { data: null, error: error.message || "Erro ao atualizar usuário" };
        }
    },
    async delete(id) {
        if (!id) return { data: null, error: "ID obrigatório"};

        try {
            await API.delete(`users/${id}`);
            return { data: true };
        } catch (error) {
            return { data: null, error: error.message || "Erro ao deletar usuário"};
        }
    }
};