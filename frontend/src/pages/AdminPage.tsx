import React, { useState } from 'react';
import {
  Shield, Users, Lock, Database, UserPlus, CheckCircle, AlertTriangle,
  Server, Key, RefreshCw, Activity, Search, Trash2, Edit3
} from 'lucide-react';
import { Badge } from '../components/ui/Badge';

interface UserRecord {
  id: string;
  email: string;
  name: string;
  role: 'Commissioner' | 'DisasterHead' | 'ZoneSupervisor' | 'FieldOfficer' | 'EOC_Operator' | 'MaintenanceTechnician' | 'Admin';
  zone: string;
  status: 'Active' | 'Inactive';
  lastLogin: string;
}

const SAMPLE_USERS: UserRecord[] = [
  { id: 'USR-01', email: 'commissioner@gvmc.gov.in', name: 'Dr. S. Kumar, IAS', role: 'Commissioner', zone: 'All 6 Zones', status: 'Active', lastLogin: '2 mins ago' },
  { id: 'USR-02', email: 'disasterhead@gvmc.gov.in', name: 'Sri R. Naidu', role: 'DisasterHead', zone: 'All 6 Zones', status: 'Active', lastLogin: '12 mins ago' },
  { id: 'USR-03', email: 'zonesupervisor@gvmc.gov.in', name: 'Sri P. Rao', role: 'ZoneSupervisor', zone: 'Zone 4 (Gajuwaka)', status: 'Active', lastLogin: '1 hour ago' },
  { id: 'USR-04', email: 'fieldofficer@gvmc.gov.in', name: 'Sri A. Reddy', role: 'FieldOfficer', zone: 'Ward 22 (Zone 4)', status: 'Active', lastLogin: '18 mins ago' },
  { id: 'USR-05', email: 'eoc@gvmc.gov.in', name: 'Sri M. Das', role: 'EOC_Operator', zone: 'EOC Central Console', status: 'Active', lastLogin: '5 mins ago' },
  { id: 'USR-06', email: 'technician@gvmc.gov.in', name: 'Sri V. Kumar', role: 'MaintenanceTechnician', zone: 'Mechanical Workshops', status: 'Active', lastLogin: '3 hours ago' },
  { id: 'USR-07', email: 'admin@gvmc.gov.in', name: 'Sri L. Rao', role: 'Admin', zone: 'System HQ', status: 'Active', lastLogin: 'Just now' },
];

export const AdminPage: React.FC = () => {
  const [users, setUsers] = useState<UserRecord[]>(SAMPLE_USERS);
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState<UserRecord['role']>('FieldOfficer');

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail || !newName) return;

    const newUser: UserRecord = {
      id: `USR-${Math.floor(10 + Math.random() * 90)}`,
      email: newEmail,
      name: newName,
      role: newRole,
      zone: 'Zone 4',
      status: 'Active',
      lastLogin: 'Never'
    };

    setUsers([...users, newUser]);
    setNewName('');
    setNewEmail('');
    setShowAddModal(false);
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'Commissioner': return 'purple';
      case 'DisasterHead': return 'danger';
      case 'ZoneSupervisor': return 'warning';
      case 'FieldOfficer': return 'info';
      case 'EOC_Operator': return 'success';
      case 'MaintenanceTechnician': return 'warning';
      case 'Admin': return 'default';
      default: return 'info';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            System Administration & Governance Console
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Role-Based Access Control (RBAC), Infrastructure Health & Security Audit Trail
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all shadow-md shadow-purple-600/20 shrink-0"
        >
          <UserPlus className="w-4 h-4" />
          Add Authorized Officer
        </button>
      </div>

      {/* Infrastructure Diagnostics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">MongoDB Atlas Cloud</div>
            <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" /> Connected
            </div>
          </div>
          <Database className="w-6 h-6 text-slate-400" />
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">FastAPI Engine</div>
            <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" /> Operational (:8000)
            </div>
          </div>
          <Server className="w-6 h-6 text-slate-400" />
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">WebSocket Telemetry Stream</div>
            <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1.5">
              <Activity className="w-4 h-4" /> Live Broadcast Active
            </div>
          </div>
          <Activity className="w-6 h-6 text-slate-400" />
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">JWT Secret Key</div>
            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mt-0.5 flex items-center gap-1.5">
              <Lock className="w-4 h-4" /> HS256 Verified
            </div>
          </div>
          <Key className="w-6 h-6 text-slate-400" />
        </div>
      </div>

      {/* User Search & Table */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search officers by name, email, or role..."
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        <Badge variant="purple">{filteredUsers.length} Users Registered Across 7 Roles</Badge>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm dark:shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider">
              <tr>
                <th className="p-4">Officer Name & ID</th>
                <th className="p-4">Official Email</th>
                <th className="p-4">Assigned RBAC Role</th>
                <th className="p-4">Assigned Jurisdiction</th>
                <th className="p-4">Last Active</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-slate-900 dark:text-slate-100 text-sm">{user.name}</div>
                    <div className="text-[11px] font-mono text-slate-400">{user.id}</div>
                  </td>
                  <td className="p-4 font-mono text-slate-600 dark:text-slate-400">{user.email}</td>
                  <td className="p-4">
                    <Badge variant={getRoleBadgeVariant(user.role)}>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-200">{user.zone}</td>
                  <td className="p-4 text-slate-500 font-mono">{user.lastLogin}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Add Authorized System User</h3>
            <form onSubmit={handleAddUser} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Sri V. Ananth, IAS"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Official Email</label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="e.g. officer@gvmc.gov.in"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">RBAC Role Assignment</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as any)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-slate-100"
                >
                  <option value="Commissioner">Commissioner</option>
                  <option value="DisasterHead">DisasterHead</option>
                  <option value="ZoneSupervisor">ZoneSupervisor</option>
                  <option value="FieldOfficer">FieldOfficer</option>
                  <option value="EOC_Operator">EOC_Operator</option>
                  <option value="MaintenanceTechnician">MaintenanceTechnician</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold"
                >
                  Provision User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
