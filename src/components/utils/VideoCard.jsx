// VideoCard.jsx
import React from "react";
import { Video } from "@imagekit/react";

export default function VideoCard({
  path,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
}) {
  return (
    <Video
      urlEndpoint="https://ik.imagekit.io/0rf6agnve"
      src={path}
      className={`w-full h-full object-cover ${className}`}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
    />
  );
}
