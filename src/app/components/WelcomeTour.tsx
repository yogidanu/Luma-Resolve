import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, ArrowLeft, Zap, Layout, Edit3, BookOpen } from 'lucide-react';

interface WelcomeTourProps {
  onClose: () => void;
  onStartTour: () => void;
}

export function WelcomeTour({ onClose, onStartTour }: WelcomeTourProps) {
  const [step, setStep] = useState(0);

  const features = [
    {
      title: 'AI-Powered Resolution',
      description: 'Get instant AI analysis, root cause detection, and suggested resolutions for every ticket with transparent confidence scoring.',
      icon: Zap,
      accent: 'from-violet-500 to-purple-600',
      bg: 'bg-violet-50',
      iconColor: 'text-violet-600',
    },
    {
      title: 'Tri-Panel Workspace',
      description: 'Customer context, ticket details, and AI assistant — all in one intelligent layout designed for maximum efficiency.',
      icon: Layout,
      accent: 'from-sky-500 to-blue-600',
      bg: 'bg-sky-50',
      iconColor: 'text-sky-600',
    },
    {
      title: 'Smart Draft Responses',
      description: 'AI generates professional responses with adjustable tone. You always review and approve before sending.',
      icon: Edit3,
      accent: 'from-emerald-500 to-teal-600',
      bg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Auto Documentation',
      description: 'AI automatically generates ticket summaries, root causes, and resolution steps for your knowledge base.',
      icon: BookOpen,
      accent: 'from-amber-500 to-orange-600',
      bg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
  ];

  const current = features[step];
  const Icon = current.icon;

  const handleNext = () => {
    if (step < features.length - 1) setStep(step + 1);
    else onStartTour();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="px-7 pt-6 pb-4 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl ai-gradient flex items-center justify-center ai-glow">
              <Sparkles size={15} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[15px] font-bold text-gray-900">Welcome to LumaResolve</p>
              <p className="text-[11px] text-gray-400">Quick walkthrough · {features.length} steps</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="px-7 py-8">
          {/* Icon */}
          <div className={`w-16 h-16 ${current.bg} rounded-2xl flex items-center justify-center mb-5 mx-auto`}>
            <Icon size={28} className={current.iconColor} strokeWidth={1.8} />
          </div>

          {/* Text */}
          <div className="text-center">
            <h3 className="text-[20px] font-bold text-gray-900 mb-3">{current.title}</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-sm mx-auto">
              {current.description}
            </p>
          </div>

          {/* Step dots */}
          <div className="flex justify-center items-center gap-1.5 mt-7">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === step
                    ? 'w-6 h-2 bg-violet-500'
                    : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-7 py-5 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-[13px] text-gray-400 hover:text-gray-600 font-medium transition-colors"
          >
            Skip tour
          </button>

          <div className="flex items-center gap-2">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="btn-secondary h-9 px-4 text-[13px] gap-1.5"
              >
                <ArrowLeft size={14} />
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="h-9 px-5 rounded-xl font-semibold text-[13px] text-white flex items-center gap-2 transition-all"
              style={{ background: 'linear-gradient(135deg, hsl(258,90%,62%) 0%, hsl(270,80%,56%) 100%)', boxShadow: '0 4px 12px hsl(258,90%,62%,0.35)' }}
            >
              {step < features.length - 1 ? 'Next' : 'Get Started'}
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
