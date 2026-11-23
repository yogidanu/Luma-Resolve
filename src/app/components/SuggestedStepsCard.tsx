import React, { useState } from 'react';
import { Lightbulb, ChevronRight, CheckCircle, Circle } from 'lucide-react';
import { Button } from './ui/button';

interface SuggestedStepsCardProps {
  steps: string[];
  onViewReasoning: () => void;
  onStepsCompleted?: (completedSteps: boolean[]) => void;
}

export function SuggestedStepsCard({ steps, onViewReasoning, onStepsCompleted }: SuggestedStepsCardProps) {
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(new Array(steps.length).fill(false));

  const handleToggleStep = (index: number) => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[index] = !newCompletedSteps[index];
    setCompletedSteps(newCompletedSteps);
    
    // Notify parent component of completion state
    if (onStepsCompleted) {
      onStepsCompleted(newCompletedSteps);
    }
  };

  const completedCount = completedSteps.filter(Boolean).length;
  const totalCount = steps.length;
  const allCompleted = completedCount === totalCount;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <div className="bg-card relative rounded-[10px] border border-border shadow-sm w-full">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
        <h3 className="font-semibold text-[14px] leading-[14px] tracking-[0.7px] uppercase text-muted-foreground">
          Suggested Steps
        </h3>
        <div className="flex items-center gap-2">
          <div className={`${allCompleted ? 'bg-emerald-500/10' : 'bg-muted'} rounded-full px-3 py-1.5 h-[24px] flex items-center gap-1.5`}>
            {allCompleted && <CheckCircle className="size-3.5 text-emerald-600" />}
            <p className={`font-semibold text-[12px] leading-[16px] ${allCompleted ? 'text-emerald-700 dark:text-emerald-400' : 'text-foreground'}`}>
              {completedCount}/{totalCount} Complete
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 pb-5">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ease-out ${allCompleted ? 'bg-emerald-500' : 'bg-primary'}`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex flex-col gap-4">
        {/* Steps */}
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start gap-3.5 pr-8">
            <div className="bg-primary/10 rounded-full size-[28px] flex items-center justify-center shrink-0 mt-0.5">
              <p className="font-bold text-[13px] leading-[16px] text-primary">
                {index + 1}
              </p>
            </div>
            <p className={`font-normal text-[14px] leading-[24px] text-foreground/90 flex-1 ${completedSteps[index] ? 'line-through text-muted-foreground' : ''}`}>
              {step}
            </p>
            <button
              onClick={() => handleToggleStep(index)}
              className={`absolute right-0 top-1 rounded-full size-[24px] flex items-center justify-center shrink-0 transition-all ${
                completedSteps[index] 
                  ? 'bg-emerald-500 border-2 border-emerald-500 hover:bg-emerald-600' 
                  : 'bg-card border-2 border-border hover:border-primary hover:shadow-sm'
              }`}
            >
              {completedSteps[index] ? (
                <CheckCircle className="size-[16px] text-white fill-white" />
              ) : (
                <Circle className="size-[14px] text-muted-foreground" />
              )}
            </button>
          </div>
        ))}

        {/* Button */}
        <button
          onClick={onViewReasoning}
          className="bg-card border border-primary rounded-[6.8px] h-[38px] w-full mt-2 font-medium text-[14px] leading-[20px] text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Show detailed reasoning
        </button>
      </div>
    </div>
  );
}