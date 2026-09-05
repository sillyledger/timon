"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryData, themes, type Theme } from "@/lib/galleryData";

export default function Gallery() {
  const [active, setActive] = useState<Theme>("kitten");
  const photos = galleryData[active];

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter by mood"
        className="mb-12 inline-flex gap-1 rounded-full border border-line bg-surface p-[5px]"
      >
        {themes.map((theme) => {
          const isActive = theme === active;
          return (
            <button
              key={theme}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(theme)}
              className={`rounded-full px-4 py-[7px] font-mono text-[12.5px] transition-colors duration-150 focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-[3px] ${
                isActive
                  ? "bg-text text-bg"
                  : "bg-transparent text-text-dim hover:text-text"
              }`}
            >
              {theme}
            </button>
          );
        })}
      </div>

      <div className="mb-14 grid grid-cols-4 gap-x-5 gap-y-8 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
        {photos.map((photo) => (
          <figure key={photo.src} className="m-0">
            <div className="relative mb-3 aspect-[4/5] overflow-hidden border border-line bg-surface">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 760px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <figcaption className="font-mono text-[12.5px] leading-[1.5] text-text-dim">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
