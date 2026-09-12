import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ message, type = "success", show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 left-1/2 z-50 font-mono text-sm px-5 py-3 rounded-sm border shadow-lg ${
            type === "success"
              ? "bg-bg-elevated border-accent text-ink"
              : "bg-bg-elevated border-danger text-ink"
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
