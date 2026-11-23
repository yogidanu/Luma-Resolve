export const mockTickets = [
  // EDGE CASE 1: LOW CONFIDENCE - Red Badge
  {
    id: 'TKT-9001',
    subject: 'Strange error message appearing randomly',
    status: 'open',
    priority: 'high',
    customer: {
      name: 'Alex Morgan',
      id: 'CUST-7821',
      email: 'alex.morgan@techventure.com',
      company: 'TechVenture Labs',
      avatar: 'AM',
      tier: 'Enterprise',
      tags: ['VIP', 'Technical']
    },
    message: "Sometimes I see a weird error popup that says 'ERR_UNKNOWN_X42' but it disappears before I can screenshot it. It happens maybe once every few hours? Not sure what triggers it. It might be related to my workflow but I'm not certain.",
    attachments: [],
    created: '30 minutes ago',
    aiSummary: {
      rootCause: 'Insufficient data to determine root cause. Error code not found in system logs or knowledge base.',
      keyFacts: [
        'Error code ERR_UNKNOWN_X42 not documented in error catalog',
        'Intermittent issue with no clear reproduction steps',
        'No similar tickets found in historical data',
        'User description lacks technical details needed for diagnosis'
      ],
      similarCases: 0,
      confidence: 'low' as const,
      percentage: 42,
      suggestedSteps: [
        'Request detailed reproduction steps from customer',
        'Ask customer to enable debug logging',
        'Escalate to senior technical support for investigation'
      ]
    },
    aiDraft: "Hi Alex,\n\nThank you for reporting this issue. I need to gather more information to help diagnose this error.\n\nCould you please:\n1. Enable browser console logging and capture the error when it appears\n2. Note what actions you're performing when the error occurs\n3. Check if it happens on specific pages or features\n\nThis will help our team investigate the issue more effectively.\n\nBest regards",
    aiReasoning: {
      steps: [
        'Searched error code database - ERR_UNKNOWN_X42 not found',
        'Checked application logs - no matching error patterns',
        'Analyzed customer description - lacks specific reproduction steps',
        'Searched historical tickets - zero similar cases',
        'Unable to establish confident diagnosis path'
      ],
      dataPoints: [
        'Error code: ERR_UNKNOWN_X42 - NOT FOUND in documentation',
        'Occurrence pattern: Intermittent, no clear trigger',
        'Browser/environment details: Not provided',
        'Similar historical cases: 0 matches'
      ],
      confidence: 'Low confidence (42%) due to unknown error code, lack of reproduction steps, no historical pattern matches, and insufficient technical details.'
    },
    timeline: [
      { action: 'Customer reported intermittent error', timestamp: '30 minutes ago' },
      { action: 'AI analysis initiated', timestamp: '30 minutes ago' },
      { action: 'Error code lookup failed - not in catalog', timestamp: '29 minutes ago' },
      { action: 'Flagged for human review', timestamp: '29 minutes ago' }
    ],
    assignedTo: 'Unassigned',
    pastTickets: [
      { id: 'TKT-7234', subject: 'Feature request for dark mode', status: 'Resolved', date: '1 month ago' }
    ]
  },

  // EDGE CASE 2: CONFLICTING DATA - Yellow Badge
  {
    id: 'TKT-9002',
    subject: 'Double charged for subscription this month',
    status: 'open',
    priority: 'high',
    customer: {
      name: 'Jennifer Martinez',
      id: 'CUST-4512',
      email: 'j.martinez@globalsales.com',
      company: 'Global Sales Corp',
      avatar: 'JM',
      tier: 'Pro',
      tags: ['VIP', 'Billing']
    },
    message: "I was charged twice for my Pro subscription this month - once on Nov 15th for $99 and again on Nov 18th for $99. This is definitely wrong. I've been a customer for 2 years and this has never happened before. Please refund the duplicate charge immediately.",
    attachments: ['bank-statement.pdf'],
    created: '1 hour ago',
    conflictingData: true,
    aiSummary: {
      rootCause: 'Data conflict detected: Payment records and customer report are inconsistent.',
      keyFacts: [
        'Customer claims: Two charges of $99 on Nov 15 and Nov 18',
        'Stripe records show: Single successful charge of $99 on Nov 15',
        'Customer timeline shows: Subscription renewed on Nov 15 (normal schedule)',
        'Bank statement attachment needed for verification'
      ],
      similarCases: 2,
      confidence: 'medium' as const,
      percentage: 68,
      suggestedSteps: [
        'Review customer bank statement attachment',
        'Cross-reference with payment gateway records',
        'Check for any pending/failed transactions',
        'Investigate potential display issue in customer portal'
      ]
    },
    aiDraft: "Hi Jennifer,\n\nThank you for bringing this to our attention. I understand your concern about the potential duplicate charge.\n\nI've reviewed our payment records and found some conflicting information that I need to investigate further:\n- Our system shows one successful charge of $99 on Nov 15\n- However, you're reporting a second charge on Nov 18\n\nI'm escalating this to our billing team to:\n1. Review your bank statement\n2. Check for any authorization holds that may appear as charges\n3. Verify there are no system glitches\n\nI'll have an update for you within 2 hours.\n\nThank you for your patience!",
    aiReasoning: {
      steps: [
        'Checked Stripe payment history - found single charge on Nov 15',
        'Reviewed customer subscription timeline - renewal on Nov 15 only',
        'Compared with customer claim - discrepancy identified',
        'Checked for failed/pending transactions - none found',
        'Flagged for manual billing review due to data conflict'
      ],
      dataPoints: [
        'Stripe charge: $99 on Nov 15, 2024 - Status: Succeeded',
        'Customer claim: Two charges ($99 on Nov 15 AND Nov 18)',
        'Subscription renewal date: Nov 15 (matches scheduled date)',
        'No additional charges found in Nov 18 transaction log',
        'CONFLICT: Customer report vs. system records'
      ],
      confidence: 'Medium confidence (68%) due to conflicting data between customer report and payment gateway records. Requires manual verification.'
    },
    timeline: [
      { action: 'Customer reported double charge', timestamp: '1 hour ago' },
      { action: 'AI detected data conflict', timestamp: '1 hour ago' },
      { action: 'Flagged for billing team review', timestamp: '59 minutes ago' }
    ],
    assignedTo: 'Unassigned',
    pastTickets: [
      { id: 'TKT-3456', subject: 'Plan upgrade inquiry', status: 'Resolved', date: '6 months ago' },
      { id: 'TKT-2891', subject: 'Invoice download request', status: 'Resolved', date: '1 year ago' }
    ]
  },

  // EDGE CASE 3: AMBIGUOUS INTENT - Blue Badge with Multiple Issues
  {
    id: 'TKT-9003',
    subject: 'Multiple problems with my account',
    status: 'open',
    priority: 'medium',
    customer: {
      name: 'Robert Kim',
      id: 'CUST-6234',
      email: 'r.kim@innovatetech.io',
      company: 'InnovateTech Solutions',
      avatar: 'RK',
      tier: 'Pro',
      tags: ['Technical']
    },
    message: "I'm having several issues: First, I can't seem to reset my password - the email never arrives. Second, when I tried to update my payment method, it said 'invalid card' but I know the card is fine (I just used it at a store). Also, I was charged last month but I thought I cancelled my subscription in October? Can someone help sort this out?",
    attachments: [],
    created: '2 hours ago',
    ambiguousIntent: true,
    multipleIssues: [
      {
        id: 1,
        title: 'Password Reset Email Not Received',
        description: 'Customer cannot receive password reset emails',
        priority: 'high',
        category: 'Account Access',
        status: 'pending',
        estimatedTime: '15 min',
        aiConfidence: 85,
        steps: [
          'Check spam/junk folder for reset email',
          'Verify email address on file is correct',
          'Manually trigger password reset from admin panel',
          'Consider email deliverability issues'
        ]
      },
      {
        id: 2,
        title: 'Payment Method Update Failed',
        description: 'Card validation error when updating payment method',
        priority: 'medium',
        category: 'Billing',
        status: 'pending',
        estimatedTime: '10 min',
        aiConfidence: 78,
        steps: [
          'Verify card details entered correctly',
          'Check if card supports international transactions',
          'Try alternative payment method',
          'Check for fraud prevention blocks'
        ]
      },
      {
        id: 3,
        title: 'Unexpected Subscription Charge',
        description: 'Customer believes subscription was cancelled but was still charged',
        priority: 'high',
        category: 'Billing',
        status: 'pending',
        estimatedTime: '20 min',
        aiConfidence: 72,
        steps: [
          'Review subscription cancellation history',
          'Check if cancellation was completed successfully',
          'Verify charge date vs. cancellation date',
          'Process refund if cancellation confirmed'
        ]
      }
    ],
    aiSummary: {
      rootCause: 'Multiple distinct issues reported in single ticket: password reset, payment update, and subscription billing.',
      keyFacts: [
        'Issue 1: Password reset emails not being received',
        'Issue 2: Payment method update rejected with "invalid card" error',
        'Issue 3: Unexpected charge despite reported cancellation',
        'Each issue requires different resolution path and team involvement'
      ],
      similarCases: 5,
      confidence: 'medium' as const,
      percentage: 74,
      suggestedSteps: [
        'Clarify which issue is most urgent for customer',
        'Split into separate tickets for efficient handling',
        'Address account access issue first (password reset)',
        'Then investigate billing concerns'
      ]
    },
    aiDraft: "Hi Robert,\n\nThank you for reaching out. I can see you're experiencing several different issues. To help you most effectively, I'd like to address each one:\n\n1. **Password Reset**: I'll manually trigger a reset email and verify your email address\n2. **Payment Method**: I'll check why the card was rejected\n3. **Subscription Charge**: I'll review your cancellation history\n\nWhich issue is most urgent for you right now? This will help me prioritize and get you the fastest resolution.\n\nBest regards",
    aiReasoning: {
      steps: [
        'Analyzed ticket content - identified 3 distinct issues',
        'Issue 1: Password reset (account access) - HIGH priority',
        'Issue 2: Payment method failure (billing system) - MEDIUM priority',
        'Issue 3: Unexpected charge (billing dispute) - HIGH priority',
        'Recommended splitting into separate tickets for optimal handling'
      ],
      dataPoints: [
        'Multiple issue types: Authentication, Payment Processing, Billing Dispute',
        'Requires different teams: Support (password), Billing (payment + charge)',
        'Customer frustration level: Moderate-High (multiple failures)',
        'Optimal approach: Triage and prioritize with customer input'
      ],
      confidence: 'Medium confidence (74%) - clear issues identified but requires customer prioritization to determine optimal resolution sequence.'
    },
    timeline: [
      { action: 'Customer reported multiple issues', timestamp: '2 hours ago' },
      { action: 'AI detected 3 distinct problems', timestamp: '2 hours ago' },
      { action: 'Flagged as ambiguous intent - needs triage', timestamp: '2 hours ago' }
    ],
    assignedTo: 'Unassigned',
    pastTickets: [
      { id: 'TKT-5621', subject: 'Plan features question', status: 'Resolved', date: '3 months ago' }
    ]
  },

  // EDGE CASE 4: BROKEN KB LINK - Gray Badge with KB Error
  {
    id: 'TKT-9004',
    subject: 'API authentication returning 401 errors',
    status: 'open',
    priority: 'high',
    customer: {
      name: 'Diana Foster',
      id: 'CUST-8901',
      email: 'd.foster@devstudio.com',
      company: 'DevStudio Pro',
      avatar: 'DF',
      tier: 'Enterprise',
      tags: ['VIP', 'Technical', 'API']
    },
    message: "Our production application started throwing 401 Unauthorized errors about 3 hours ago. We haven't changed anything in our code. The API key is still valid (checked the dashboard). This is blocking our entire service - need urgent help!",
    attachments: ['error-logs.txt'],
    created: '45 minutes ago',
    kbError: true,
    aiSummary: {
      rootCause: 'Unable to verify against knowledge base - KB connection unavailable. Limited AI analysis possible.',
      keyFacts: [
        'Customer reports sudden 401 errors starting 3 hours ago',
        'API key appears valid in dashboard',
        'No code changes on customer side',
        'Production environment affected - HIGH urgency'
      ],
      similarCases: 0,
      confidence: 'low' as const,
      percentage: 38,
      suggestedSteps: [
        'Manually check API service status',
        'Verify API key permissions and quotas',
        'Check for any recent platform updates',
        'Review error logs attachment for specific error details'
      ]
    },
    aiDraft: "Hi Diana,\n\nI understand this is urgent and affecting your production service. I'm investigating the 401 errors immediately.\n\nWhile our knowledge base is temporarily unavailable, I'm checking:\n1. Current API service status\n2. Your API key permissions and rate limits\n3. Any recent platform changes\n4. Your error logs for specific details\n\nI'm escalating this to our API team for immediate attention. You should expect an update within 15 minutes.\n\nThank you for your patience during this urgent issue.",
    aiReasoning: {
      steps: [
        'Attempted KB lookup for 401 error patterns - CONNECTION FAILED',
        'Attempted KB lookup for API authentication docs - CONNECTION FAILED',
        'Attempted historical ticket search - LIMITED RESULTS (KB offline)',
        'Falling back to basic error pattern recognition',
        'Unable to access recommended solutions library'
      ],
      dataPoints: [
        'Error type: 401 Unauthorized (API authentication failure)',
        'Onset: ~3 hours ago (sudden occurrence)',
        'API key status: Valid (per customer dashboard check)',
        'KB Status: OFFLINE - Unable to access help articles',
        'Recommended articles: UNAVAILABLE',
        'Similar case analysis: INCOMPLETE (KB dependency)'
      ],
      confidence: 'Low confidence (38%) due to knowledge base connection failure. Cannot access API troubleshooting guides, known issue database, or recommended solutions.'
    },
    timeline: [
      { action: 'Production API errors started', timestamp: '3 hours ago' },
      { action: 'Customer reported issue', timestamp: '45 minutes ago' },
      { action: 'AI analysis attempted', timestamp: '45 minutes ago' },
      { action: 'KB connection failed - limited analysis', timestamp: '44 minutes ago' },
      { action: 'Flagged for immediate manual review', timestamp: '44 minutes ago' }
    ],
    assignedTo: 'Unassigned',
    pastTickets: [
      { id: 'TKT-7845', subject: 'API rate limit increase request', status: 'Resolved', date: '2 weeks ago' },
      { id: 'TKT-7623', subject: 'Webhook configuration help', status: 'Resolved', date: '1 month ago' }
    ]
  },

  {
    id: 'TKT-1001',
    subject: 'Unable to access premium features after payment',
    status: 'open',
    priority: 'high',
    customer: {
      name: 'Sarah Chen',
      id: 'CUST-5042',
      email: 'sarah.chen@example.com',
      company: 'TechCorp Inc.',
      avatar: 'SC',
      tier: 'Enterprise',
      tags: ['VIP', 'Technical']
    },
    message: "I've just upgraded to the Enterprise plan and paid $299, but I still can't access any of the premium features. I've tried logging out and back in, but nothing has changed. This is urgent as we have a presentation tomorrow and need these features.",
    attachments: ['payment-receipt.pdf'],
    created: '2 hours ago',
    aiSummary: {
      rootCause: 'Payment processed successfully but user account permissions not automatically updated due to sync delay in billing system.',
      keyFacts: [
        'Payment of $299 confirmed in Stripe',
        'Account tier still shows "Pro" instead of "Enterprise"',
        'Similar cases resolved by manual permission refresh'
      ],
      similarCases: 3,
      confidence: 'high' as const,
      percentage: 94,
      suggestedSteps: [
        "Verify user's API key configuration",
        "Guide through permission refresh process",
        "Provide documentation link"
      ]
    },
    aiDraft: "Hi Sarah,\n\nThank you for upgrading to Enterprise! I can see your payment has been processed successfully.\n\nI've identified the issue - there was a sync delay between our billing and permissions systems. I've manually refreshed your account permissions, and you should now have full access to all Enterprise features.\n\nPlease try logging out and back in. Everything should work perfectly now.\n\nSorry for the inconvenience, and thank you for your patience!\n\nBest regards",
    aiReasoning: {
      steps: [
        'Analyzed payment records in Stripe - confirmed successful transaction of $299',
        'Checked account permissions table - found mismatch between payment tier and access level',
        'Cross-referenced with 3 similar historical tickets with same pattern',
        'Verified standard resolution time of < 5 minutes for permission refresh',
        'Confirmed no technical issues preventing manual intervention'
      ],
      dataPoints: [
        'Stripe payment ID: pi_3QxR8L2eZvKYlo2C0X4H9iKn - Status: Succeeded',
        'Account tier in database: "pro" | Expected: "enterprise"',
        'Last permission sync: 6 hours ago (should be real-time)',
        'Similar tickets resolved: TKT-0945, TKT-0823, TKT-0701'
      ],
      confidence: 'High confidence (94%) based on exact pattern match with 3 previous cases, clear data discrepancy, and straightforward resolution path with no dependencies.'
    },
    timeline: [
      { action: 'Upgraded to Enterprise plan', timestamp: '2 hours ago' },
      { action: 'Payment processed - $299', timestamp: '2 hours ago' },
      { action: 'Support ticket created', timestamp: '2 hours ago' },
      { action: 'AI analysis completed', timestamp: '2 hours ago' }
    ],
    assignedTo: 'Agent User',
    pastTickets: [
      { id: 'TKT-0892', subject: 'Question about API rate limits', status: 'Resolved', date: '3 weeks ago' },
      { id: 'TKT-0756', subject: 'Invoice not received', status: 'Resolved', date: '2 months ago' }
    ]
  },
  {
    id: 'TKT-1002',
    subject: 'Data export feature not working',
    status: 'open',
    priority: 'medium',
    customer: {
      name: 'Marcus Rodriguez',
      id: 'CUST-3891',
      email: 'marcus.r@company.com',
      company: 'DataFlow Solutions',
      avatar: 'MR',
      tier: 'Pro',
      tags: ['Technical']
    },
    assignedTo: 'Sarah Chen',
    message: "When I try to export my data to CSV, the download starts but the file is corrupted. I've tried multiple times with different date ranges. Can you help?",
    created: '5 hours ago',
    aiSummary: {
      rootCause: 'Known bug in CSV export module affecting datasets over 10,000 rows, fix scheduled for next release.',
      keyFacts: [
        'User has 14,500 records in their account',
        'Bug report #BUG-445 matches this exact behavior',
        'Workaround available: split exports into smaller date ranges'
      ],
      similarCases: 7,
      confidence: 'high' as const,
      percentage: 91,
      suggestedSteps: [
        "Verify user's data volume and export parameters",
        "Explain the known bug and timeline for fix",
        "Provide step-by-step workaround instructions"
      ]
    },
    aiDraft: "Hi Marcus,\n\nThank you for reaching out. I've identified the issue - there's a known bug affecting CSV exports for datasets larger than 10,000 rows. Your account has 14,500 records, which triggers this issue.\n\nOur engineering team is working on a fix for the next release (planned for next week).\n\nIn the meantime, here's a workaround:\n1. Split your export into smaller date ranges (about 3 months at a time)\n2. Each export will complete successfully\n3. You can then combine the CSV files\n\nI apologize for the inconvenience. I've added your ticket to the bug tracker to ensure you're notified once it's fixed.\n\nLet me know if you need help with the workaround!",
    aiReasoning: {
      steps: [
        'Checked user account data volume - 14,500 total records',
        'Searched bug database for "CSV export" - found matching issue BUG-445',
        'Verified bug affects datasets > 10,000 rows',
        'Confirmed 7 similar tickets with same pattern',
        'Identified documented workaround in knowledge base'
      ],
      dataPoints: [
        'User record count: 14,500 (exceeds 10,000 threshold)',
        'Bug report BUG-445: CSV export corruption for large datasets',
        'Engineering fix ETA: 7 days (scheduled for release v2.8.1)',
        'Workaround success rate: 100% across 7 previous cases'
      ],
      confidence: 'High confidence (91%) due to exact match with known bug, clear threshold trigger, and proven workaround.'
    },
    timeline: [
      { action: 'Attempted CSV export (failed)', timestamp: '5 hours ago' },
      { action: 'Retried export with different date range', timestamp: '5 hours ago' },
      { action: 'Support ticket created', timestamp: '5 hours ago' },
      { action: 'AI matched with known bug #BUG-445', timestamp: '5 hours ago' }
    ],
    pastTickets: []
  },
  {
    id: 'TKT-1003',
    subject: 'Billing discrepancy on latest invoice',
    status: 'open',
    priority: 'low',
    customer: {
      name: 'Emily Watson',
      email: 'e.watson@startup.io',
      company: 'StartupCo',
      avatar: 'EW',
      tier: 'Starter',
      tags: ['Billing']
    },
    message: "I noticed the invoice shows $49 but I thought the Starter plan was $39. Can you clarify?",
    created: '1 day ago',
    aiSummary: {
      rootCause: 'User has active analytics add-on ($10/month) in addition to base Starter plan ($39/month).',
      keyFacts: [
        'Starter plan base: $39/month',
        'Analytics add-on: $10/month (activated 2 months ago)',
        'Total: $49/month (correct)'
      ],
      similarCases: 12,
      confidence: 'high' as const,
      percentage: 97,
      suggestedSteps: [
        "Review billing breakdown with customer",
        "Explain add-on charges clearly",
        "Offer to adjust plan if needed"
      ]
    },
    aiDraft: "Hi Emily,\n\nThanks for reaching out! I can clarify this for you.\n\nYour Starter plan is indeed $39/month. The additional $10 is for the Analytics Add-on that you activated 2 months ago (on Oct 2, 2024).\n\nHere's the breakdown:\n• Starter Plan: $39/month\n• Analytics Add-on: $10/month\n• Total: $49/month\n\nIf you'd like to remove the Analytics Add-on to reduce your bill back to $39, I'm happy to help with that. Just let me know!\n\nBest regards",
    aiReasoning: {
      steps: [
        'Retrieved billing records for account',
        'Confirmed Starter plan base price: $39',
        'Identified active add-on: Analytics ($10)',
        'Verified add-on activation date: Oct 2, 2024',
        'Calculated total: $39 + $10 = $49 (matches invoice)'
      ],
      dataPoints: [
        'Plan: Starter ($39/month) - Active since Aug 15, 2024',
        'Add-on: Analytics ($10/month) - Active since Oct 2, 2024',
        'Latest invoice: $49.00 - Issued Nov 30, 2024',
        'Payment status: Paid'
      ],
      confidence: 'Very high confidence (97%) - straightforward billing calculation with clear records and no anomalies.'
    },
    timeline: [
      { event: 'Ticket created', time: '1 day ago', type: 'system' },
      { event: 'AI analysis completed', time: '1 day ago', type: 'ai' }
    ],
    pastTickets: []
  },
  {
    id: 'TKT-1004',
    subject: 'Multiple issues: Login problems, missing data, slow performance',
    status: 'in-progress',
    priority: 'high',
    customer: {
      name: 'James Martinez',
      id: 'CUST-7821',
      email: 'j.martinez@techsolutions.com',
      company: 'Tech Solutions Ltd',
      avatar: 'JM',
      tier: 'Enterprise',
      tags: ['VIP', 'Technical', 'Multiple Issues']
    },
    message: "We're experiencing several critical issues: 1) Team members can't log in (getting 'invalid credentials' errors even with correct passwords), 2) Some of our project data from last week is completely missing from the dashboard, and 3) The entire platform is running extremely slow, taking 30+ seconds to load pages. This is affecting our entire team of 50 users. Please help urgently!",
    attachments: ['error-screenshot.png', 'network-logs.txt'],
    created: '3 hours ago',
    multipleIssues: [
      {
        id: 1,
        title: 'Authentication failures for team members',
        status: 'completed',
        progress: 100,
        rootCause: 'Session timeout configuration reduced to 1 hour in recent security update',
        resolution: 'Adjusted session timeout to 24 hours for Enterprise accounts',
        estimatedTime: '10 minutes'
      },
      {
        id: 2,
        title: 'Missing project data from last week',
        status: 'in-progress',
        progress: 60,
        rootCause: 'Database replication lag causing sync issues between regions',
        resolution: 'Manually triggering data resync from backup cluster',
        estimatedTime: '20 minutes'
      },
      {
        id: 3,
        title: 'Severe platform performance degradation',
        status: 'pending',
        progress: 0,
        rootCause: 'Under investigation - likely related to recent CDN configuration',
        resolution: 'Engineering team investigating CDN settings and cache invalidation',
        estimatedTime: '45 minutes'
      }
    ],
    aiSummary: {
      rootCause: 'Multiple unrelated issues: authentication timeout, database replication lag, and CDN configuration problem.',
      keyFacts: [
        'Issue #1 (Auth): Recent security update changed timeout settings',
        'Issue #2 (Data): Replication lag between us-east and eu-west regions',
        'Issue #3 (Performance): CDN cache misconfiguration after deployment'
      ],
      similarCases: 2,
      confidence: 'high' as const,
      percentage: 89,
      suggestedSteps: [
        'Address authentication issue first (highest impact, quickest fix)',
        'Trigger manual data resync while monitoring progress',
        'Escalate performance issue to infrastructure team'
      ]
    },
    aiDraft: "Hi James,\n\nThank you for reporting these issues. I understand the urgency given your team size. I've identified three separate problems and I'm working through them systematically:\n\n✓ Issue #1 - Authentication: RESOLVED\nThis was caused by a recent security update that reduced session timeout. I've adjusted the timeout for Enterprise accounts. Your team should be able to log in normally now.\n\n⚙ Issue #2 - Missing Data: IN PROGRESS  \nI've identified a replication lag between our data centers. I'm manually triggering a resync from our backup cluster. This should complete within 20 minutes, and I'll monitor it closely.\n\n⏳ Issue #3 - Performance: INVESTIGATING\nThis appears related to CDN configuration. I've escalated this to our infrastructure team who are investigating now. ETA: 45 minutes.\n\nI'll send you updates as each issue is resolved. Issue #1 should work immediately - please have your team try logging in again.\n\nBest regards",
    aiReasoning: {
      steps: [
        'Analyzed error logs - identified three distinct issue patterns',
        'Issue #1: Checked auth service logs - found session timeout change in v2.7.5 deployment',
        'Issue #2: Queried database replication status - found 4-hour lag in eu-west region',
        'Issue #3: Reviewed CDN metrics - detected 95% cache miss rate (abnormal)',
        'Prioritized by impact and resolution time: Auth > Data > Performance'
      ],
      dataPoints: [
        'Auth errors: 47 failed login attempts in last 3 hours (all team members)',
        'Data sync lag: 4 hours 12 minutes between primary and replica',
        'CDN cache hit rate: 5% (expected: >85%)',
        'Account type: Enterprise (50 active users)',
        'Combined impact: ~200 hours of lost productivity'
      ],
      confidence: 'High confidence (89%) on root causes. Auth issue verified and resolved. Data sync in progress with monitoring. Performance issue requires deeper investigation.'
    },
    timeline: [
      { action: 'Multiple issues reported', timestamp: '3 hours ago' },
      { action: 'AI analysis identified 3 separate problems', timestamp: '3 hours ago' },
      { action: 'Issue #1 (Auth) resolved - timeout adjusted', timestamp: '2 hours 45 min ago' },
      { action: 'Issue #2 (Data) - resync initiated', timestamp: '2 hours 30 min ago' },
      { action: 'Issue #3 (Performance) - escalated to infrastructure', timestamp: '2 hours 30 min ago' }
    ],
    assignedTo: 'Agent User',
    pastTickets: [
      { id: 'TKT-0934', subject: 'API rate limit increase request', status: 'Resolved', date: '1 month ago' },
      { id: 'TKT-0812', subject: 'SSO configuration help', status: 'Resolved', date: '2 months ago' }
    ]
  }
];

export const mockDashboardStats = {
  openTickets: 47,
  resolvedToday: 24,
  avgHandleTime: '4.2 min',
  resolutionRate: '94%',
  aiAssisted: '78%'
};

export const mockAIInsights = [
  {
    category: 'Payment Issues',
    count: 12,
    trend: '+3 from yesterday',
    suggestion: 'Consider automated permission sync'
  },
  {
    category: 'Export Bugs',
    count: 8,
    trend: '+5 from yesterday',
    suggestion: 'Escalate BUG-445 priority'
  },
  {
    category: 'Billing Questions',
    count: 6,
    trend: '-2 from yesterday',
    suggestion: 'Add pricing clarity to invoice'
  }
];