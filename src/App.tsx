import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GalacticFishApp from "./app/GalacticFishApp";
import LoadingBar from "./components/ui/LoadingBar";
import { LoadingProvider } from "./components/context/LoadingContext";
import OfflineIndicator from "./components/ui/OfflineIndicator";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <LoadingBar></LoadingBar>
        <OfflineIndicator />
        <GalacticFishApp></GalacticFishApp>
      </LoadingProvider>
    </QueryClientProvider>
  );
}

export default App;
