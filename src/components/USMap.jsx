// Updated USMap component using colors #111686 (hover) and #d6dcea (default background fill)

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

  useEffect(() => {
    getStatesList().then(setStates);
  }, []);

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

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");
    if (!paths) return;
    paths.forEach((p) => {
      p.style.fill = "#d6dcea"; // default fill color
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
    if (svgRef.current && svgRef.current.contains(e.relatedTarget)) return;
    setHoveredState(null);
  };

  const handleClick = (e) => {
    const id = e.target.id;
    const state = states.find((s) => s.abbreviation === id || s.name === id);
    if (state) navigate(`/aed-laws/${state.slug}`);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-center bg-transparent overflow-visible py-12 px-8"
    >
      <div
        className="relative w-full max-w-[1500px] -translate-x-10 sm:-translate-x-16 md:-translate-x-20 lg:-translate-x-28"
        style={{
          transformOrigin: "center",
          scale: "1.25",
        }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 959 593"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          style={{ cursor: "pointer" }}
          onMouseLeave={handleMouseLeave}
        >
          <USMapSVG
            className="w-full h-auto"
            onMouseOver={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />

          {/* Styles */}
          <style>{`
            path {
              fill: #d6dcea !important; /* default background */
              transition: fill 0.25s ease;
              stroke: #fff;
              stroke-width: 1;
            }
            path:hover {
              fill: #111686 !important; /* hover color */
            }
          `}</style>

          {/* Labels */}
          {labelPositions.map((pos) => {
            const st = states.find(
              (s) => s.abbreviation === pos.id || s.name === pos.id
            );
            if (!st) return null;
            const shortLabel = st.abbreviation;

            return (
              <text
                key={pos.id}
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                fontSize="7"
                fill={hoveredState?.abbreviation === pos.id ? "#ffffff" : "#4a3e39"}
                fontWeight="600"
                pointerEvents="none"
              >
                {shortLabel}
              </text>
            );
          })}
        </svg>

        {hoveredState && (
          <div
            className="fixed z-50 bg-white text-black border border-black px-2 py-1 rounded text-xs pointer-events-none"
            style={{
              top: tooltip.y,
              left: tooltip.x,
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
