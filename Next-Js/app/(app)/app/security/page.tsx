"use client";

import { 
  ShieldCheck, Lock, Activity, Key, 
  History, Eye, AlertOctagon, RefreshCw,
  Server, Database, Cloud, FileLock2,
  CheckCircle2, AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SecurityCompliancePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Security & Compliance</h1>
           <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">HIPAA & GDPR Compliant Data Infrastructure.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
           <ShieldCheck className="w-4 h-4" /> System Secure
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Security Health Card */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center">
                 <Lock className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="space-y-1">
                 <h3 className="font-black text-lg">Encryption</h3>
                 <p className="text-xs text-slate-500">AES-256 Data at rest & TLS 1.3 in transit</p>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase">
                 <CheckCircle2 className="w-4 h-4" /> Active
              </div>
           </div>

           <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="w-12 h-12 bg-teal-50 dark:bg-teal-500/10 rounded-2xl flex items-center justify-center">
                 <Database className="w-6 h-6 text-teal-600" />
              </div>
              <div className="space-y-1">
                 <h3 className="font-black text-lg">Backups</h3>
                 <p className="text-xs text-slate-500">Real-time point-in-time recovery</p>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase">
                 <CheckCircle2 className="w-4 h-4" /> 100% Healthy
              </div>
           </div>

           <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 md:col-span-2">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <History className="w-5 h-5 text-slate-400" />
                    <h3 className="font-black text-lg uppercase tracking-tight">Access Audit Trail</h3>
                 </div>
                 <button className="text-xs font-bold text-teal-600 hover:underline">Download full log</button>
              </div>
              <div className="space-y-4">
                 {[
                   { user: "Admin", action: "Accessed Patient Records", time: "2 mins ago", ip: "192.168.1.45" },
                   { user: "Dr. Miller", action: "Authorized Lab Report Access", time: "15 mins ago", ip: "192.168.1.12" },
                   { user: "System", action: "Automated Backup Completed", time: "1 hour ago", ip: "Cloud-Internal" },
                 ].map((log, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-[10px] font-black">
                            {log.user[0]}
                         </div>
                         <div>
                            <p className="text-sm font-bold">{log.action}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">{log.user} • {log.ip}</p>
                         </div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">{log.time}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Status sidebar */}
        <div className="space-y-8">
           <div className="bg-rose-50 border border-rose-100 rounded-[2.5rem] p-8 space-y-6">
              <div className="flex items-center gap-3">
                 <AlertTriangle className="w-6 h-6 text-rose-600" />
                 <h3 className="text-lg font-black text-rose-900">Risk Assessment</h3>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-rose-700">Login Attempts</span>
                    <span className="text-xs font-black text-rose-900">Low</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-rose-700">API Rate Limit</span>
                    <span className="text-xs font-black text-rose-900">Healthy</span>
                 </div>
              </div>
              <button className="w-full py-4 bg-rose-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rose-700 transition-all shadow-lg shadow-rose-600/20">
                 Run Security Audit
              </button>
           </div>

           <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-center">
              <FileLock2 className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-black">Data Privacy</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                 Manage patient data consent, Right to be forgotten (RTBF) requests, and data portability exports.
              </p>
              <button className="w-full py-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all">
                 Configure Policies
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
