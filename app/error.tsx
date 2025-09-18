'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
};

const Error = ({ error }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="content-container px-content py-content size-full text-center">
      <h2>Oops! Looks like something went wrong.</h2>

      <p className="mb-8">{error.message}</p>

      <button onClick={() => window.location.reload()} className="btn-primary">
        Reload Page
      </button>
    </div>
  );
};

export default Error;
