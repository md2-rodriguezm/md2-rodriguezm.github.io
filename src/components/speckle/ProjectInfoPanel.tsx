import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, FileText } from 'lucide-react';

interface ProjectInfoPanelProps {
  visible: boolean;
  title: string;
  subtitle: string;
  location: string;
  year: number;
  description: string;
}

export function ProjectInfoPanel({
  visible,
  title,
  subtitle,
  location,
  year,
  description,
}: ProjectInfoPanelProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute bottom-6 left-6 z-10 max-w-xs"
          style={{
            background: 'rgba(8, 8, 8, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '2px',
          }}
        >
          {/* Bronze accent top border */}
          <div
            className="h-[2px] w-full"
            style={{ background: 'linear-gradient(90deg, hsl(28 56% 46%), transparent)' }}
          />

          <div className="p-5">
            <span className="caption text-primary mb-1 block">{subtitle}</span>
            <h3
              className="font-heading text-lg font-light text-foreground mb-4 leading-tight"
            >
              {title}
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={12} className="text-primary flex-shrink-0" />
                <span className="text-xs font-light">{location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={12} className="text-primary flex-shrink-0" />
                <span className="text-xs font-light">{year}</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <FileText size={12} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs font-light leading-relaxed line-clamp-3">{description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Interactive 3D Model
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
