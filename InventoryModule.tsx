import { Package, Plus } from 'lucide-react';

export default function InventoryModule() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
            Inventory Management
          </h1>
          <p className="text-gray-600 mt-2">Track pharmaceutical and asset inventory</p>
        </div>
        <button className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Item</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Items', value: '1,234', color: 'from-sky-500 to-cyan-500' },
          { label: 'Pharmaceuticals', value: '856', color: 'from-teal-500 to-green-500' },
          { label: 'Medical Equipment', value: '245', color: 'from-blue-500 to-indigo-500' },
          { label: 'Low Stock Items', value: '34', color: 'from-orange-500 to-red-500' },
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
        <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 text-lg">Inventory tracking interface</p>
      </div>
    </div>
  );
}
