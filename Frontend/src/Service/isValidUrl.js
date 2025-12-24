export function validateYoutubeURL(url) {
  try {
    // Step 1: Check if it's a valid URL
    const parsedUrl = new URL(url);

    // Step 2: Accept only YouTube domains
    const hostname = parsedUrl.hostname.toLowerCase();
    if (!['www.youtube.com', 'youtube.com', 'm.youtube.com', 'youtu.be'].includes(hostname)) {
      return null; // ❌ Not YouTube
    }

    let videoId = "";

    if (hostname === 'youtu.be') {
      // Short link: youtu.be/VIDEO_ID
      videoId = parsedUrl.pathname.slice(1); 
    } 
    else {
      // Full link: youtube.com/watch?v=VIDEO_ID
      videoId = parsedUrl.searchParams.get("v");

      // If it’s a /live/ link, extract from pathname
      if (!videoId && parsedUrl.pathname.includes("/live/")) {
        videoId = parsedUrl.pathname.replace("/live/", "");
      }
    }

    // Step 3: Cleanup videoId (if any)
    if (videoId) {
      return videoId.trim();
    }

    return false; // ❌ No video ID found
  } catch {
    return false; // ❌ Invalid URL format
  }
}