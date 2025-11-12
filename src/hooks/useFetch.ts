import { useEffect, useState } from "react";

export const useFetch = <T,>(fetchFunc: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchFunc();
        setData(result);
      } catch (err: any) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    })();
  }, [fetchFunc]);

  return { data, loading, error };
};
