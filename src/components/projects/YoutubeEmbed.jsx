import React from "react";

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: 0,
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default YouTubeEmbed;
