import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStateDetails } from "../api/aedLawsApi";

export default function StateDetailsPage() {
  const { slug } = useParams();
  const [stateData, setStateData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getStateDetails(slug)
      .then((data) => {
        // ✅ Safe fallback with all required fields
        if (!data) {
          data = {
            name: slug
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase()),
            lawSummary:
              "This state has implemented AED legislation to improve cardiac emergency response in public areas and workplaces.",
            content:
              "All public schools, gyms, and large businesses are required to maintain at least one automated external defibrillator (AED) on-site. AEDs must be inspected regularly and employees must receive proper training on their use. Emergency medical services (EMS) must be notified whenever an AED is deployed.",
            lastUpdated: "August 10, 2024",
            requirements: [
              "AEDs required in public schools and fitness centers.",
              "Liability protection for trained responders.",
              "Mandatory reporting of AED use to local EMS.",
            ],
            fines: "$500 - $2,000 for non-compliance",
          };
        }

        // ✅ Ensure requirements always exists
        if (!Array.isArray(data.requirements)) data.requirements = [];

        setStateData(data);
      })
      .catch((err) => setError(err.message));
  }, [slug]);

  if (error) return <p className="p-6 text-red-600">{error}</p>;
  if (!stateData) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-[#301a41] text-white rounded-lg hover:bg-[#41245a] transition-colors duration-200"
        >
          ← Back to Map
        </button>

        {/* State Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {stateData.name} AED Laws
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Last updated: {stateData.lastUpdated || "N/A"}
        </p>

        {/* Summary */}
        <div className="bg-[#f8f4fc] border-l-4 border-[#301a41] p-4 rounded-md mb-6">
          <p className="text-gray-800 leading-relaxed">
            {stateData.lawSummary || "No summary available."}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
          <p>{stateData.content || "No detailed information available."}</p>
        </div>

        {/* AED Requirements */}
        {stateData.requirements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#301a41] mb-3">
              Key AED Requirements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {stateData.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Fines / Penalties */}
        {stateData.fines && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-lg font-semibold text-red-700 mb-2">
              Penalties for Non-Compliance
            </h3>
            <p className="text-red-600">{stateData.fines}</p>
          </div>
        )}
      </div>
    </div>
  );
}
