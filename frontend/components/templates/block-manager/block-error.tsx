'use client';

import { Cancel01FreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { ErrorBoundary } from 'react-error-boundary';

export const BlockError: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ErrorBoundary fallback={<ErrorComponent message="Something went wrong" />}>{children}</ErrorBoundary>
);

export const ErrorComponent: React.FC<{ message: string }> = ({ message }) => (
  <div className="container mx-auto max-w-6xl py-4">
    <div className="rounded-md border-2 border-red-700 bg-red-50 p-6">
      <div className="flex">
        <div className="shrink-0">
          <HugeiconsIcon icon={Cancel01FreeIcons} size={24} color="currentColor" strokeWidth={1.5} />
        </div>
        <div className="ml-3">
          <h3 className="text-base font-medium text-red-700">
            <b>Error: </b>
            {message}
          </h3>
        </div>
      </div>
    </div>
  </div>
);
