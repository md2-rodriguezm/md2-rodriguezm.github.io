import { motion, AnimatePresence } from 'framer-motion';

interface SpeckleLoadingOverlayProps {
  progress: number;
  visible: boolean;
}

export function SpeckleLoadingOverlay({ progress, visible }: SpeckleLoadingOverlayProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(10,10,10,0.97) 0%, rgba(20,15,10,0.95) 100%)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Animated architecture grid */}
          <div className="relative mb-10">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="text-primary"
            >
              <motion.rect
                x="8" y="8" width="64" height="64"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.line
                x1="8" y1="40" x2="72" y2="40"
                stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"
              />
              <motion.line
                x1="40" y1="8" x2="40" y2="72"
                stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"
              />
              <motion.circle
                cx="40" cy="40" r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.5"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '40px', originY: '40px' }}
              />
              <motion.circle
                cx="40" cy="20" r="3"
                fill="currentColor"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="caption text-muted-foreground mb-6 tracking-[0.3em]"
          >
            Loading BIM Model
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-[1px] bg-border relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-primary"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p
            className="caption text-muted-foreground mt-3 text-[10px]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {progress < 100 ? `${Math.round(progress)}%` : 'Finalising…'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
