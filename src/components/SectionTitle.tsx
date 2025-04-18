
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  subtitleClassName?: string;
  light?: boolean;
  underline?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className,
  subtitleClassName,
  light = false,
  underline = true,
}) => {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      align === 'left' && 'text-left',
      className
    )}>
      <h2 className={cn(
        'section-title relative inline-block',
        'text-gold',
        underline && 'after:content-[""] after:block after:w-2/3 after:h-[3px] after:bg-gold after:mt-2'
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          'mt-4 max-w-2xl',
          align === 'center' && 'mx-auto',
          align === 'right' && 'ml-auto',
          light ? 'text-white/80' : 'text-white/80',
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
