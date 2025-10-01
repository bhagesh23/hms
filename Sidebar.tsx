import {
  LayoutDashboard,
  Users,
  UserCog,
  Pill,
  DollarSign,
  Activity,
  FileText,
  Stethoscope,
  Scissors,
  CreditCard,
  Package,
  MessageSquare,
  ChevronRight,
} from 'lucide-react';

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

export default function Sidebar({ activeModule, setActiveModule }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-500' },
    { id: 'patients', label: 'Patients', icon: Users, color: 'text-pink-500' },
    { id: 'employees', label: 'Employees', icon: UserCog, color: 'text-blue-500' },
    { id: 'pharmacy', label: 'Pharmacy', icon: Pill, color: 'text-teal-500' },
    { id: 'accounting', label: 'Accounting', icon: DollarSign, color: 'text-red-500' },
    { id: 'laboratory', label: 'Laboratory', icon: Activity, color: 'text-violet-500' },
    { id: 'medical-records', label: 'Medical Records', icon: FileText, color: 'text-green-500' },
    { id: 'surgical', label: 'Surgical', icon: Scissors, color: 'text-orange-500' },
    { id: 'payroll', label: 'Payroll', icon: CreditCard, color: 'text-cyan-500' },
    { id: 'vendors', label: 'Vendors', icon: Package, color: 'text-amber-500' },
    { id: 'inventory', label: 'Inventory', icon: Package, color: 'text-sky-500' },
    { id: 'sms', label: 'SMS & Reports', icon: MessageSquare, color: 'text-rose-500' },
  ];

  return (
    <div className="w-72 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Hospital MS
            </h1>
            <p className="text-xs text-gray-500">Management System</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
                <span className={`font-semibold ${isActive ? 'text-white' : 'text-gray-700'}`}>
                  {item.label}
                </span>
              </div>
              {isActive && <ChevronRight className="w-5 h-5 text-white" />}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
