import type { Persons } from "./Persons";

export type Person = Awaited<ReturnType<Persons["persons"]>>;
