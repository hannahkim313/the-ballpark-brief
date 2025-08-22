import { useEffect, useState } from 'react';

const useStatsAPI = <T>(url: string | null) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(url ? true : false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(`https://statsapi.mlb.com/api/v1/${url}`, {
          signal,
        });

        if (!res.ok) {
          throw new Error(`HTTP status: ${res.status}`);
        }

        const json = await res.json();
        setData(json);
        setError(null);
      } catch (err: any) {
        if (err.name === 'AbortError') {
          return;
        }

        if (process.env.NODE_ENV === 'development') {
          console.error('StatsAPI error:', err);
          setError(err.message);
        } else {
          setError(
            'Oops! Looks like something went wrong. Please try again later.'
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useStatsAPI;
