import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getStatesList } from "../api/aedLawsApi";
import USMapSVG from "../assets/us-map.svg?react";

const USMap = () => {
  const [states, setStates] = useState([]);
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltip, setTooltip] = useState({ name: "", x: 0, y: 0 });
  const [labelPositions, setLabelPositions] = useState([]);
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Fetch states list from API
  useEffect(() => {
    getStatesList().then(setStates);
  }, []);

  // Compute label positions for each path
  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll("path[id]");
    if (!paths.length) return;

    const positions = Array.from(paths).map((path) => {
      const id = path.getAttribute("id");
      const box = path.getBBox();
      return { id, x: box.x + box.width / 2, y: box.y + box.height / 2 };
    });
    setLabelPositions(positions);
  }, [states]);

  // Set default styles
  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");
    if (!paths) return;
    paths.forEach((p) => {
      p.style.fill = "#f2e9e6";
      p.style.stroke = "#ffffff";
      p.style.strokeWidth = "1";
      p.style.transition = "fill 0.25s ease";
    });
  }, []);

  const handleMouseEnter = (e) => {
    const id = e.target.id;
    const state = states.find((s) => s.abbreviation === id || s.name === id);
    if (state) setHoveredState(state);
  };

  const handleMouseMove = (e) => {
    if (!hoveredState || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip({
      name: hoveredState.name,
      x: e.clientX - rect.left + 12,
      y: e.clientY - rect.top - 10,
    });
  };

  const handleMouseLeave = (e) => {
    // If cursor is still inside the SVG, do nothing
    if (svgRef.current && svgRef.current.contains(e.relatedTarget)) return;
    // Otherwise, clear hovered state and tooltip
    setHoveredState(null);
  };

  const handleClick = (e) => {
    const id = e.target.id;
    const state = states.find((s) => s.abbreviation === id || s.name === id);
    if (state) navigate(`/aed-laws/${state.slug}`);
  };

  const colorPalette = [
    "#FADADD",
    "#F5C6AA",
    "#F2B6A0",
    "#F0AFA0",
    "#F3CBBE",
    "#FADCD9",
    "#F7C6C7",
    "#F9D6C1",
    "#F6B7A9",
    "#EFB7B3",
  ];

  const getRandomColor = (index) => colorPalette[index % colorPalette.length];

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-center bg-transparent overflow-hidden py-12 px-8"
    >
      <div
        className="relative w-full max-w-[1500px] -translate-x-10 sm:-translate-x-16 md:-translate-x-20 lg:-translate-x-28"
        style={{
          transformOrigin: "center",
          scale: "1.25", // makes map larger
        }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 959 593"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          style={{ cursor: "pointer" }}
          onMouseLeave={handleMouseLeave} // ✅ ensure this is here
        >
          <USMapSVG
            className="w-full h-auto"
            onMouseOver={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
          {/* Path styles */}
          <style>
            {`
            path {
              transition: fill 0.25s ease;
              stroke: #fff;
              stroke-width: 1;
            }
            path:hover {
              fill: #e3b5aa !important;
            }
          `}
          </style>

          {/* Assign random color to each state */}
          {Array.from({ length: 51 }).map((_, i) => (
            <style key={i}>{`path:nth-of-type(${
              i + 1
            }) { fill: ${getRandomColor(i)}; }`}</style>
          ))}

          {/* Add text labels */}
          {labelPositions.map((pos) => {
            const st = states.find(
              (s) => s.abbreviation === pos.id || s.name === pos.id
            );
            if (!st) return null;
            const shortLabel =
              st.abbreviation ||
              `${st.name[0]}${st.name[st.name.length - 1]}`.toUpperCase();
            return (
              <text
                key={pos.id}
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                fontSize="7"
                fill="#4a3e39"
                fontWeight="600"
                pointerEvents="none"
              >
                {shortLabel}
              </text>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredState && (
          <div
            className="absolute bg-black text-white text-xs px-2 py-1 rounded shadow-md"
            style={{
              top: tooltip.y,
              left: tooltip.x,
              pointerEvents: "none",
              transform: "translate(-50%, -100%)",
              whiteSpace: "nowrap",
            }}
          >
            {hoveredState.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default USMap;
