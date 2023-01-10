
export type TrueString = typeof trueValues[number];

export type FalseString = typeof falseValues[number];

const trueValues = ["true", "t", "yes", "y", "1"] as const;
const falseValues = ["false", "f", "no", "n", "0"] as const;

export type Options = {
  /**
   * If true, `readBoolean` will accept an extended list of values for true and false:
   * - true: ["true", "t", "yes", "y", "1"]
   * - false: ["false", "f", "no", "n", "0"]
   */
  extended?: boolean;
  /**
   * If true, `readBoolean` will require values to match exactly by being lowercase.
   */
  strict?: boolean;
};

type Match<S extends string, O extends Options> = O extends { strict: true } ? S : Lowercase<S>;

export type ReadBoolean<S extends string, O extends Options> = O extends { extended: true }
  ? Match<S, O> extends TrueString
    ? true
    : Match<S, O> extends FalseString
      ? false
      : undefined
  : Match<S, O> extends "true"
    ? true
    : Match<S, O> extends "false"
      ? false
      : undefined;

/**
 * Parse a boolean value from a string.
 *
 * Includes options for extended values and strict matching.
 */
export function readBoolean<S extends string, O extends Options>(string?: S, options?: O): ReadBoolean<S, O> {
  const normalized = options?.strict ? string : string?.toLowerCase();
  if(options?.extended) {
    if(trueValues.includes(normalized as TrueString)) {
      return true as ReadBoolean<S, O>;
    } else if(falseValues.includes(normalized as FalseString)) {
      return false as ReadBoolean<S, O>;
    } else {
      return undefined as ReadBoolean<S, O>;
    }
  } else if(normalized === "true") {
    return true as ReadBoolean<S, O>;
  } else if(normalized === "false") {
    return false as ReadBoolean<S, O>;
  } else {
    return undefined as ReadBoolean<S, O>;
  }
}
