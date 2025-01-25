// import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { fetchSection } from "../../api";

const Video = () => {
  const location = useLocation();
  const { content } = location.state;
  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.url}</p>
      <iframe
        width="1096"
        height="616"
        src={content.url}
        title="Newton Leibniz y Usain Bolt"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
