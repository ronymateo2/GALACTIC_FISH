/* eslint-disable react-refresh/only-export-components */
import React, { useCallback, useState } from "react";

type LoadingContextTye = {
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

export const LoadingContext = React.createContext<
  LoadingContextTye | undefined
>(undefined);

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
