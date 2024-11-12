import React from "react";
import { extractIframeUrl } from "../../utils/extractIframeUrl";
const MapIframe = ({ map }) => {
  const result = extractIframeUrl(map);
  return (
    <div style={{ overflow: "hidden", borderRadius: "8px", height: "280px" }}>
      <iframe
        title="Google Map"
        src={result}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapIframe;
