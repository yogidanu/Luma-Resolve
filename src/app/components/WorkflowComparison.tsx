import React from 'react';
import { CheckCircle, Clock, AlertCircle, Play, Send } from 'lucide-react';

export function WorkflowComparison() {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-6 max-w-6xl">
      <h2 className="text-2xl font-semibold mb-2">Resolution Workflow Comparison</h2>
      <p className="text-sm text-neutral-600 mb-8">
        Understanding how single-issue vs multiple-issue tickets are resolved
      </p>

      <div className="grid grid-cols-2 gap-8">
        {/* Single Issue Column */}
        <div className="border border-blue-200 rounded-lg p-6 bg-blue-50/30">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Single Issue Ticket</h3>
          </div>
          <p className="text-xs text-neutral-500 mb-4">Example: TKT-1001, TKT-1002, TKT-1003</p>

          {/* Workflow Steps */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700">
                  AI
                </div>
                <span className="font-medium text-sm">AI Identifies Issue</span>
              </div>
              <p className="text-xs text-neutral-600 ml-8">
                Automatic: AI analyzes ticket, identifies root cause, suggests 3-5 steps
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">
                  1
                </div>
                <span className="font-medium text-sm">Agent Reviews Steps</span>
              </div>
              <p className="text-xs text-neutral-600 ml-8">
                Manual: Agent sees Suggested Steps Card with checkboxes
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">
                  2
                </div>
                <span className="font-medium text-sm">Agent Works & Checks Off</span>
              </div>
              <div className="ml-8 space-y-2">
                <p className="text-xs text-neutral-600">
                  Manual: Agent performs each step and checks it off:
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span className="text-neutral-700">☑ Step 1 - Verify configuration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span className="text-neutral-700">☑ Step 2 - Apply fix</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span className="text-neutral-700">☑ Step 3 - Provide docs</span>
                  </div>
                </div>
                <div className="bg-neutral-100 rounded px-2 py-1 mt-2">
                  <span className="text-xs font-medium">Progress: 3/3 Complete ✓</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Send className="w-3 h-3 text-blue-700" />
                </div>
                <span className="font-medium text-sm">Agent Sends Response</span>
              </div>
              <p className="text-xs text-neutral-600 ml-8">
                Manual: Click "Approve & Send" button
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700">
                  AI
                </div>
                <span className="font-medium text-sm">System Resolves Ticket</span>
              </div>
              <div className="ml-8 text-xs text-neutral-600 space-y-1">
                <p>Automatic:</p>
                <p>• Sends email to customer</p>
                <p>• Marks ticket as resolved</p>
                <p>• Updates timeline & stats</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-6 bg-blue-100 rounded-lg p-3">
            <p className="text-xs font-medium text-blue-900">
              ⏱️ Resolution Time: 5-15 minutes
            </p>
            <p className="text-xs text-blue-800 mt-1">
              Simple workflow: Check off steps → Send response → Done
            </p>
          </div>
        </div>

        {/* Multiple Issues Column */}
        <div className="border border-amber-200 rounded-lg p-6 bg-amber-50/30">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold">Multiple Issues Ticket</h3>
          </div>
          <p className="text-xs text-neutral-500 mb-4">Example: TKT-1004</p>

          {/* Workflow Steps */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700">
                  AI
                </div>
                <span className="font-medium text-sm">AI Identifies Issues</span>
              </div>
              <p className="text-xs text-neutral-600 ml-8">
                Automatic: AI separates into 3+ distinct problems with separate resolutions
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">
                  1
                </div>
                <span className="font-medium text-sm">Agent Reviews Issues</span>
              </div>
              <p className="text-xs text-neutral-600 ml-8">
                Manual: Agent sees Multiple Issues Card with separate progress trackers
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">
                  2
                </div>
                <span className="font-medium text-sm">Agent Works Per Issue</span>
              </div>
              <div className="ml-8 space-y-3">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-neutral-700">Issue #1: Authentication</p>
                  <div className="flex items-center gap-2">
                    <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Start</button>
                    <span className="text-xs text-neutral-500">→</span>
                    <button className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Update Progress</button>
                    <span className="text-xs text-neutral-500">→</span>
                    <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Mark Resolved</button>
                  </div>
                  <div className="bg-green-100 h-1.5 rounded-full mt-1">
                    <div className="bg-green-500 h-full w-full rounded-full"></div>
                  </div>
                  <span className="text-xs text-green-700">✓ Resolved</span>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-medium text-neutral-700">Issue #2: Missing Data</p>
                  <div className="flex items-center gap-2">
                    <button className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">In Progress</button>
                  </div>
                  <div className="bg-neutral-100 h-1.5 rounded-full mt-1">
                    <div className="bg-amber-500 h-full w-3/5 rounded-full"></div>
                  </div>
                  <span className="text-xs text-amber-700">⚙ 60% Complete</span>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-medium text-neutral-700">Issue #3: Performance</p>
                  <div className="flex items-center gap-2">
                    <button className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Pending</button>
                  </div>
                  <div className="bg-neutral-100 h-1.5 rounded-full mt-1">
                    <div className="bg-neutral-300 h-full w-0 rounded-full"></div>
                  </div>
                  <span className="text-xs text-neutral-500">⏳ Not Started</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Send className="w-3 h-3 text-blue-700" />
                </div>
                <span className="font-medium text-sm">Agent Sends Updates</span>
              </div>
              <p className="text-xs text-neutral-600 ml-8">
                Manual: Agent can send updates after each issue resolved or send final response when all complete
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700">
                  AI
                </div>
                <span className="font-medium text-sm">System Auto-Updates</span>
              </div>
              <div className="ml-8 text-xs text-neutral-600 space-y-1">
                <p>Automatic per issue:</p>
                <p>• Sends notifications</p>
                <p>• Updates timeline</p>
                <p>• Tracks overall progress</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-6 bg-amber-100 rounded-lg p-3">
            <p className="text-xs font-medium text-amber-900">
              ⏱️ Resolution Time: 20-60 minutes
            </p>
            <p className="text-xs text-amber-800 mt-1">
              Complex workflow: Start → Update → Resolve (per issue) → All done
            </p>
          </div>
        </div>
      </div>

      {/* Key Differences Table */}
      <div className="mt-8 border-t border-neutral-200 pt-6">
        <h4 className="font-semibold mb-4">Key Differences</h4>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="text-left py-2 font-semibold">Aspect</th>
              <th className="text-left py-2 font-semibold">Single Issue</th>
              <th className="text-left py-2 font-semibold">Multiple Issues</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            <tr className="border-b border-neutral-100">
              <td className="py-3 text-neutral-600">Issue Detection</td>
              <td className="py-3">1 problem identified</td>
              <td className="py-3">3+ separate problems identified</td>
            </tr>
            <tr className="border-b border-neutral-100">
              <td className="py-3 text-neutral-600">UI Component</td>
              <td className="py-3">Suggested Steps Card (checkboxes)</td>
              <td className="py-3">Multiple Issues Card (per-issue tracking)</td>
            </tr>
            <tr className="border-b border-neutral-100">
              <td className="py-3 text-neutral-600">Progress Tracking</td>
              <td className="py-3">Single progress bar (0-100%)</td>
              <td className="py-3">Multiple progress bars (one per issue)</td>
            </tr>
            <tr className="border-b border-neutral-100">
              <td className="py-3 text-neutral-600">Agent Actions</td>
              <td className="py-3">Check off steps → Send response</td>
              <td className="py-3">Start → Update → Mark Resolved (per issue)</td>
            </tr>
            <tr className="border-b border-neutral-100">
              <td className="py-3 text-neutral-600">Status Flow</td>
              <td className="py-3">Open → Resolved</td>
              <td className="py-3">Pending → In Progress → Completed (per issue)</td>
            </tr>
            <tr>
              <td className="py-3 text-neutral-600">Complexity</td>
              <td className="py-3">Simple: 3-5 steps</td>
              <td className="py-3">Complex: Multiple concurrent issues</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
        <p className="text-sm font-medium text-purple-900 mb-2">
          🎯 Both workflows share the same principles:
        </p>
        <div className="grid grid-cols-2 gap-4 text-xs text-purple-800">
          <div>
            <p>✓ Agent-driven (manual control)</p>
            <p>✓ System-automated (notifications, logging)</p>
            <p>✓ Real-time progress tracking</p>
          </div>
          <div>
            <p>✓ Customer notifications</p>
            <p>✓ Timeline updates</p>
            <p>✓ Audit trail logging</p>
          </div>
        </div>
      </div>
    </div>
  );
}
