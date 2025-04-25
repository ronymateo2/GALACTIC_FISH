import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "../../hooks/useLoading";
import { useEffect, useState } from "react";

export default function LoadingBar() {
  const { loading } = useLoading();
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!loading) {
      setComplete(true);
      const timeout = setTimeout(() => setComplete(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [loading]);
  return (
    <AnimatePresence>
      {loading ||
        (complete && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-[4px] bg-transparent z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-full bg-red-500"
              initial={{ width: 0 }}
              animate={{
                width: loading ? "90%" : "100%",
                transition: {
                  duration: loading ? 1.5 : 0.5,
                  ease: "easeOut",
                },
              }}
            />
          </motion.div>
        ))}
    </AnimatePresence>
  );
}
