import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const USMap = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleStateClick = (slug) => {
    navigate(`/aed-laws/${slug}`);
  };

  const handleStateHover = (stateName, event) => {
    setHoveredState(stateName);
    const svg = event.currentTarget.ownerSVGElement;
    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
    setTooltipPosition({ x: svgP.x, y: svgP.y });
  };

  const handleStateLeave = () => {
    setHoveredState(null);
  };

  const stateClass = "fill-blue-100 stroke-blue-300 hover:fill-blue-200 cursor-pointer transition-colors duration-200";

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 960 600" className="w-full h-full">
        <g id="states">
          <path id="HI" data-name="Hawaii" d="M407.5,519.5l1,2l1,1h2l1-1v-2l-2-1h-2Z m7,2l1,2l2,1h2l1-2v-2l-2-1h-2Z m7-3h3l1,1v2l-1,1h-3l-1-1v-2Z m11,3l1,2l2,1h2l1-2v-2l-2-1h-2Z m8,0l1,2l2,1h2l1-2v-2l-2-1h-2Z"
            className={stateClass}
            onClick={() => handleStateClick('hawaii')}
            onMouseMove={(e) => handleStateHover('Hawaii', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="AK" data-name="Alaska" d="M92.5,428.5l2,3l3,2l4,1l4-1l3-2l2-3v-4l-2-3l-3-2l-4-1l-4,1l-3,2l-2,3Z m15-8l3,2l2,3v4l-2,3l-3,2l-4,1l-4-1l-3-2l-2-3v-4l2-3l3-2l4-1Z m-25,5l2,3l3,2l4,1l4-1l3-2l2-3v-4l-2-3l-3-2l-4-1l-4,1l-3,2l-2,3Z m35-5l3,2l2,3v4l-2,3l-3,2l-4,1l-4-1l-3-2l-2-3v-4l2-3l3-2l4-1Z"
            className={stateClass}
            onClick={() => handleStateClick('alaska')}
            onMouseMove={(e) => handleStateHover('Alaska', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="ME" data-name="Maine" d="M861,97l-1,3l-2,2l-3,1l-3-1l-2-2l-1-3v-3l1-3l2-2l3-1l3,1l2,2l1,3Z m-5-15l2,2l1,3v3l-1,3l-2,2l-3,1l-3-1l-2-2l-1-3v-3l1-3l2-2l3-1Z m0,35l2,2l1,3v3l-1,3l-2,2l-3,1l-3-1l-2-2l-1-3v-3l1-3l2-2l3-1Z"
            className={stateClass}
            onClick={() => handleStateClick('maine')}
            onMouseMove={(e) => handleStateHover('Maine', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="WA" data-name="Washington" d="M120,85l35,5l30,3l25,2v20l-1,25l-2,20h-85l-2-35Z"
            className={stateClass}
            onClick={() => handleStateClick('washington')}
            onMouseMove={(e) => handleStateHover('Washington', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="OR" data-name="Oregon" d="M120,160h85l-1,10l-3,30l-2,25l-75-8l-5-1Z"
            className={stateClass}
            onClick={() => handleStateClick('oregon')}
            onMouseMove={(e) => handleStateHover('Oregon', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="CA" data-name="California" d="M119,225l5,1l75,8l-2,18l-5,35l-4,30l-3,25l-2,20l-8,2l-25,5l-20,3l-15,2l15-60l10-45l8-35Z"
            className={stateClass}
            onClick={() => handleStateClick('california')}
            onMouseMove={(e) => handleStateHover('California', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="ID" data-name="Idaho" d="M210,95l45,5v20l-1,25l-2,20l-1,10l-3,30l-2,25l-40-5l-5-1l-1-25l2-20l1-25v-20Z"
            className={stateClass}
            onClick={() => handleStateClick('idaho')}
            onMouseMove={(e) => handleStateHover('Idaho', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="NV" data-name="Nevada" d="M150,233l5,1l40,5l-3,25l-4,35l-3,30l-2,25l-50-5l2-20l3-25l4-30l5-35Z"
            className={stateClass}
            onClick={() => handleStateClick('nevada')}
            onMouseMove={(e) => handleStateHover('Nevada', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="MT" data-name="Montana" d="M255,100l85,5l80,3l5,50l-125-3l-45-5Z"
            className={stateClass}
            onClick={() => handleStateClick('montana')}
            onMouseMove={(e) => handleStateHover('Montana', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="WY" data-name="Wyoming" d="M255,200l40,5l125,3v55l-120-3l-45-5Z"
            className={stateClass}
            onClick={() => handleStateClick('wyoming')}
            onMouseMove={(e) => handleStateHover('Wyoming', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="UT" data-name="Utah" d="M197,233l3,1l40,5l45,5l-1,60l-50-2l-34-4Z"
            className={stateClass}
            onClick={() => handleStateClick('utah')}
            onMouseMove={(e) => handleStateHover('Utah', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="CO" data-name="Colorado" d="M300,260l120,3v60l-120-3Z"
            className={stateClass}
            onClick={() => handleStateClick('colorado')}
            onMouseMove={(e) => handleStateHover('Colorado', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="AZ" data-name="Arizona" d="M200,304l34,4l50,2l-5,50l-3,30l-50-5l-20-3l-15-2l5-40Z"
            className={stateClass}
            onClick={() => handleStateClick('arizona')}
            onMouseMove={(e) => handleStateHover('Arizona', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="NM" data-name="New Mexico" d="M284,320l120,3l-3,75l-115-3Z"
            className={stateClass}
            onClick={() => handleStateClick('new-mexico')}
            onMouseMove={(e) => handleStateHover('New Mexico', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="ND" data-name="North Dakota" d="M425,108l85,3l75,2l5,45l-160-5Z"
            className={stateClass}
            onClick={() => handleStateClick('north-dakota')}
            onMouseMove={(e) => handleStateHover('North Dakota', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="SD" data-name="South Dakota" d="M430,155l160,5v50l-160-5Z"
            className={stateClass}
            onClick={() => handleStateClick('south-dakota')}
            onMouseMove={(e) => handleStateHover('South Dakota', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="NE" data-name="Nebraska" d="M430,205l160,5l-1,50l-159-5Z"
            className={stateClass}
            onClick={() => handleStateClick('nebraska')}
            onMouseMove={(e) => handleStateHover('Nebraska', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="KS" data-name="Kansas" d="M420,320l120,3l40,1l-1,40l-159-4Z"
            className={stateClass}
            onClick={() => handleStateClick('kansas')}
            onMouseMove={(e) => handleStateHover('Kansas', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="OK" data-name="Oklahoma" d="M420,360l159,4l1,55l-35-1l-20-1l-15-1l-90-3Z"
            className={stateClass}
            onClick={() => handleStateClick('oklahoma')}
            onMouseMove={(e) => handleStateHover('Oklahoma', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="TX" data-name="Texas" d="M286,395l115,3l3,10l90,3l15,1l20,1l35,1v15l-2,30l-3,25l-10,1l-15,2l-12,1l-5-15l-10-25l-15-20l-20-15l-25-8h-25l-20,3l-15,5l-10-10Z"
            className={stateClass}
            onClick={() => handleStateClick('texas')}
            onMouseMove={(e) => handleStateHover('Texas', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="MN" data-name="Minnesota" d="M485,113l75,2l5,10l1,10v10l-1,5l5,25l3,20v15l-83-2l-5-45Z"
            className={stateClass}
            onClick={() => handleStateClick('minnesota')}
            onMouseMove={(e) => handleStateHover('Minnesota', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="IA" data-name="Iowa" d="M485,205l83,2l2,50l-75-2Z"
            className={stateClass}
            onClick={() => handleStateClick('iowa')}
            onMouseMove={(e) => handleStateHover('Iowa', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="MO" data-name="Missouri" d="M495,255l75,2l5,45l1,40l-2,15l-15,2l-45-2l-10-15l-9-15v-25l-1-40Z"
            className={stateClass}
            onClick={() => handleStateClick('missouri')}
            onMouseMove={(e) => handleStateHover('Missouri', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="AR" data-name="Arkansas" d="M510,413l45,2l15-2l2-15l40,2l-1,55l-101-3Z"
            className={stateClass}
            onClick={() => handleStateClick('arkansas')}
            onMouseMove={(e) => handleStateHover('Arkansas', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="LA" data-name="Louisiana" d="M510,455l101,3l-1,20l-5,15l-10,10l-15,5l-20,3l-15-3l-10-5l-8-8l-5-10l-2-10Z"
            className={stateClass}
            onClick={() => handleStateClick('louisiana')}
            onMouseMove={(e) => handleStateHover('Louisiana', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="WI" data-name="Wisconsin" d="M565,115l15,1l15,2l10,3l1,10v10l-1,5l5,25l3,20v15l-2,50l-45-1l-2-50v-15l-3-20l-5-25l1-5v-10Z"
            className={stateClass}
            onClick={() => handleStateClick('wisconsin')}
            onMouseMove={(e) => handleStateHover('Wisconsin', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="IL" data-name="Illinois" d="M566,205l45,1l2,50l1,60l-40-1l-3-50l-5-45Z"
            className={stateClass}
            onClick={() => handleStateClick('illinois')}
            onMouseMove={(e) => handleStateHover('Illinois', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="MI" data-name="Michigan" d="M606,121l25,3l20,5l15,8l5,10l-5,15l-10,10l-8,5l-2,20v15l1,10l-15-1l-15-2l-10-3l2-50v-15l-3-20Z m40,20l10,8l8,10l5,12v13l-5,12l-8,10l-10,8l-12,5h-13l-12-5l-10-8l-8-10l-5-12v-13l5-12l8-10l10-8l12-5h13Z"
            className={stateClass}
            onClick={() => handleStateClick('michigan')}
            onMouseMove={(e) => handleStateHover('Michigan', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="IN" data-name="Indiana" d="M614,256l40,1l-1,55l-39-1Z"
            className={stateClass}
            onClick={() => handleStateClick('indiana')}
            onMouseMove={(e) => handleStateHover('Indiana', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="KY" data-name="Kentucky" d="M575,340l1,15l40,2l45,1l30,2l5-15l40-2l-2,20l-5,15l-40,2l-25-1l-20-2l-15-3l-10-5l-8-8l-5-10Z"
            className={stateClass}
            onClick={() => handleStateClick('kentucky')}
            onMouseMove={(e) => handleStateHover('Kentucky', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="TN" data-name="Tennessee" d="M576,357l5,10l8,8l10,5l15,3l20,2l25,1l40-2l5-15l2-20l65-3l1,40l-181-5Z"
            className={stateClass}
            onClick={() => handleStateClick('tennessee')}
            onMouseMove={(e) => handleStateHover('Tennessee', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="MS" data-name="Mississippi" d="M591,384l10,15l45,2l-1,40l1,20l-35-2l-10-5l-8-8l-5-10l-2-10l1-20Z"
            className={stateClass}
            onClick={() => handleStateClick('mississippi')}
            onMouseMove={(e) => handleStateHover('Mississippi', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="AL" data-name="Alabama" d="M646,401l-1,40l1,20l-10,10l-15,5l-10-5l-8-8l-5-10l35,2l-1-20l1-40Z"
            className={stateClass}
            onClick={() => handleStateClick('alabama')}
            onMouseMove={(e) => handleStateHover('Alabama', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="OH" data-name="Ohio" d="M653,257l1,55l-40,1l1-55Z m30-55l15,3l10,5l8,8l5,10l2,12l-30,2l-30-2v-15l-1-10l1-10Z"
            className={stateClass}
            onClick={() => handleStateClick('ohio')}
            onMouseMove={(e) => handleStateHover('Ohio', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="WV" data-name="West Virginia" d="M691,313l40,2l10,5l8,8l5,10l2,12l-20,1l-25-1l-5,15l-30-2l-45-1l-40-2l2-20l40,2l30,2l30-2l-2-12l-5-10Z"
            className={stateClass}
            onClick={() => handleStateClick('west-virginia')}
            onMouseMove={(e) => handleStateHover('West Virginia', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="VA" data-name="Virginia" d="M736,345l20-1l30,2l40,3l15,2l-5,15l-35-2l-20-2l-15-1l-10,5l-8,8l-5,10l-2,12l-25,1l20-1l-2-12l-5-10l-8-8Z"
            className={stateClass}
            onClick={() => handleStateClick('virginia')}
            onMouseMove={(e) => handleStateHover('Virginia', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="NC" data-name="North Carolina" d="M771,349l65,5l15,2l-2,15l-5,15l-10,10l-15,5l-108-8l2-12l5-10l8-8l10-5l15,1Z"
            className={stateClass}
            onClick={() => handleStateClick('north-carolina')}
            onMouseMove={(e) => handleStateHover('North Carolina', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="SC" data-name="South Carolina" d="M716,383l108,8l-5,15l-10,10l-15,5l-20,3l-15-3l-10-5l-8-8l-5-10l-10-10Z"
            className={stateClass}
            onClick={() => handleStateClick('south-carolina')}
            onMouseMove={(e) => handleStateHover('South Carolina', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="GA" data-name="Georgia" d="M621,458l10,5l15-5l10-10l-1-20l-1-40l10,15l10,10l5,10l8,8l10,5l15,3l20-3l15-5l10-10l5-15l-5,15l-10,10l-15,5l-20,3l-15-3l-10-5l-8-8l-5-10l-2-15l-15,10l-20,5l-15,5l-10,10l-5,15Z"
            className={stateClass}
            onClick={() => handleStateClick('georgia')}
            onMouseMove={(e) => handleStateHover('Georgia', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="FL" data-name="Florida" d="M646,476l-5,15l10-10l15-5l20-5l15-10l2,15l-2,20l-5,20l-8,18l-10,15l-15,10l-20,5l-15-5l-10-10l-5-15v-20l5-20l8-18l10-15Z m75,20l15,10l20,5l15-5l10-10l5-15v-20l-5-15l-10-10l-15-5l-20,5l-15,10l-10,15l-5,20v20Z"
            className={stateClass}
            onClick={() => handleStateClick('florida')}
            onMouseMove={(e) => handleStateHover('Florida', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="PA" data-name="Pennsylvania" d="M693,242l2,12l30,2l30-2l2-12l-2-12l45-2l40-2l15,2l-1,30l-5,25l-40-3l-30-2l-20,1l-2-12l-5-10l-8-8l-10-5l-15-3l-15,3Z"
            className={stateClass}
            onClick={() => handleStateClick('pennsylvania')}
            onMouseMove={(e) => handleStateHover('Pennsylvania', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="NY" data-name="New York" d="M755,230l40,2l45,2l2,12l2,12l-15-2l-40,2l-45,2l2,12l-2-12l-30-2l-30,2l-2-12l-2-12l30-2l30,2l2-12l-2-12l15-3Z m60-30l25,3l20,5l15,8l5,10l-5,10l-15-2l-40-2l-25-3l5-10l15-8Z"
            className={stateClass}
            onClick={() => handleStateClick('new-york')}
            onMouseMove={(e) => handleStateHover('New York', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="VT" data-name="Vermont" d="M810,170l-5,15l-3,20l-1,25l-15-3l5-25l3-20l5-15Z"
            className={stateClass}
            onClick={() => handleStateClick('vermont')}
            onMouseMove={(e) => handleStateHover('Vermont', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="NH" data-name="New Hampshire" d="M810,170l10,1l-5,15l-3,20l-5,25l-10-1l1-25l3-20Z"
            className={stateClass}
            onClick={() => handleStateClick('new-hampshire')}
            onMouseMove={(e) => handleStateHover('New Hampshire', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="MA" data-name="Massachusetts" d="M786,207l15,3l5,10l15,8l20,5l-15,2l-2,12l-15-2l-20-5l-15-8l-5-10Z m40,8l15,2l10,3l-10-3l-15-2Z"
            className={stateClass}
            onClick={() => handleStateClick('massachusetts')}
            onMouseMove={(e) => handleStateHover('Massachusetts', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="RI" data-name="Rhode Island" d="M841,225l10,3l5,5l-5-5l-10-3Z"
            className={stateClass}
            onClick={() => handleStateClick('rhode-island')}
            onMouseMove={(e) => handleStateHover('Rhode Island', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="CT" data-name="Connecticut" d="M821,235l15,2l-15-2Z m-15-10l15,8l20,5l-20-5l-15-8Z"
            className={stateClass}
            onClick={() => handleStateClick('connecticut')}
            onMouseMove={(e) => handleStateHover('Connecticut', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="NJ" data-name="New Jersey" d="M784,244l2,12l40,3l-40-3l-2-12Z m30,10l5,15l10,10l-10-10l-5-15Z"
            className={stateClass}
            onClick={() => handleStateClick('new-jersey')}
            onMouseMove={(e) => handleStateHover('New Jersey', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="DE" data-name="Delaware" d="M814,269l5,15l-5-15Z m-5-10l5,10l-5-10Z"
            className={stateClass}
            onClick={() => handleStateClick('delaware')}
            onMouseMove={(e) => handleStateHover('Delaware', e)}
            onMouseLeave={handleStateLeave}
          />

          <path id="MD" data-name="Maryland" d="M763,259l5,25l40,3l15,2l-15-2l-40-3l-5-25Z m43,28l8,8l10,5l-10-5l-8-8Z"
            className={stateClass}
            onClick={() => handleStateClick('maryland')}
            onMouseMove={(e) => handleStateHover('Maryland', e)}
            onMouseLeave={handleStateLeave}
          />
        </g>

        {hoveredState && (
          <g>
            <rect
              x={tooltipPosition.x + 10}
              y={tooltipPosition.y - 30}
              width={hoveredState.length * 8 + 20}
              height="30"
              rx="4"
              fill="rgba(0, 0, 0, 0.8)"
            />
            <text
              x={tooltipPosition.x + 20}
              y={tooltipPosition.y - 10}
              fill="white"
              fontSize="14"
              fontWeight="500"
            >
              {hoveredState}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default USMap;
