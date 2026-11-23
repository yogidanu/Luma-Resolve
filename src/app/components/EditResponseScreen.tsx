import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Bold, Italic, AlignLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

interface EditResponseScreenProps {
  onBack: () => void;
  onSave: (response: string) => void;
  initialDraft: string;
  customerName: string;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function EditResponseScreen({
  onBack,
  onSave,
  initialDraft,
  customerName,
  isDarkMode,
  onToggleDarkMode
}: EditResponseScreenProps) {
  const [response, setResponse] = useState(initialDraft);
  const [toneLevel, setToneLevel] = useState(50);

  const handleInsertVariable = (variable: string) => {
    setResponse(prev => prev + `{{${variable}}}`);
  };

  const handleAIRewrite = () => {
    alert('AI is rewriting your response...');
  };

  const handleSave = () => {
    onSave(response);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-border/40 bg-card flex-shrink-0">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-xl font-semibold">Edit Response</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={onBack}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save & Return
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {/* Rich Text Toolbar */}
            <Card className="mb-4">
              <CardContent className="p-3 flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Bold size={16} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Italic size={16} />
                </Button>
                <Button variant="ghost" size="icon">
                  <AlignLeft size={16} />
                </Button>

                <Separator orientation="vertical" className="mx-2 h-6" />

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleInsertVariable('customer_name')}
                >
                  @customer_name
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleInsertVariable('ticket_id')}
                >
                  @ticket_id
                </Button>
              </CardContent>
            </Card>

            {/* Editor */}
            <Textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="min-h-[400px] rounded-t-lg rounded-b-lg text-base"
              placeholder="Write your response here..."
            />

            {/* Preview */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-sm">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {response.replace(/\{\{customer_name\}\}/g, customerName)}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[320px] border-l bg-muted/30 overflow-y-auto p-6 space-y-6">
          {/* Tone Slider */}
          <div>
            <h3 className="text-sm font-medium mb-4">Tone of Voice</h3>
            <input
              type="range"
              min="0"
              max="100"
              value={toneLevel}
              onChange={(e) => setToneLevel(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Formal</span>
              <span>Friendly</span>
            </div>
          </div>

          {/* AI Assist Button */}
          <div>
            <Button onClick={handleAIRewrite} className="w-full gap-2">
              <Sparkles size={16} />
              Rewrite with AI
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              AI will adjust the tone and improve clarity while keeping your message intact.
            </p>
          </div>

          {/* Insert Variables */}
          <div>
            <h3 className="text-sm font-medium mb-3">Insert Variables</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => handleInsertVariable('customer_name')}
              >
                Customer Name
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => handleInsertVariable('ticket_id')}
              >
                Ticket ID
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={() => handleInsertVariable('company_name')}
              >
                Company Name
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-sm font-medium mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="secondary" size="sm" className="w-full justify-start text-xs">
                Make more empathetic
              </Button>
              <Button variant="secondary" size="sm" className="w-full justify-start text-xs">
                Make more concise
              </Button>
              <Button variant="secondary" size="sm" className="w-full justify-start text-xs">
                Add technical details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}