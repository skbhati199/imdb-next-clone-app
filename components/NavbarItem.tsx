"use client";

import Link from "next/link";
import React from "react";

import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: NavbarItemProps) {
  const searchParams = useSearchParams();
  const genreValue = searchParams.get("genre");
  return (
    <div>
      <Link
        className={cn(
          `m-4 hover:text-amber-600 font-semibold p-2`,
          genreValue &&
            genreValue == param &&
            "underline  underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        )}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
