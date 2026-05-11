import { motion } from 'framer-motion';
import { Maximize2, Home, RotateCcw } from 'lucide-react';
import type { CanonicalView } from '@speckle/viewer';
import type { SpeckleViewerActions } from './useSpeckleViewer';

interface ViewerControlsProps {
  actions: SpeckleViewerActions;
  onFullscreen: () => void;
  isLoaded: boolean;
}

interface ViewButton {
  label: string;
  view: CanonicalView;
  abbr: string;
}

const VIEW_BUTTONS: ViewButton[] = [
  { label: 'Exterior / 3D', view: '3d', abbr: '3D' },
  { label: 'Top / Plan', view: 'top', abbr: 'PL' },
  { label: 'Front Elevation', view: 'front', abbr: 'FR' },
  { label: 'Right Elevation', view: 'right', abbr: 'RT' },
];

export function ViewerControls({ actions, onFullscreen, isLoaded }: ViewerControlsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
      transition={{ duration: 0.5 }}
      className="absolute top-4 left-4 md:top-6 md:left-6 z-10 flex flex-col gap-1.5 md:gap-2"
    >
      {/* View preset buttons */}
      <div
        className="flex flex-col gap-0.5 md:gap-1 p-1.5 md:p-2"
        style={{
          background: 'rgba(8,8,8,0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '2px',
        }}
      >
        <span className="caption text-muted-foreground text-[8px] md:text-[9px] tracking-[0.2em] px-1 mb-0.5 md:mb-1">
          View
        </span>
        {VIEW_BUTTONS.map((btn) => (
          <button
            key={btn.view}
            onClick={() => actions.setCameraView(btn.view)}
            title={btn.label}
            className="w-full flex items-center gap-1.5 md:gap-2 px-1.5 md:px-2 py-1 md:py-1.5 text-left rounded-none
                       text-muted-foreground hover:text-foreground hover:bg-white/5
                       transition-colors duration-200 group"
          >
            <span
              className="text-[9px] font-mono font-medium text-primary w-5 text-center"
            >
              {btn.abbr}
            </span>
            <span className="text-[10px] md:text-[11px] font-light truncate hidden sm:inline">{btn.label}</span>
          </button>
        ))}
      </div>

      {/* Utility buttons */}
      <div
        className="flex flex-col gap-0.5 md:gap-1 p-1.5 md:p-2"
        style={{
          background: 'rgba(8,8,8,0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '2px',
        }}
      >
        <button
          onClick={actions.zoomExtents}
          title="Fit all"
          className="flex items-center gap-1.5 md:gap-2 px-1.5 md:px-2 py-1 md:py-1.5
                     text-muted-foreground hover:text-foreground hover:bg-white/5
                     transition-colors duration-200"
        >
          <Home size={11} className="text-primary md:w-[12px]" />
          <span className="text-[10px] md:text-[11px] font-light hidden sm:inline">Fit All</span>
        </button>
        <button
          onClick={actions.clearSelection}
          title="Clear selection"
          className="flex items-center gap-1.5 md:gap-2 px-1.5 md:px-2 py-1 md:py-1.5
                     text-muted-foreground hover:text-foreground hover:bg-white/5
                     transition-colors duration-200"
        >
          <RotateCcw size={11} className="text-primary md:w-[12px]" />
          <span className="text-[10px] md:text-[11px] font-light hidden sm:inline">Clear</span>
        </button>
      </div>

      {/* Fullscreen */}
      <button
        onClick={onFullscreen}
        title="Toggle fullscreen"
        className="flex items-center justify-center w-full gap-1.5 md:gap-2 py-1.5 md:py-2 px-2 md:px-3
                   text-muted-foreground hover:text-foreground
                   transition-colors duration-200"
        style={{
          background: 'rgba(8,8,8,0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '2px',
        }}
      >
        <Maximize2 size={11} className="text-primary md:w-[12px]" />
        <span className="text-[10px] md:text-[11px] font-light hidden sm:inline">Fullscreen</span>
      </button>
    </motion.div>
  );
}
