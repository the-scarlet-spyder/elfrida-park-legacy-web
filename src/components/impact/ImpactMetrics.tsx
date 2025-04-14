
import React from 'react';

interface ImpactMetricProps {
  value: string;
  label: string;
  className?: string;
}

const ImpactMetric: React.FC<ImpactMetricProps> = ({ value, label, className }) => (
  <div className={`text-center p-4 reveal ${className}`}>
    <div className="bg-darkgrey-light p-6 rounded-lg hover:bg-darkgrey-dark transition-all duration-300">
      <div className="text-4xl font-bold text-gold mb-2">{value}</div>
      <p className="text-white/80">{label}</p>
    </div>
  </div>
);

interface ImpactMetricsProps {
  metrics: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}

const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ metrics, className }) => (
  <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
    {metrics.map((metric, index) => (
      <ImpactMetric
        key={index}
        value={metric.value}
        label={metric.label}
        className=""
      />
    ))}
  </div>
);

export default ImpactMetrics;
