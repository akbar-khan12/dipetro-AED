import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getStateDetails } from '../api/aedLawsApi';
import { ArrowLeft, BookOpen, Shield, AlertCircle } from 'lucide-react';

const StateDetailsPage = () => {
  const { slug } = useParams();
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStateDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getStateDetails(slug);
        setState(data);
      } catch (err) {
        setError('Failed to load state details. Please try again.');
        console.error('Error fetching state details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStateDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Map
          </Link>
        </div>
      </div>
    );
  }

  if (!state) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Map
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-12">
            <h1 className="text-4xl font-bold text-white mb-2">{state.name}</h1>
            <p className="text-red-100">AED Laws and Requirements</p>
          </div>

          <div className="p-8">
            <div className="flex items-start space-x-3 mb-6 p-4 bg-blue-50 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-gray-900 mb-1">Law Reference</h2>
                <p className="text-gray-700">{state.lawSummary}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {state.content}
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Important Notice</h3>
                  <p className="text-gray-700 text-sm">
                    This information is provided for general educational purposes only and should not be considered legal advice.
                    AED laws and requirements may change. For the most current information and specific guidance for your situation,
                    please consult with legal counsel or contact your state's Department of Health.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                Contact Us for AED Solutions
              </button>
              <button className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Download State Guide
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">AED Training Programs</h3>
              <p className="text-gray-600 text-sm">
                Find certified training programs in {state.name} for CPR and AED use.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Compliance Checklist</h3>
              <p className="text-gray-600 text-sm">
                Download a checklist to ensure your facility meets all AED requirements.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">AED Products</h3>
              <p className="text-gray-600 text-sm">
                Browse our selection of AED devices approved for use in {state.name}.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Maintenance Services</h3>
              <p className="text-gray-600 text-sm">
                Learn about our AED maintenance and inspection services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateDetailsPage;
