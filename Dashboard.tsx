import { Activity, Users, Pill, DollarSign, Bed, Stethoscope, Calendar, TrendingUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  trend?: string;
}

const StatCard = ({ title, value, icon, color, trend }: StatCardProps) => (
  <div className={`${color} rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white text-opacity-90 text-sm font-medium mb-2">{title}</p>
        <h3 className="text-white text-3xl font-bold mb-1">{value}</h3>
        {trend && (
          <div className="flex items-center text-white text-opacity-90 text-xs">
            <TrendingUp className="w-3 h-3 mr-1" />
            <span>{trend}</span>
          </div>
        )}
      </div>
      <div className="bg-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm">
        {icon}
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Patients',
      value: '1,234',
      icon: <Users className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-pink-500 to-rose-500',
      trend: '+12% this month',
    },
    {
      title: 'Active Staff',
      value: '256',
      icon: <Stethoscope className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      trend: '+5 new hires',
    },
    {
      title: 'Available Beds',
      value: '45',
      icon: <Bed className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      trend: '75% occupancy',
    },
    {
      title: 'Appointments',
      value: '89',
      icon: <Calendar className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-orange-500 to-amber-500',
      trend: 'Today',
    },
    {
      title: 'Lab Tests',
      value: '342',
      icon: <Activity className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-violet-500 to-purple-500',
      trend: '+18% this week',
    },
    {
      title: 'Pharmacy Stock',
      value: '98%',
      icon: <Pill className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      trend: 'Well stocked',
    },
    {
      title: 'Revenue',
      value: '$2.4M',
      icon: <DollarSign className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      trend: '+8% vs last month',
    },
    {
      title: 'Surgeries',
      value: '23',
      icon: <Activity className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-sky-500 to-blue-600',
      trend: 'This week',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {[
              { text: 'New patient admitted to ICU Ward', time: '5 min ago', color: 'bg-blue-500' },
              { text: 'Surgery completed successfully', time: '1 hour ago', color: 'bg-green-500' },
              { text: 'Lab results available for PAT-1234', time: '2 hours ago', color: 'bg-orange-500' },
              { text: 'Prescription filled and dispensed', time: '3 hours ago', color: 'bg-purple-500' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className={`w-2 h-2 rounded-full ${activity.color} animate-pulse`}></div>
                <div className="flex-1">
                  <p className="text-gray-800 text-sm">{activity.text}</p>
                  <p className="text-gray-500 text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Stats</h3>
          <div className="space-y-4">
            {[
              { label: 'Patient Satisfaction', value: 95, color: 'bg-green-500' },
              { label: 'Bed Occupancy', value: 75, color: 'bg-blue-500' },
              { label: 'Staff Attendance', value: 92, color: 'bg-purple-500' },
              { label: 'Equipment Status', value: 88, color: 'bg-orange-500' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-semibold text-gray-900">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
