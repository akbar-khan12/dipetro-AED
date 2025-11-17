import { useEffect, useState, useRef } from "react";
import { getStatesList } from "../api/aedLawsApi";
import USMap from "../components/USMap";
import { MapPin, Search, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StatesListPage = () => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const data = await getStatesList();
        setStates(data);
      } catch (error) {
        console.error("Error fetching states:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter states based on search term
  const filteredStates = states.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (slug) => {
    navigate(`/aed-laws/${slug}`);
    setDropdownOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
           AED State Laws
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Click on any state to view detailed information about AED
            requirements and regulations
          </p>

          {/* Dropdown */}
          <div
            className="relative inline-block w-full sm:w-60"
            ref={dropdownRef}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex justify-between items-center w-full border border-transparent text-white rounded-lg px-4 py-2 shadow-sm
bg-[#111686] hover:bg-[#0d0f5c] transition-all duration-200"
            >
              <span className="font-medium tracking-wide">
                Choose your state
              </span>
              <ChevronDown
                size={18}
                className={`ml-2 transform transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 p-2 flex items-center">
                  <Search className="text-gray-400 ml-2" size={16} />
                  <input
                    type="text"
                    placeholder="Search state..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-2 py-1 ml-2 text-sm rounded focus:outline-none"
                  />
                </div>

                <div className="py-1">
                  {filteredStates.length > 0 ? (
                    filteredStates.map((s) => (
                      <div
                        key={s.slug}
                        onClick={() => handleSelect(s.slug)}
                        className="px-4 py-2 hover:bg-[#d6dcea] cursor-pointer text-gray-700 text-sm hover:text-[#111686]"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#111686]" />
                          {s.name}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500 text-sm">
                      No results found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* AED Legislation Overview */}
        <div className="max-w-3xl mx-auto text-center mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            AED Legislation Summaries and Requirements by State
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            To help improve Sudden Cardiac Arrest outcomes and encourage groups
            to buy AEDs, all 50 states have “Good Samaritan” legislation in
            place to offer civil liability protection for those who buy or use
            them. Additionally, some states have additional laws requiring AEDs
            for certain facility types, like schools, gyms, or large buildings.
          </p>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg mt-4">
            Each state’s laws vary significantly. It’s important to understand
            these regulations to know if you must have an AED and how to
            maintain it properly, to maximize the value of liability protections
            available.
          </p>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg mt-4">
            Click on your state to learn about the AED requirements and
            protections available to you.
          </p>
        </div>

        {/* Map */}
        {loading ? (
          <div className="flex items-center justify-center h-96 pt-5">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <div className="w-full h-auto">
            <USMap />
          </div>
        )}

        {/* All States List */}
        {!loading && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              All AED State Laws
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 text-sm sm:text-base text-gray-800">
              {states.map((s) => (
                <div
                  key={s.slug}
                  onClick={() => handleSelect(s.slug)}
                  className="flex items-center gap-2 hover:text-[#111686] cursor-pointer"
                >
                 <MapPin className="w-4 h-4 text-blue-600" />
                  {s.name} AED laws
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Facts */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">50</div>
              <div className="text-gray-700">States with AED legislation</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-700">Lives saved annually by AEDs</div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-700">
                Survival rate with immediate AED use
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesListPage;
