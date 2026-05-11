import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SelectedObjectPanelProps {
  data: Record<string, unknown> | null;
  onClose: () => void;
}

// Filter to show only "interesting" properties
const PRIORITY_KEYS = [
  'name', 'type', 'category', 'family', 'level', 'area',
  'volume', 'height', 'width', 'length', 'material', 'phase',
];

function formatValue(value: unknown): string {
  if (value === null || value === undefined) return '—';
  if (typeof value === 'number') return value.toFixed(2).replace(/\.00$/, '');
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (typeof value === 'object') return '[Object]';
  return String(value);
}

function getDisplayProperties(data: Record<string, unknown>): [string, string][] {
  const result: [string, string][] = [];

  // First pass: priority keys
  for (const key of PRIORITY_KEYS) {
    const val = data[key];
    if (val !== undefined && val !== null && val !== '') {
      result.push([key, formatValue(val)]);
    }
  }

  // Second pass: any remaining string/number scalars (limit to 10 total)
  for (const [key, val] of Object.entries(data)) {
    if (result.length >= 10) break;
    if (PRIORITY_KEYS.includes(key)) continue;
    if (key.startsWith('__') || key.startsWith('_')) continue;
    if (typeof val === 'string' || typeof val === 'number') {
      result.push([key, formatValue(val)]);
    }
  }

  return result.slice(0, 10);
}

export function SelectedObjectPanel({ data, onClose }: SelectedObjectPanelProps) {
  const properties = data ? getDisplayProperties(data) : [];

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-56 md:w-64 max-h-[300px] overflow-y-auto"
          style={{
            background: 'rgba(8, 8, 8, 0.80)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '2px',
          }}
        >
          <div
            className="h-[2px] w-full"
            style={{ background: 'linear-gradient(90deg, hsl(28 56% 46%), transparent)' }}
          />
          <div className="p-3 md:p-4">
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <span className="caption text-primary text-[9px] md:text-[10px] tracking-[0.2em]">
                Element Properties
              </span>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close properties panel"
              >
                <X size={12} className="md:w-[14px]" />
              </button>
            </div>

            {properties.length === 0 ? (
              <p className="text-[10px] md:text-xs text-muted-foreground">No properties available.</p>
            ) : (
              <div className="space-y-1.5 md:space-y-2">
                {properties.map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 gap-2 border-b border-white/5 pb-1.5 md:pb-2 last:border-0 last:pb-0">
                    <span
                      className="text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground truncate"
                      title={key}
                    >
                      {key}
                    </span>
                    <span
                      className="text-[10px] md:text-xs text-foreground text-right truncate font-light"
                      title={value}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
