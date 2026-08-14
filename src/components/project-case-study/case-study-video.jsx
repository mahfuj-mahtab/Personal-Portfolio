import { getYoutubeEmbedUrl } from "@/lib/youtube";

export function CaseStudyVideo({ video }) {
  if (!video?.youtubeId) return null;

  const embedUrl = getYoutubeEmbedUrl(video.youtubeId);
  if (!embedUrl) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-lg">
      <iframe
        src={embedUrl}
        title="Project demo video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 size-full"
      />
    </div>
  );
}
