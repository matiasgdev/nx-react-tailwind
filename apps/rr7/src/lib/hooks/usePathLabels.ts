import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

type BreadcrumbLabel = Record<string, string>;

const defaultBreadcrumbLabels: BreadcrumbLabel = {
  '/foo': 'First',
  '/foo/bar': 'Second',
  '/foo/bar/baz': 'Third',
};

const pathKeys = Object.keys(defaultBreadcrumbLabels);

function fetchBreadcrumbLabels(): Promise<BreadcrumbLabel> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultBreadcrumbLabels);
    }, 500);
  });
}

function updateBreadcrumbLabels(): Promise<BreadcrumbLabel> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newLabels = Object.fromEntries(
        pathKeys.map((path) => [path, Math.random().toString(36).substring(7)])
      );
      resolve(newLabels);
    }, 300);
  });
}

export function usePathLabels() {
  const location = useLocation();
  const queryClient = useQueryClient();

  const { data: labels = {}, isLoading } = useQuery({
    queryKey: ['breadcrumbLabels'],
    queryFn: fetchBreadcrumbLabels,
    staleTime: Infinity,
  });

  const mutation = useMutation({
    mutationFn: updateBreadcrumbLabels,
    onSuccess: (newLabels) => {
      queryClient.setQueryData(['breadcrumbLabels'], newLabels);
    },
  });

  const segments = useMemo(
    () => getPathSegments(location.pathname),
    [location.pathname]
  );

  return {
    segments,
    labels,
    isLoading,
    randomize: mutation.mutate,
    isRandomizing: mutation.status === 'pending',
  };
}

function getPathSegments(path: string): string[] {
  return path
    .split('/')
    .filter(Boolean)
    .map((_, i, arr) => '/' + arr.slice(0, i + 1).join('/'));
}
