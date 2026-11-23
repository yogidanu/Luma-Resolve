import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Layout, X, RotateCcw } from 'lucide-react';

interface LayoutConfig {
  leftPanel: number;
  centerPanel: number;
  rightPanel: number;
}

interface LayoutCustomizerProps {
  currentLayout: LayoutConfig;
  onApply: (layout: LayoutConfig) => void;
  onClose: () => void;
}

const PRESET_LAYOUTS = {
  default: { leftPanel: 22, centerPanel: 52, rightPanel: 26 },
  aiExpanded: { leftPanel: 18, centerPanel: 48, rightPanel: 34 },
  contextFocus: { leftPanel: 30, centerPanel: 50, rightPanel: 20 },
  centerFocus: { leftPanel: 18, centerPanel: 64, rightPanel: 18 },
  compact: { leftPanel: 20, centerPanel: 55, rightPanel: 25 }
};

export function LayoutCustomizer({ currentLayout, onApply, onClose }: LayoutCustomizerProps) {
  const [layout, setLayout] = useState<LayoutConfig>(currentLayout);

  const handleSliderChange = (panel: keyof LayoutConfig, value: number) => {
    const total = 100;
    const otherTwoPanels = Object.keys(layout).filter(k => k !== panel) as (keyof LayoutConfig)[];
    
    // Calculate how much space is left for the other two panels
    const remaining = total - value;
    const otherPanelRatio = layout[otherTwoPanels[0]] / (layout[otherTwoPanels[0]] + layout[otherTwoPanels[1]]);
    
    setLayout({
      ...layout,
      [panel]: value,
      [otherTwoPanels[0]]: Math.round(remaining * otherPanelRatio),
      [otherTwoPanels[1]]: Math.round(remaining * (1 - otherPanelRatio))
    });
  };

  const applyPreset = (preset: LayoutConfig) => {
    setLayout(preset);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <Card className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Layout size={24} className="text-[#4C84FF]" />
              <h2 className="text-[20px]">Customize Layout</h2>
            </div>
            <button
              onClick={onClose}
              className="text-[#5E5E5E] hover:text-[#1F1F1F] text-[24px]"
            >
              ×
            </button>
          </div>

          {/* Visual Preview */}
          <div className="mb-6 p-4 bg-[#F6F6F7] rounded-[8px]">
            <div className="text-[12px] text-[#5E5E5E] mb-3">Preview</div>
            <div className="flex gap-2 h-32 bg-white rounded-[6px] overflow-hidden border border-[#EAEAED]">
              <div
                className="bg-[#F0F4FF] flex items-center justify-center text-[11px] text-[#5E5E5E] border-r border-[#EAEAED]"
                style={{ width: `${layout.leftPanel}%` }}
              >
                <div>
                  <div className="text-center mb-1">Customer</div>
                  <div className="text-[#4C84FF]">{layout.leftPanel}%</div>
                </div>
              </div>
              <div
                className="bg-white flex items-center justify-center text-[11px] text-[#5E5E5E] border-r border-[#EAEAED]"
                style={{ width: `${layout.centerPanel}%` }}
              >
                <div>
                  <div className="text-center mb-1">Ticket</div>
                  <div className="text-[#4C84FF]">{layout.centerPanel}%</div>
                </div>
              </div>
              <div
                className="bg-[#E6F9F3] flex items-center justify-center text-[11px] text-[#5E5E5E]"
                style={{ width: `${layout.rightPanel}%` }}
              >
                <div>
                  <div className="text-center mb-1">AI Assistant</div>
                  <div className="text-[#4C84FF]">{layout.rightPanel}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Preset Layouts */}
          <div className="mb-6">
            <div className="text-[14px] mb-3">Preset Layouts</div>
            <div className="grid grid-cols-5 gap-2">
              {Object.entries(PRESET_LAYOUTS).map(([name, preset]) => (
                <button
                  key={name}
                  onClick={() => applyPreset(preset)}
                  className={`p-3 border-2 rounded-[6px] text-[12px] transition-all ${
                    JSON.stringify(layout) === JSON.stringify(preset)
                      ? 'border-[#4C84FF] bg-[#F0F4FF]'
                      : 'border-[#EAEAED] hover:border-[#D7D7DA]'
                  }`}
                >
                  <div className="capitalize mb-2">{name.replace(/([A-Z])/g, ' $1').trim()}</div>
                  <div className="flex gap-0.5 h-8">
                    <div className="bg-[#4C84FF]" style={{ width: `${preset.leftPanel}%` }} />
                    <div className="bg-[#00C48C]" style={{ width: `${preset.centerPanel}%` }} />
                    <div className="bg-[#FFA500]" style={{ width: `${preset.rightPanel}%` }} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Sliders */}
          <div className="space-y-4 mb-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[13px]">Left Panel (Customer Context)</label>
                <span className="text-[13px] text-[#4C84FF]">{layout.leftPanel}%</span>
              </div>
              <input
                type="range"
                min="15"
                max="35"
                value={layout.leftPanel}
                onChange={(e) => handleSliderChange('leftPanel', parseInt(e.target.value))}
                className="w-full h-2 bg-[#EAEAED] rounded-full appearance-none cursor-pointer accent-[#4C84FF]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[13px]">Center Panel (Ticket Workspace)</label>
                <span className="text-[13px] text-[#00C48C]">{layout.centerPanel}%</span>
              </div>
              <input
                type="range"
                min="40"
                max="70"
                value={layout.centerPanel}
                onChange={(e) => handleSliderChange('centerPanel', parseInt(e.target.value))}
                className="w-full h-2 bg-[#EAEAED] rounded-full appearance-none cursor-pointer accent-[#00C48C]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[13px]">Right Panel (AI Assistant)</label>
                <span className="text-[13px] text-[#FFA500]">{layout.rightPanel}%</span>
              </div>
              <input
                type="range"
                min="15"
                max="40"
                value={layout.rightPanel}
                onChange={(e) => handleSliderChange('rightPanel', parseInt(e.target.value))}
                className="w-full h-2 bg-[#EAEAED] rounded-full appearance-none cursor-pointer accent-[#FFA500]"
              />
            </div>
          </div>

          {/* Info */}
          <div className="p-3 bg-[#F0F4FF] rounded-[6px] text-[11px] text-[#5E5E5E] mb-6">
            💡 Tip: The tri-panel layout is optimized for human-AI collaboration. Adjust to match your workflow preferences.
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Button
              variant="secondary"
              onClick={() => applyPreset(PRESET_LAYOUTS.default)}
            >
              <RotateCcw size={16} />
              Reset to Default
            </Button>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  onApply(layout);
                  onClose();
                }}
              >
                Apply Layout
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
