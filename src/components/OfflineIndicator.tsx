import { useEffect, useState } from "react";
import Offline from "../assets/offline.svg";

export default function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const onOffline = () => setIsOffline(true);
    const onOnline = () => setIsOffline(false);

    window.addEventListener("offline", onOffline);
    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("offline", onOffline);
      window.removeEventListener("online", onOnline);
    };
  }, []);

  if (!isOffline) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black shadow-md p-4 flex items-start gap-4 sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <img src={Offline} className="w-20 h-20" />
        <div>
          <p className="font-semibold">You're offline</p>
          <p className="text-sm">
            Some features may not work properly until you reconnect.
          </p>
        </div>
      </div>
      <div className="hidden sm:flex gap-3 text-sm font-medium">
        <button
          onClick={() => location.reload()}
          className="text-black hover:underline"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
