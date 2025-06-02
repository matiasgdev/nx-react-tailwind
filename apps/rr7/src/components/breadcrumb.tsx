import { Fragment, type JSX } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Skeleton } from '@/components/ui/skeleton';
import { usePathLabels } from '@/lib/hooks/usePathLabels';

export function Breadcrumbs(): JSX.Element {
  const { segments, labels, isLoading } = usePathLabels();

  return (
    <Breadcrumb>
      {isLoading ? (
        <div className="flex gap-2 items-center">
          {[...Array(segments.length || 3)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-20 rounded" />
          ))}
        </div>
      ) : (
        <BreadcrumbList>
          {segments.map((path: string, idx: number) => {
            const isLast = segments.length === idx + 1;
            return (
              <Fragment key={path}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{labels[path]}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink to={path}>
                      {labels[path] ?? path}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {isLast ? null : <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      )}
    </Breadcrumb>
  );
}
