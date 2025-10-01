import { Scissors, Plus } from 'lucide-react';

export default function SurgicalModule() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Surgical / Theater Module
          </h1>
          <p className="text-gray-600 mt-2">Manage surgeries and theater equipment</p>
        </div>
        <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Schedule Surgery</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Surgeries Today', value: '8', color: 'from-orange-500 to-amber-500' },
          { label: 'Scheduled This Week', value: '23', color: 'from-blue-500 to-cyan-500' },
          { label: 'Equipment Available', value: '45', color: 'from-green-500 to-emerald-500' },
          { label: 'Theater Rooms', value: '6', color: 'from-violet-500 to-purple-500' },
        ].map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="text-3xl font-bold text-white block mb-2">{stat.value}</span>
            <h3 className="text-white font-semibold">{stat.label}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <Scissors className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 text-lg">Surgery records management interface</p>
      </div>
    </div>
  );
}
