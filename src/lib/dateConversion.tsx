export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  return `${month} ${day}, ${year} ${time}`;
}
