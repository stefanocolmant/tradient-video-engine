// Quality-check messages. When a render runs with audit on, components report problems they can
// see (text squeezed below the style's minimum size, a missing icon or image, something placed
// outside the safe area). The render tool collects these lines from the browser console.
const seen = new Set<string>();
let enabled = false;
export const setAudit = (on: boolean) => { enabled = on; };

export function audit(kind: string, scene: string | undefined, detail: Record<string, unknown>) {
  if (!enabled) return;
  const key = `${kind}|${scene}|${JSON.stringify(detail)}`;
  if (seen.has(key)) return;
  seen.add(key);
  // eslint-disable-next-line no-console
  console.log('AUDIT ' + JSON.stringify({kind, scene, ...detail}));
}
