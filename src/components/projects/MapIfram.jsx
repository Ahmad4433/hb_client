import React from "react";

const MapIframe = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.2086192374104!2d74.23464607527912!3d31.353221855381836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901e838ff5401%3A0xf80e2592944e121f!2sHafiz%20Brothers!5e0!3m2!1sen!2s!4v1730444265607!5m2!1sen!2s";

  return (
    <div style={{ overflow: "hidden", borderRadius: "8px", height: "280px" }}>
      <iframe
        title="Google Map"
        src={mapSrc}
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
