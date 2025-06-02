import { Outlet } from 'react-router-dom';

import { Breadcrumbs } from '@/components/breadcrumb';
import { Button } from '@/components/ui/button';
import { usePathLabels } from '@/lib/hooks/usePathLabels';

export function Layout() {
  const { isLoading, randomize } = usePathLabels();

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2 items-center">
        <Breadcrumbs />
      </div>
      <Button
        variant="outline"
        onClick={() => randomize()}
        className="ml-auto border px-2 py-1 rounded disabled:opacity-50"
        disabled={isLoading}
      >
        Shuffle
      </Button>
      <Outlet />
    </div>
  );
}
