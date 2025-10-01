import { MessageSquare, Users, DollarSign, Bed, Activity } from 'lucide-react';

export default function SMSModule() {
  const summaries = [
    {
      title: 'Patients List',
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      stats: [
        { label: 'Total Patients', value: '1,234' },
        { label: 'Active', value: '856' },
        { label: 'Admitted Today', value: '23' },
      ],
    },
    {
      title: 'OPD Cash Summary',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      stats: [
        { label: 'Total Collection', value: '$12,450' },
        { label: 'Consultations', value: '145' },
        { label: 'Average Fee', value: '$85.86' },
      ],
    },
    {
      title: 'Admit / Discharge Summary',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      stats: [
        { label: 'Admissions Today', value: '23' },
        { label: 'Discharges Today', value: '18' },
        { label: 'Net Change', value: '+5' },
      ],
    },
    {
      title: 'Ward / Bed Status',
      icon: Bed,
      color: 'from-orange-500 to-amber-500',
      stats: [
        { label: 'Total Beds', value: '250' },
        { label: 'Occupied', value: '188' },
        { label: 'Available', value: '62' },
      ],
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            SMS & Reports Module
          </h1>
          <p className="text-gray-600 mt-2">Quick summaries and hospital statistics</p>
        </div>
        <button className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
          <MessageSquare className="w-5 h-5" />
          <span>Send SMS</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {summaries.map((summary, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`bg-gradient-to-r ${summary.color} p-6`}>
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-3 rounded-xl backdrop-blur-sm">
                  <summary.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{summary.title}</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {summary.stats.map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <span className="text-gray-700 font-medium">{stat.label}</span>
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Send Appointment Reminders', color: 'from-blue-500 to-cyan-500' },
            { label: 'Send Discharge Notifications', color: 'from-green-500 to-emerald-500' },
            { label: 'Send Payment Reminders', color: 'from-orange-500 to-amber-500' },
          ].map((action, index) => (
            <button
              key={index}
              className={`bg-gradient-to-r ${action.color} text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
