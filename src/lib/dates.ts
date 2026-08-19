/**
 * Rolling-enrollment date helpers.
 * The program now takes new builders on a rolling basis and slots each
 * person into the next Saturday kickoff — these helpers compute that date
 * so the "next start" messaging on the site is always accurate.
 */

/** Returns the upcoming Saturday as a short label, e.g. "Sat, Aug 23". If today is Saturday, returns today. */
export function getNextSaturdayLabel(): string {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun ... 6 = Sat
  const diff = (6 - day + 7) % 7;
  const next = new Date(now);
  next.setDate(now.getDate() + diff);
  return next.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

/** Returns just the "Month Day" portion, e.g. "Aug 23". If today is Saturday, returns today. */
export function getNextSaturdayShort(): string {
  const now = new Date();
  const day = now.getDay();
  const diff = (6 - day + 7) % 7;
  const next = new Date(now);
  next.setDate(now.getDate() + diff);
  return next.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
