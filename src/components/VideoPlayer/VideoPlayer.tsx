import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCompress,
} from "react-icons/fa";
import "./VideoPlayer.scss";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoFocus?: boolean;
}

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export const VideoPlayer = ({
  src,
  poster,
  title,
  autoFocus,
}: VideoPlayerProps) => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [backdropImage, setBackdropImage] = useState<string | undefined>(
    poster,
  );

  const captureBackdropFrame = () => {
    if (poster) return;
    const video = videoRef.current;
    if (!video || !video.videoWidth) return;
    const canvas = document.createElement("canvas");
    const scale = 320 / video.videoWidth;
    canvas.width = 320;
    canvas.height = Math.round(video.videoHeight * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    try {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setBackdropImage(canvas.toDataURL("image/jpeg", 0.6));
    } catch {
      // canvas may be tainted for cross-origin video sources
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === wrapperRef.current);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (autoFocus) {
      videoRef.current?.focus();
    }
  }, [autoFocus]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {
        // přehrání může prohlížeč odmítnout, pokud ještě nedošlo k interakci se stránkou
      });
    } else {
      video.pause();
    }
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const time = Number(event.target.value);
    video.currentTime = time;
    setCurrentTime(time);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapper.requestFullscreen();
    }
  };

  const seekBy = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    const max = Number.isFinite(video.duration) ? video.duration : Infinity;
    video.currentTime = Math.min(Math.max(video.currentTime + seconds, 0), max);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "BUTTON" || target.tagName === "INPUT") return;

    switch (event.key) {
      case " ":
        event.preventDefault();
        togglePlay();
        break;
      case "ArrowRight":
        event.preventDefault();
        seekBy(5);
        break;
      case "ArrowLeft":
        event.preventDefault();
        seekBy(-5);
        break;
      case "m":
      case "M":
        event.preventDefault();
        toggleMute();
        break;
      case "f":
      case "F":
        event.preventDefault();
        toggleFullscreen();
        break;
      default:
        break;
    }
  };

  return (
    <div className="videoPlayer" ref={wrapperRef} onKeyDown={handleKeyDown}>
      <div className="videoPlayer__stage">
        <div
          className="videoPlayer__backdrop"
          style={
            backdropImage
              ? { backgroundImage: `url(${backdropImage})` }
              : undefined
          }
        />
        <video
          ref={videoRef}
          className="videoPlayer__video"
          src={src}
          poster={backdropImage}
          preload="auto"
          tabIndex={0}
          onClick={togglePlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onLoadedData={captureBackdropFrame}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          playsInline
        >
          {title && <track kind="captions" label={title} />}
        </video>
      </div>

      <div className="videoPlayer__controls">
        <button
          type="button"
          className="videoPlayer__button"
          onClick={togglePlay}
          aria-label={t(isPlaying ? "videoPlayer.pause" : "videoPlayer.play")}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <span className="videoPlayer__time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <input
          type="range"
          className="videoPlayer__seek"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={handleSeek}
          aria-label={t("videoPlayer.seek")}
        />

        <button
          type="button"
          className="videoPlayer__button"
          onClick={toggleMute}
          aria-label={t(isMuted ? "videoPlayer.unmute" : "videoPlayer.mute")}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        <button
          type="button"
          className="videoPlayer__button"
          onClick={toggleFullscreen}
          aria-label={t(
            isFullscreen
              ? "videoPlayer.exitFullscreen"
              : "videoPlayer.fullscreen",
          )}
        >
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>
      </div>
    </div>
  );
};
