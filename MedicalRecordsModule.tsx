import { FileText, Plus } from 'lucide-react';

export default function MedicalRecordsModule() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Medical Records Module
          </h1>
          <p className="text-gray-600 mt-2">Manage patient medical history and records</p>
        </div>
        <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Record</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Records', value: '5,432', color: 'from-green-500 to-emerald-500' },
          { label: 'Added Today', value: '34', color: 'from-blue-500 to-cyan-500' },
          { label: 'Updated This Week', value: '156', color: 'from-orange-500 to-amber-500' },
        ].map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <FileText className="w-8 h-8 text-white" />
              <span className="text-3xl font-bold text-white">{stat.value}</span>
            </div>
            <h3 className="text-white font-semibold mt-2">{stat.label}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 text-lg">Medical records management interface</p>
      </div>
    </div>
  );
}
