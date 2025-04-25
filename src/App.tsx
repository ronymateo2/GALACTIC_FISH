import "./index.css";

import GalacticFish from "./layout/GalacticFishLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
        <GalacticFish></GalacticFish>
      </LoadingProvider>
    </QueryClientProvider>
  );
}

export default App;
