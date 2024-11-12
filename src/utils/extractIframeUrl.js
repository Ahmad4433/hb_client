export function extractIframeUrl(iframeHtml) {
  // Use a regular expression to match the URL in the src attribute
  const regex = /src="(https:\/\/[^"]+)"/;
  const match = iframeHtml?.match(regex);

  // If a match is found, return the URL
  if (match && match[1]) {
    return match[1];
  } else {
    return null; // If no match is found
  }
}
