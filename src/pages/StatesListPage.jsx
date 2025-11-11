import { useEffect, useState } from 'react';
import { getStatesList } from '../api/aedLawsApi';
import USMap from '../components/USMap';
import { MapPin } from 'lucide-react';

const StatesListPage = () => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const data = await getStatesList();
        setStates(data);
      } catch (error) {
        console.error('Error fetching states:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AED Laws by State
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any state to view detailed information about AED requirements and regulations
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-full h-[600px]">
              <USMap />
            </div>
          </div>
        )}

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">50</div>
              <div className="text-gray-700">States with AED legislation</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-700">Lives saved annually by AEDs</div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-700">Survival rate with immediate AED use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesListPage;
