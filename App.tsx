import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PatientManagement from './components/PatientManagement';
import EmployeeManagement from './components/EmployeeManagement';
import PharmacyManagement from './components/PharmacyManagement';
import AccountingModule from './components/AccountingModule';
import LaboratoryModule from './components/LaboratoryModule';
import MedicalRecordsModule from './components/MedicalRecordsModule';
import SurgicalModule from './components/SurgicalModule';
import PayrollModule from './components/PayrollModule';
import VendorModule from './components/VendorModule';
import InventoryModule from './components/InventoryModule';
import SMSModule from './components/SMSModule';

function App() {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return <PatientManagement />;
      case 'employees':
        return <EmployeeManagement />;
      case 'pharmacy':
        return <PharmacyManagement />;
      case 'accounting':
        return <AccountingModule />;
      case 'laboratory':
        return <LaboratoryModule />;
      case 'medical-records':
        return <MedicalRecordsModule />;
      case 'surgical':
        return <SurgicalModule />;
      case 'payroll':
        return <PayrollModule />;
      case 'vendors':
        return <VendorModule />;
      case 'inventory':
        return <InventoryModule />;
      case 'sms':
        return <SMSModule />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">{renderModule()}</div>
      </main>
    </div>
  );
}

export default App;
