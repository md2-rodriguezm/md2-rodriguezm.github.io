import { useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { SpeckleViewerCanvas } from './SpeckleViewerCanvas';
import { SpeckleLoadingOverlay } from './SpeckleLoadingOverlay';
import { ProjectInfoPanel } from './ProjectInfoPanel';
import { SelectedObjectPanel } from './SelectedObjectPanel';
import { ViewerControls } from './ViewerControls';
import type { SpeckleViewerActions, SpeckleViewerState } from './useSpeckleViewer';

interface BIMViewerProps {
  title: string;
  subtitle: string;
  location: string;
  year: number;
  description: string;
}

export function BIMViewer({ title, subtitle, location, year, description }: BIMViewerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen();
    }
  }, []);

  const renderOverlays = (
    state: SpeckleViewerState,
    actions: SpeckleViewerActions
  ) => (
    <>
      {/* Loading state */}
      <SpeckleLoadingOverlay
        visible={state.loadingState === 'loading' || state.loadingState === 'idle'}
        progress={state.loadingProgress}
      />

      {/* Error state */}
      <AnimatePresence>
        {state.loadingState === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4"
            style={{ background: 'rgba(8,8,8,0.9)' }}
          >
            <AlertCircle size={32} className="text-primary opacity-60" />
            <p className="caption text-muted-foreground text-center max-w-sm px-6">
              Unable to load the BIM model.<br />
              <span className="text-xs normal-case tracking-normal font-light mt-1 block">
                {state.error}
              </span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls — only visible once loaded */}
      <ViewerControls
        actions={actions}
        onFullscreen={handleFullscreen}
        isLoaded={state.loadingState === 'loaded'}
      />

      {/* Project info panel */}
      <ProjectInfoPanel
        visible={state.loadingState === 'loaded'}
        title={title}
        subtitle={subtitle}
        location={location}
        year={year}
        description={description}
      />

      {/* Selection properties panel */}
      <SelectedObjectPanel
        data={state.selectedObjectData}
        onClose={actions.clearSelection}
      />

      {/* Interaction hint */}
      <AnimatePresence>
        {state.loadingState === 'loaded' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 hidden xs:flex flex-col items-end gap-1"
          >
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.18em] text-primary/70 font-medium">
              Navigation Guide
            </p>
            <div className="flex flex-col items-end opacity-40">
              <p className="text-[7px] md:text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
                Left Click · Orbit
              </p>
              <p className="text-[7px] md:text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
                Right Click · Pan
              </p>
              <p className="text-[7px] md:text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
                Scroll · Zoom
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-[400px] xs:h-[500px] md:h-[65vh] max-h-[800px]"
    >
      {/* Dark architectural background */}
      <div
        className="absolute inset-0 rounded-none"
        style={{
          background: 'linear-gradient(135deg, #080808 0%, #0f0d0a 50%, #080808 100%)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      />

      {/* Subtle corner accents */}
      <div
        className="absolute top-0 left-0 w-8 h-8 pointer-events-none"
        style={{
          borderTop: '1px solid hsl(28 56% 46% / 0.5)',
          borderLeft: '1px solid hsl(28 56% 46% / 0.5)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
        style={{
          borderBottom: '1px solid hsl(28 56% 46% / 0.5)',
          borderRight: '1px solid hsl(28 56% 46% / 0.5)',
        }}
      />

      <SpeckleViewerCanvas>
        {(state, actions) => renderOverlays(state, actions)}
      </SpeckleViewerCanvas>
    </div>
  );
}
