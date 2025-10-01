import { CreditCard, Plus } from 'lucide-react';

export default function PayrollModule() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Payroll Module
          </h1>
          <p className="text-gray-600 mt-2">Manage employee payroll and salaries</p>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Generate Payroll</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Monthly Payroll', value: '$524,000', color: 'from-cyan-500 to-blue-500' },
          { label: 'Employees Paid', value: '256', color: 'from-green-500 to-emerald-500' },
          { label: 'Pending Payments', value: '12', color: 'from-orange-500 to-amber-500' },
        ].map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CreditCard className="w-8 h-8 text-white mb-3" />
            <span className="text-3xl font-bold text-white block mb-2">{stat.value}</span>
            <h3 className="text-white font-semibold">{stat.label}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 text-lg">Payroll management interface</p>
      </div>
    </div>
  );
}
