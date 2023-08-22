import { Movie } from "@/type";
import React from "react";
import { MovieCard } from "./MovieCard";

export default function HomeResults({ results }: { results: Movie[] | any[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-2 gap-y-2 mt-4">
      {results.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
