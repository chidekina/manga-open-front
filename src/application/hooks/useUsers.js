import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserApi } from '../../infrastructure/api/userApi';

export function useUsers() {
    const queryClient = useQueryClient();
    // TanStack Query v5 exige o uso do formato objeto:
    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: UserApi.getAll
    });

    const create = useMutation({
        mutationFn: UserApi.create,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] })
    });
    const update = useMutation({
        mutationFn: ({ id, ...data }) => UserApi.update(id, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] })
    });
    const remove = useMutation({
        mutationFn: UserApi.delete,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] })
    });

    return {
        users,
        isLoading,
        create,
        update,
        remove
    }
}
