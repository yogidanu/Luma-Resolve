import React from 'react';
import { Play, Clock, CheckCircle, AlertCircle, ArrowRight, User, Zap } from 'lucide-react';

export function WorkflowExplainer() {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-6 max-w-4xl">
      <h2 className="text-xl font-semibold mb-2">How Multiple Issues Get Resolved</h2>
      <p className="text-sm text-neutral-600 mb-6">
        Understanding the workflow from issue identification to resolution
      </p>

      <div className="space-y-6">
        {/* Step 1: AI Identification */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#4c84ff]/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#4c84ff]" />
            </div>
            <div className="w-0.5 h-full bg-neutral-200 mt-2" />
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold">Step 1: AI Identifies Issues</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Automatic</span>
            </div>
            <p className="text-sm text-neutral-600 mb-3">
              When a ticket is created, AI scans the message and automatically identifies multiple distinct problems.
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded p-3 text-xs space-y-1">
              <p className="font-medium">Example:</p>
              <p className="text-neutral-600">
                "We have login issues, missing data, and slow performance" →
              </p>
              <p className="text-neutral-600">
                AI creates: Issue #1 (Auth), Issue #2 (Data), Issue #3 (Performance)
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: Agent Starts */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <User className="w-5 h-5 text-amber-600" />
            </div>
            <div className="w-0.5 h-full bg-neutral-200 mt-2" />
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold">Step 2: Agent Starts Working</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Manual Action</span>
            </div>
            <p className="text-sm text-neutral-600 mb-3">
              Agent clicks the <span className="font-medium">"Start"</span> button on a pending issue to begin work.
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded p-3 text-xs">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-neutral-400" />
                <span className="font-medium">Pending (0%)</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
                <Play className="w-4 h-4 text-amber-500" />
                <span className="font-medium text-amber-600">In Progress (10%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Update Progress */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div className="w-0.5 h-full bg-neutral-200 mt-2" />
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold">Step 3: Update Progress (Optional)</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Manual Action</span>
            </div>
            <p className="text-sm text-neutral-600 mb-3">
              As agent works on the issue, they click <span className="font-medium">"Update Progress"</span> to track completion.
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded p-3 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-amber-500" />
                </div>
                <span>30% - "Investigating issue..."</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="w-3/5 h-full bg-amber-500" />
                </div>
                <span>60% - "Applying fix..."</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Mark Resolved */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="w-0.5 h-full bg-neutral-200 mt-2" />
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold">Step 4: Mark as Resolved</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Manual Action</span>
            </div>
            <p className="text-sm text-neutral-600 mb-3">
              When the fix is complete and tested, agent clicks <span className="font-medium">"Mark Resolved"</span>.
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded p-3 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                <span className="font-medium">In Progress (60%)</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-600">Resolved (100%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: System Actions */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold">Step 5: System Automation</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Automatic</span>
            </div>
            <p className="text-sm text-neutral-600 mb-3">
              When agent marks an issue resolved, the system automatically:
            </p>
            <ul className="text-sm text-neutral-600 space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span>Updates issue status to "Completed" in database</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span>Sends notification to customer: "Issue #1 has been resolved"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span>Adds timeline entry to conversation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span>Updates ticket status if all issues are resolved</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span>Logs action in audit trail</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-blue-600" />
          Key Takeaway
        </h4>
        <p className="text-sm text-neutral-700">
          <strong>Agent-driven workflow:</strong> Issues progress through states based on agent actions (Start, Update Progress, Mark Resolved). 
          The system handles automation (notifications, timeline updates, logging) while the agent maintains full control over resolution tracking.
        </p>
      </div>

      {/* Future Enhancement Box */}
      <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
          <Zap className="w-4 h-4 text-purple-600" />
          Future Enhancement: Auto-Detection
        </h4>
        <p className="text-sm text-neutral-700 mb-2">
          The system could automatically suggest marking issues as resolved by monitoring:
        </p>
        <ul className="text-sm text-neutral-600 space-y-1">
          <li>• Successful login attempts (for auth issues)</li>
          <li>• Page load times (for performance issues)</li>
          <li>• Data sync completion (for data issues)</li>
        </ul>
        <p className="text-xs text-neutral-500 mt-2 italic">
          Agent would still have final approval before marking resolved.
        </p>
      </div>
    </div>
  );
}
