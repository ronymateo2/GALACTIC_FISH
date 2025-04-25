import { useEffect } from "react";
import { useLoading } from "./useLoading";

export function useLoadingEffect(isLoading: boolean) {
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    if (isLoading) startLoading();
    else stopLoading();
  }, [isLoading, startLoading, stopLoading]);
}
