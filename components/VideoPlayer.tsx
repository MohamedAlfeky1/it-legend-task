"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "@/components/common/Icons";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
        <video
          src="/videos/react-pro-image.mp4"
          controls
          autoPlay
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-md"
    >
      {/* Thumbnail placeholder – dark overlay on a gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        <Image
          src="/images/thumbnail.png"
          alt="Course video thumbnail"
          fill
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
  );
}
