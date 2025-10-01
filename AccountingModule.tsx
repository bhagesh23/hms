import { useState } from 'react';
import { Plus, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

export default function AccountingModule() {
  const [activeTab, setActiveTab] = useState<'payable' | 'receivable'>('payable');

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Accounting Module
          </h1>
          <p className="text-gray-600 mt-2">Manage accounts payable and receivable</p>
        </div>
        <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>New Entry</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Payable', value: '$125,430', icon: TrendingDown, color: 'from-red-500 to-rose-500' },
          { label: 'Total Receivable', value: '$234,680', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
          { label: 'Net Balance', value: '$109,250', icon: DollarSign, color: 'from-blue-500 to-cyan-500' },
          { label: 'Overdue', value: '$12,340', icon: TrendingDown, color: 'from-orange-500 to-amber-500' },
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
            <button
              onClick={() => setActiveTab('payable')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                activeTab === 'payable'
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Accounts Payable
            </button>
            <button
              onClick={() => setActiveTab('receivable')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                activeTab === 'receivable'
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Accounts Receivable
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-red-50 to-pink-50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Invoice #</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    {activeTab === 'payable' ? 'Vendor' : 'Patient'}
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Amount</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Due Date</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-red-50 transition-colors duration-150">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-red-600">INV-001</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">Medical Supplies Co.</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">$5,420.00</td>
                  <td className="px-6 py-4 text-sm text-gray-600">2025-10-15</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                      PENDING
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-red-600 hover:text-red-800 font-semibold text-sm">
                      Process Payment
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
