
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  subtitleClassName?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className,
  subtitleClassName,
  light = false,
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
        'text-white gold-gradient',
        'after:content-[""] after:block after:w-1/3 after:h-[2px] after:bg-gold after:mt-2'
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          'mt-4 max-w-2xl',
          align === 'center' && 'mx-auto',
          align === 'right' && 'ml-auto',
          'text-white/80',
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
