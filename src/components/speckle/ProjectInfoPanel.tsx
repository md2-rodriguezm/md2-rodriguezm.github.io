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
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10 max-w-[240px] md:max-w-xs"
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

          <div className="p-3 md:p-5">
            <span className="caption text-primary text-[10px] md:text-xs mb-0.5 md:mb-1 block truncate">{subtitle}</span>
            <h3
              className="font-heading text-base md:text-lg font-light text-foreground mb-2 md:mb-4 leading-tight truncate"
            >
              {title}
            </h3>

            <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={10} className="text-primary flex-shrink-0 md:w-[12px]" />
                <span className="text-[10px] md:text-xs font-light truncate">{location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={10} className="text-primary flex-shrink-0 md:w-[12px]" />
                <span className="text-[10px] md:text-xs font-light">{year}</span>
              </div>
              <div className="hidden sm:flex items-start gap-2 text-muted-foreground">
                <FileText size={12} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs font-light leading-relaxed line-clamp-2 md:line-clamp-3">{description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/5">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.15em] text-muted-foreground">
                Interactive 3D Model
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
