
export function readBoolean(string: "true"): true;
export function readBoolean(string: "false"): false;
export function readBoolean(string?: string): undefined;
export function readBoolean(string?: string): boolean | undefined {
  if(string === "true") {
    return true;
  } else if(string === "false") {
    return false;
  } else {
    return undefined;
  }
}
