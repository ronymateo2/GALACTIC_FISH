import { useContext } from "react";
import { LoadingContext } from "../components/context/LoadingContext";

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoading must be used within LoadingProvider");
  return context;
}
