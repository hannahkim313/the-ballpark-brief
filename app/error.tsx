'use client';

import Link from 'next/link';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Oops! Looks like something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default Error;
