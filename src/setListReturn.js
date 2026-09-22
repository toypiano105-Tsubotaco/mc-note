// history.lengthだけでは、戻り先がSet List Noteかは判断できない。
export function canReturnToSetList(referrer, historyLength, setListUrl) {
  if (!referrer || historyLength <= 1 || !setListUrl) return false;
  try {
    const source = new URL(referrer);
    const expected = new URL(setListUrl);
    return ["http:", "https:"].includes(source.protocol)
      && source.origin === expected.origin;
  } catch {
    return false;
  }
}
