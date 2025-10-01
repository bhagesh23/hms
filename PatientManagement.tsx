import { useState } from 'react';
import { Plus, Search, CreditCard as Edit2, Eye, UserX, ArrowRight } from 'lucide-react';
import { mockPatients } from '../store/mockData';
import { Patient } from '../types';

export default function PatientManagement() {
  const [patients] = useState<Patient[]>(mockPatients);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const filteredPatients = patients.filter(
    (p) =>
      p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.patientId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'discharged':
        return 'bg-gray-100 text-gray-700';
      case 'transferred':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Patient Management
          </h1>
          <p className="text-gray-600 mt-2">Manage patient records and information</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Register Patient</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search patients by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors duration-200"
            />
          </div>
          <select className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors duration-200">
            <option>All Status</option>
            <option>Active</option>
            <option>Discharged</option>
            <option>Transferred</option>
          </select>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-pink-50 to-rose-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Patient ID</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Name</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Blood Group</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Contact</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="hover:bg-pink-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4">
                    <span className="font-semibold text-pink-600">{patient.patientId}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {patient.firstName} {patient.lastName}
                      </p>
                      <p className="text-sm text-gray-500">{patient.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      {patient.bloodGroup}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{patient.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(patient.status)}`}>
                      {patient.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedPatient(patient)}
                        className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-150 text-blue-600"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 hover:bg-green-100 rounded-lg transition-colors duration-150 text-green-600"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 hover:bg-orange-100 rounded-lg transition-colors duration-150 text-orange-600"
                        title="Transfer"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-150 text-red-600"
                        title="Discharge"
                      >
                        <UserX className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl transform animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Patient Details</h2>
              <button
                onClick={() => setSelectedPatient(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-600">Patient ID</label>
                <p className="text-lg text-gray-900">{selectedPatient.patientId}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Full Name</label>
                <p className="text-lg text-gray-900">
                  {selectedPatient.firstName} {selectedPatient.lastName}
                </p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Date of Birth</label>
                <p className="text-lg text-gray-900">{selectedPatient.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Blood Group</label>
                <p className="text-lg text-gray-900">{selectedPatient.bloodGroup}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Phone</label>
                <p className="text-lg text-gray-900">{selectedPatient.phone}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Email</label>
                <p className="text-lg text-gray-900">{selectedPatient.email}</p>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-semibold text-gray-600">Address</label>
                <p className="text-lg text-gray-900">{selectedPatient.address}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Emergency Contact</label>
                <p className="text-lg text-gray-900">{selectedPatient.emergencyContact}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Emergency Phone</label>
                <p className="text-lg text-gray-900">{selectedPatient.emergencyPhone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
