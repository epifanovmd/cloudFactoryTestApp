import { useEffect, useRef, useState } from "react";

export const useDelayLoading = (
  delay: number,
  load: boolean,
  initialLoading?: boolean,
) => {
  const initial = useRef(true);
  const timeoutId = useRef<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (load && !timeoutId.current) {
      timeoutId.current = setTimeout(() => {
        setLoading(true);
      }, delay);
    } else if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
      setLoading(false);
    }

    return () => {
      if (initial.current) {
        initial.current = false;
      }
    };
    // eslint-disable-next-line
  }, [load]);

  return initial.current && initialLoading ? load : loading;
};
