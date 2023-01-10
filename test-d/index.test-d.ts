import { expectType } from "tsd";
import { readBoolean } from "../source/index.js";

// Normal
expectType<true>(readBoolean("true"));
expectType<true>(readBoolean("True"));
expectType<undefined>(readBoolean("t"));

expectType<false>(readBoolean("false"));
expectType<false>(readBoolean("False"));
expectType<undefined>(readBoolean("0"));

// Strict
expectType<true>(readBoolean("true", { strict: true }));
expectType<undefined>(readBoolean("True", { strict: true }));
expectType<undefined>(readBoolean("t", { strict: true }));

expectType<false>(readBoolean("false", { strict: true }));
expectType<undefined>(readBoolean("False", { strict: true }));
expectType<undefined>(readBoolean("0", { strict: true }));

// Extended
expectType<true>(readBoolean("true", { extended: true }));
expectType<true>(readBoolean("t", { extended: true }));
expectType<false>(readBoolean("false", { extended: true }));
expectType<false>(readBoolean("0", { extended: true }));
