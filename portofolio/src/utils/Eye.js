import React from "react";
import { useState, useEffect } from "react";

export default function EyeFollow() {
  const [pupilStyle, setPupilStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      const eye = document.getElementById("eye");
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;
      const deltaX = event.clientX - eyeCenterX;
      const deltaY = event.clientY - eyeCenterY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(30, Math.hypot(deltaX, deltaY));
      const pupilX = distance * Math.cos(angle);
      const pupilY = distance * Math.sin(angle);
      setPupilStyle({
        transform: `translate(${pupilX}px, ${pupilY}px)`,
      });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const fillOpacity = 0.7;

  return (
    <svg
      id="eye"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "#f00658", stopOpacity: fillOpacity }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#f06", stopOpacity: fillOpacity }}
          />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#pinkGradient)" />
      <circle
        id="pupil"
        cx="100"
        cy="100"
        r="30"
        fill="#FFFFFF"
        style={pupilStyle}
      />
    </svg>
  );
}
