import React from 'react';
import { Info } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-4 px-6 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p>
            AlertME es un Sistema Integral de Alerta Temprana que utiliza cámaras con inteligencia artificial, sensores de agua y una plataforma web para monitorear en tiempo real. Su objetivo es alertar con antelación a las comunidades ante posibles inundaciones, ayudándolas a tomar decisiones informadas y reducir riesgos.
            <span className="inline">
              {' '}
              Ante cualquier alerta, comuníquese con las autoridades locales.
            </span>
          </p>
        </div>
        <div className="mt-4 text-s text-gray-500 text-center">
          Research in Sustainability Evolution | 2025
        </div>
      </div>
    </footer>
  );
};
