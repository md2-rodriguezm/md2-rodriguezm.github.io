import { useEffect, useRef, useCallback, useState } from 'react';
import {
  Viewer,
  DefaultViewerParams,
  SpeckleLoader,
  ViewerEvent,
  HybridCameraController,
  SelectionExtension,
  UrlHelper,
} from '@speckle/viewer';
import type { SelectionEvent, CanonicalView } from '@speckle/viewer';

export type LoadingState = 'idle' | 'loading' | 'loaded' | 'error';

export interface SpeckleViewerState {
  loadingState: LoadingState;
  loadingProgress: number;
  selectedObjectData: Record<string, unknown> | null;
  error: string | null;
}

export interface SpeckleViewerActions {
  setCameraView: (view: CanonicalView) => void;
  zoomExtents: () => void;
  clearSelection: () => void;
}

const MODEL_URL =
  'https://app.speckle.systems/projects/e48ac80f7b/models/06af565a53';
const EMBED_TOKEN = 'f4d5688997f8642a8031d1c4a7b5fab7ce55b28bd3';

export function useSpeckleViewer(containerRef: React.RefObject<HTMLDivElement>) {
  const viewerRef = useRef<Viewer | null>(null);
  const cameraRef = useRef<HybridCameraController | null>(null);
  const selectionRef = useRef<SelectionExtension | null>(null);
  const initializedRef = useRef(false);

  const [state, setState] = useState<SpeckleViewerState>({
    loadingState: 'idle',
    loadingProgress: 0,
    selectedObjectData: null,
    error: null,
  });

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return;
    initializedRef.current = true;

    const container = containerRef.current;

    const init = async () => {
      try {
        setState((s) => ({ ...s, loadingState: 'loading', loadingProgress: 5 }));

        const params = { ...DefaultViewerParams };
        params.showStats = false;
        params.verbose = false;

        const viewer = new Viewer(container, params);
        await viewer.init();
        viewerRef.current = viewer;

        // Extensions
        const camera = viewer.createExtension(HybridCameraController);
        cameraRef.current = camera;

        const selection = viewer.createExtension(SelectionExtension);
        selectionRef.current = selection;

        // Listen for selection events
        viewer.on(ViewerEvent.ObjectClicked, (event: SelectionEvent | null) => {
          if (!event || event.hits.length === 0) {
            setState((s) => ({ ...s, selectedObjectData: null }));
            return;
          }
          const node = event.hits[0].node;
          const raw = node?.model?.raw as Record<string, unknown> | undefined;
          setState((s) => ({ ...s, selectedObjectData: raw ?? null }));
        });

        // Load model
        setState((s) => ({ ...s, loadingProgress: 20 }));
        const urls = await UrlHelper.getResourceUrls(MODEL_URL, EMBED_TOKEN);

        setState((s) => ({ ...s, loadingProgress: 40 }));

        for (const url of urls) {
          const loader = new SpeckleLoader(viewer.getWorldTree(), url, EMBED_TOKEN);
          await viewer.loadObject(loader, true);
        }

        setState((s) => ({
          ...s,
          loadingState: 'loaded',
          loadingProgress: 100,
        }));
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error loading model';
        setState((s) => ({ ...s, loadingState: 'error', error: message }));
        console.error('[SpeckleViewer]', err);
      }
    };

    init();

    return () => {
      if (viewerRef.current) {
        try {
          viewerRef.current.dispose();
        } catch (_) {
          // ignore dispose errors
        }
        viewerRef.current = null;
        initializedRef.current = false;
      }
    };
  }, [containerRef]);

  const setCameraView = useCallback((view: CanonicalView) => {
    cameraRef.current?.setCameraView(view, true);
  }, []);

  const zoomExtents = useCallback(() => {
    cameraRef.current?.setCameraView([], true);
  }, []);

  const clearSelection = useCallback(() => {
    selectionRef.current?.clearSelection();
    setState((s) => ({ ...s, selectedObjectData: null }));
  }, []);

  const actions: SpeckleViewerActions = { setCameraView, zoomExtents, clearSelection };

  return { state, actions };
}
