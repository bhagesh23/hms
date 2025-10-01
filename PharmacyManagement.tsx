import { useState } from 'react';
import { Plus, Search, Package, AlertTriangle, TrendingUp } from 'lucide-react';
import { mockPharmaceuticals, mockCategories } from '../store/mockData';
import { Pharmaceutical } from '../types';

export default function PharmacyManagement() {
  const [activeTab, setActiveTab] = useState<'medicines' | 'categories' | 'prescriptions'>('medicines');
  const [pharmaceuticals] = useState<Pharmaceutical[]>(mockPharmaceuticals);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPharmaceuticals = pharmaceuticals.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryName = (categoryId: string) => {
    return mockCategories.find((c) => c.id === categoryId)?.name || 'Unknown';
  };

  const getStockStatus = (stock: number, reorder: number) => {
    if (stock <= reorder) return { color: 'text-red-600 bg-red-100', text: 'Low Stock' };
    if (stock <= reorder * 2) return { color: 'text-yellow-600 bg-yellow-100', text: 'Medium' };
    return { color: 'text-green-600 bg-green-100', text: 'In Stock' };
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Pharmacy Management
          </h1>
          <p className="text-gray-600 mt-2">Manage medicines, categories, and prescriptions</p>
        </div>
        <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Medicine</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <Package className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">{pharmaceuticals.length}</span>
          </div>
          <h3 className="text-white font-semibold">Total Medicines</h3>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">
              {pharmaceuticals.filter((p) => p.stockQuantity > p.reorderLevel * 2).length}
            </span>
          </div>
          <h3 className="text-white font-semibold">Well Stocked</h3>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">
              {pharmaceuticals.filter((p) => p.stockQuantity <= p.reorderLevel * 2 && p.stockQuantity > p.reorderLevel).length}
            </span>
          </div>
          <h3 className="text-white font-semibold">Low Stock Warning</h3>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-rose-500 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">
              {pharmaceuticals.filter((p) => p.stockQuantity <= p.reorderLevel).length}
            </span>
          </div>
          <h3 className="text-white font-semibold">Critical Stock</h3>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg">
        <div className="border-b border-gray-200">
          <div className="flex space-x-1 p-2">
            <button
              onClick={() => setActiveTab('medicines')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                activeTab === 'medicines'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Medicines
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                activeTab === 'categories'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Categories
            </button>
            <button
              onClick={() => setActiveTab('prescriptions')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                activeTab === 'prescriptions'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Prescriptions
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'medicines' && (
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search medicines..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-teal-50 to-cyan-50">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Medicine Name</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Category</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Strength</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Stock</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Price</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredPharmaceuticals.map((medicine) => {
                      const stockStatus = getStockStatus(medicine.stockQuantity, medicine.reorderLevel);
                      return (
                        <tr key={medicine.id} className="hover:bg-teal-50 transition-colors duration-150">
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-semibold text-gray-900">{medicine.name}</p>
                              <p className="text-sm text-gray-500">{medicine.dosageForm}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                              {getCategoryName(medicine.categoryId)}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{medicine.strength}</td>
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-semibold text-gray-900">{medicine.stockQuantity}</p>
                              <p className="text-xs text-gray-500">Reorder: {medicine.reorderLevel}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            ${medicine.unitPrice.toFixed(2)}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${stockStatus.color}`}>
                              {stockStatus.text}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-6 border-2 border-teal-200 hover:border-teal-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-teal-800 mb-2">{category.name}</h3>
                  <p className="text-teal-700 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-teal-600">
                      {pharmaceuticals.filter((p) => p.categoryId === category.id).length}
                    </span>
                    <span className="text-sm text-teal-600">medicines</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'prescriptions' && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Prescription management interface</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
