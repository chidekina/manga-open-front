// src/application/hooks/useMangas.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { MangaApi } from '../../infrastructure/api/mangaApi';

export function useMangas() {
    const queryClient = useQueryClient();
    // TanStack Query v5 exige o uso do formato objeto:
    const { data: mangas = [], isLoading } = useQuery({
        queryKey: ['mangas'],
        queryFn: MangaApi.getAll
    });

    const create = useMutation({
        mutationFn: MangaApi.create,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['mangas'] })
    });
    const update = useMutation({
        mutationFn: ({ id, ...data }) => MangaApi.update(id, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['mangas'] })
    });
    const remove = useMutation({
        mutationFn: MangaApi.delete,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['mangas'] })
    });

    return {
        mangas,
        isLoading,
        create,
        update,
        remove
    };
}
