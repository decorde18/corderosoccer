import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

export function getData() {}
export function createData() {}
export function updateData() {}
export function deleteData() {}
