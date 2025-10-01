import { useState } from 'react';
import { Plus, Search, Activity, TestTube, Thermometer } from 'lucide-react';

export default function LaboratoryModule() {
  const [activeTab, setActiveTab] = useState<'tests' | 'results' | 'vitals' | 'equipment'>('tests');

  const mockTests = [
    { id: '1', testNumber: 'LAB-001', patientName: 'John Doe', testName: 'Complete Blood Count', date: '2025-10-01', status: 'completed' },
    { id: '2', testNumber: 'LAB-002', patientName: 'Emma Wilson', testName: 'Lipid Panel', date: '2025-10-01', status: 'pending' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Laboratory Module
          </h1>
          <p className="text-gray-600 mt-2">Manage lab tests, results, and patient vitals</p>
        </div>
        <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-violet-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>New Test</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Tests Today', value: '45', icon: TestTube, color: 'from-violet-500 to-purple-500' },
          { label: 'Pending Results', value: '12', icon: Activity, color: 'from-blue-500 to-cyan-500' },
          { label: 'Completed', value: '33', icon: Activity, color: 'from-green-500 to-emerald-500' },
          { label: 'Equipment Active', value: '28', icon: Thermometer, color: 'from-orange-500 to-amber-500' },
        ].map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </div>
            <h3 className="text-white font-semibold">{stat.label}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg">
        <div className="border-b border-gray-200">
          <div className="flex space-x-1 p-2">
            {[
              { key: 'tests', label: 'Lab Tests' },
              { key: 'results', label: 'Results' },
              { key: 'vitals', label: 'Vitals' },
              { key: 'equipment', label: 'Equipment' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'tests' && (
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search lab tests..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-violet-50 to-purple-50">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Test Number</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Patient</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Test Name</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Date</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockTests.map((test) => (
                      <tr key={test.id} className="hover:bg-violet-50 transition-colors duration-150">
                        <td className="px-6 py-4">
                          <span className="font-semibold text-violet-600">{test.testNumber}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{test.patientName}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{test.testName}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{test.date}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              test.status === 'completed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {test.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-violet-600 hover:text-violet-800 font-semibold text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab !== 'tests' && (
            <div className="text-center py-12">
              <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">{activeTab} management interface</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
