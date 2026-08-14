/**
 * Extract a YouTube video ID from a full URL or bare ID string.
 */
export function getYoutubeId(urlOrId) {
  if (!urlOrId) return null;

  const trimmed = urlOrId.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match) return match[1];
  }

  return null;
}

export function getYoutubeEmbedUrl(youtubeId) {
  const id = getYoutubeId(youtubeId);
  if (!id) return null;
  return `https://www.youtube-nocookie.com/embed/${id}`;
}
