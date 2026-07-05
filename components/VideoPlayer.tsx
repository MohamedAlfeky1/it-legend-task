"use client";

import Image from "next/image";
import { PlayIcon } from "@/components/common/Icons";
import { BsLayoutSidebarReverse, BsTv } from "react-icons/bs";

export function VideoPlayer({
  isPlaying,
  setIsPlaying,
  isTheaterMode = false,
  onToggleTheater,
}: {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  isTheaterMode?: boolean;
  onToggleTheater?: () => void;
}) {

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md group">
      {isPlaying ? (
        <video
          src="/videos/react-pro-image.mp4"
          controls
          autoPlay
          className="w-full h-full object-contain"
        />
      ) : (
        <div
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full cursor-pointer"
        >
          {/* Thumbnail placeholder – dark overlay on a gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
            <Image
              src="/images/thumbnail.png"
              alt="Course video thumbnail"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              preload
              className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"
            />
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-rose-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <PlayIcon />
            </div>
          </div>
        </div>
      )}

      {/* Desktop-only Theater Mode toggle button */}
      {onToggleTheater && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleTheater();
          }}
          title={isTheaterMode ? "Default View" : "Theater Mode"}
          className="hidden lg:flex absolute top-4 right-4 z-40 items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all cursor-pointer shadow-md hover:scale-105 border border-white/10"
        >
          {isTheaterMode ? (
            <BsLayoutSidebarReverse className="w-5 h-5" />
          ) : (
            <BsTv className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
}
