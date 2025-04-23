import React from 'react';
import { AlertTriangle, CheckCircle, UserCircle as LoaderCircle } from 'lucide-react';

interface RiskIndicatorProps {
  riskPercentage: number;
  loading: boolean;
}

export const RiskIndicator: React.FC<RiskIndicatorProps> = ({ 
  riskPercentage, 
  loading 
}) => {
  // Determine risk level and styling
  const getRiskLevel = () => {
    if (riskPercentage < 30) {
      return {
        level: 'Sin Riesgo',
        icon: <CheckCircle className="h-12 w-12 text-green-500" />,
        textColor: 'text-green-700',
        bgColor: 'bg-green-50'
      };
    } else if (riskPercentage < 70) {
      return {
        level: 'Riesgo Moderado',
        icon: <AlertTriangle className="h-12 w-12 text-orange-500" />,
        textColor: 'text-orange-700',
        bgColor: 'bg-orange-50'
      };
    } else {
      return {
        level: 'Alto Riesgo de Desborde',
        icon: <AlertTriangle className="h-12 w-12 text-red-500" />,
        textColor: 'text-red-700',
        bgColor: 'bg-red-50'
      };
    }
  };

  const risk = getRiskLevel();

  return (
    <div className={`rounded-lg p-6 ${risk.bgColor} transition-all duration-500`}>
      {loading ? (
        <div className="flex flex-col items-center">
          <LoaderCircle className="h-12 w-12 text-blue-500 animate-spin" />
          <h2 className="text-3xl font-bold text-gray-600 mt-4">
            Actualizando datos...
          </h2>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-shrink-0">
            {risk.icon}
          </div>
          <div className="text-center sm:text-left">
            <h2 className={`text-3xl sm:text-4xl font-bold ${risk.textColor}`}>
              {risk.level}
            </h2>
            <p className="text-gray-600 mt-2">
              Probabilidad de desborde: <span className="font-semibold">{riskPercentage}%</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};