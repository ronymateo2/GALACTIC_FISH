import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GalacticFishLayout from "./layout/GalacticFishLayout";
import LoadingBar from "./components/LoadingBar";
import { LoadingProvider } from "./components/ContentLoading";
import OfflineIndicator from "./components/OfflineIndicator";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <LoadingBar></LoadingBar>
        <OfflineIndicator />
        <GalacticFishLayout></GalacticFishLayout>
      </LoadingProvider>
    </QueryClientProvider>
  );
}

export default App;
