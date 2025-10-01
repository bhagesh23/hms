import { useState } from 'react';
import { Plus, Search, CreditCard as Edit2, Eye, Users } from 'lucide-react';
import { mockEmployees, mockDepartments } from '../store/mockData';
import { Employee } from '../types';

export default function EmployeeManagement() {
  const [employees] = useState<Employee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter(
    (e) =>
      e.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDepartmentName = (deptId: string) => {
    return mockDepartments.find((d) => d.id === deptId)?.name || 'Unknown';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'inactive':
        return 'bg-red-100 text-red-700';
      case 'on_leave':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Employee Management
          </h1>
          <p className="text-gray-600 mt-2">Manage staff and assignments</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Employee</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {mockDepartments.map((dept, index) => (
          <div
            key={dept.id}
            className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">
                {employees.filter((e) => e.departmentId === dept.id).length}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg">{dept.name}</h3>
            <p className="text-blue-100 text-sm">{dept.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search employees by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
            />
          </div>
          <select className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200">
            <option>All Departments</option>
            {mockDepartments.map((dept) => (
              <option key={dept.id}>{dept.name}</option>
            ))}
          </select>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Employee ID</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Name</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Position</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Department</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-blue-50 transition-colors duration-150">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-blue-600">{employee.employeeId}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {employee.firstName} {employee.lastName}
                      </p>
                      <p className="text-sm text-gray-500">{employee.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{employee.position}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {getDepartmentName(employee.departmentId)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(employee.status)}`}>
                      {employee.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-150 text-blue-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-green-100 rounded-lg transition-colors duration-150 text-green-600">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
