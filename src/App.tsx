import "./App.css";
import "./index.css";

import GalacticFish from "./layout/GalacticFishLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoadingBar from "./components/LoadingBar";
import { LoadingProvider } from "./components/ContentLoading";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <LoadingBar></LoadingBar>
        <GalacticFish></GalacticFish>
      </LoadingProvider>
    </QueryClientProvider>
  );
}

export default App;
