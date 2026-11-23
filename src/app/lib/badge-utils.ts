// Utility functions for badge colors and variants

export function getPriorityBadgeClass(priority: string): string {
  switch (priority.toLowerCase()) {
    case 'high':
    case 'urgent':
      return 'bg-red-500/10 text-red-600 border-red-500/20 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20';
    case 'medium':
      return 'bg-orange-500/10 text-orange-600 border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20';
    case 'low':
      return 'bg-green-500/10 text-green-600 border-green-500/20 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20';
    default:
      return 'bg-gray-500/10 text-gray-600 border-gray-500/20 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
  }
}

export function getStatusBadgeClass(status: string): string {
  switch (status.toLowerCase()) {
    case 'open':
    case 'new':
      return 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20';
    case 'in-progress':
    case 'in progress':
      return 'bg-purple-500/10 text-purple-600 border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20';
    case 'pending':
    case 'pending approval':
      return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20';
    case 'resolved':
    case 'closed':
    case 'completed':
    case 'done':
      return 'bg-green-500/10 text-green-600 border-green-500/20 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20';
    case 'escalated':
      return 'bg-red-500/10 text-red-600 border-red-500/20 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20';
    default:
      return 'bg-gray-500/10 text-gray-600 border-gray-500/20 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
  }
}

export function getConfidenceBadgeClass(confidence: number): string {
  if (confidence >= 85) {
    return 'bg-green-500/10 text-green-600 border-green-500/20 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20';
  } else if (confidence >= 70) {
    return 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20';
  } else if (confidence >= 50) {
    return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20';
  } else {
    return 'bg-red-500/10 text-red-600 border-red-500/20 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20';
  }
}