import type { Movie } from "@sebastiantegel/edutypes";
import type { Rating } from "./Rating";

export type BigMovie = Movie & {
  Actors: string;
  Plot: string;
  Runtime: string;
  Ratings: Rating[];
};
