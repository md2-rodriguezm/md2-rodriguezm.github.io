import { useRef } from 'react';
import { useSpeckleViewer } from './useSpeckleViewer';
import type { SpeckleViewerActions, SpeckleViewerState } from './useSpeckleViewer';

interface SpeckleViewerCanvasProps {
  onStateChange?: (state: SpeckleViewerState) => void;
  onActionsReady?: (actions: SpeckleViewerActions) => void;
  children?: (
    state: SpeckleViewerState,
    actions: SpeckleViewerActions,
    containerRef: React.RefObject<HTMLDivElement>
  ) => React.ReactNode;
}

export function SpeckleViewerCanvas({
  children,
}: SpeckleViewerCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { state, actions } = useSpeckleViewer(containerRef);

  return (
    <div className="relative w-full h-full">
      {/* Three.js canvas mount point */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
        style={{ background: 'transparent' }}
      />
      {/* Overlays rendered via render-prop pattern */}
      {children?.(state, actions, containerRef)}
    </div>
  );
}
