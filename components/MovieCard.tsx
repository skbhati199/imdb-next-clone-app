import * as React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Movie } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { time } from "console";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="cursor-pointer sm:p-3 dark:sm:hover:shadow-amber-400
    dark:sm:border-amber-50 dark:hover:sm:border-amber-200 sm:hover:shadow-slate-00 sm:border-slate-400 sm:shadow-md 
    sm:border  sm:m-2 rounded-lg transition-shadow">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.original_title}
          width={500}
          height={300}
          className="sm:rounded-t-lg 
          group-hover:opacity-80 
          transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="loading.svg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="p-2">
          <p className="line-clamp-2">{movie.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {movie.title || movie.original_title}
          </h2>
          <div className="flex flex-row mr-3 mt-2">
            <p>{movie.release_date || movie.first_aie_date}</p>
            <div className="flex flex-row ml-4 items-center">
              <FiThumbsUp className="h-5 w-5 mr-1" />
              <p>{movie.vote_count}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
