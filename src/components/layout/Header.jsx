import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import { getStatesList } from "../../api/aedLawsApi"; // same API as StatesListPage

const Header = () => {
  const [states, setStates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch states
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const data = await getStatesList();
        setStates(data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  // Filter states
  const filteredStates = states.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (slug) => {
    navigate(`/aed-laws/${slug}`);
    setDropdownOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="w-full">

      {/* TOP BANNER */}
      <div
        className="w-full py-6 border-b"
        style={{ backgroundColor: "#d6dcea", borderColor: "#0A1A33" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="../src/assets/logo.png"
              alt="AED Logo"
              className="w-60 h-auto object-contain"
            />
          </Link>

          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <div
              className="flex items-center bg-white rounded-lg shadow-md px-3 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Search className="text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search States..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setDropdownOpen(true);
                }}
                className="w-full px-3 py-2 bg-transparent outline-none text-gray-800"
              />
            </div>

            {/* Dropdown */}
            {dropdownOpen && searchTerm && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                {filteredStates.length > 0 ? (
                  filteredStates.map((s) => (
                    <div
                      key={s.slug}
                      onClick={() => handleSelect(s.slug)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4 text-blue-600" />
                      {s.name}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">No states found</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION HEADER */}
      <header
        className="border-b"
        style={{ backgroundColor: "#111686", borderColor: "#0A1A33" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-10">
              {["Products", "Industries", "Resources", "Company", "Pricing"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium"
                  style={{ color: "#FFFFFF" }}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button
                className="hidden sm:block px-4 py-2 text-sm font-medium rounded-lg transition"
                style={{ color: "#FFFFFF", border: "1px solid #FFFFFF" }}
              >
                Contact
              </button>
              <button
                className="px-4 py-2 text-sm font-medium rounded-lg transition"
                style={{ color: "#FFFFFF", border: "1px solid #FFFFFF" }}
              >
                Store
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
