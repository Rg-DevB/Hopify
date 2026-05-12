"use client"

import { 
  Calendar as CalendarIcon, Users, Activity, AlertCircle, Phone, ArrowUpRight, Clock,
  TrendingUp, Zap, UserPlus, FileText, CalendarPlus, Bot, Star, CheckCircle2,
  MessageSquare, BrainCircuit, Search, Bell, ChevronRight, MoreVertical, ArrowRight,
  Stethoscope, Bed, Pill, LayoutGrid, HeartPulse, Microscope
} from "lucide-react"
import Link from "next/link"
import NewAppointmentModal from "@/components/modals/new-appointment-modal"
import AddPatientModal from "@/components/modals/add-patient-modal"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/context/language-context"

// Mock Data
const revenueData = [
  { day: "Mon", value: 1200, max: 2400 },
  { day: "Tue", value: 1800, max: 2400 },
  { day: "Wed", value: 900, max: 2400 },
  { day: "Thu", value: 2400, max: 2400 },
  { day: "Fri", value: 2100, max: 2400 },
  { day: "Sat", value: 600, max: 2400 },
  { day: "Sun", value: 300, max: 2400 },
]

const patientsOfTheDay = [
  { id: "PAT-001", name: "Md Tajuddin", time: "09:30", type: "Urgent", status: "In Consultation", room: "101" },
  { id: "PAT-002", name: "Sarah Miller", time: "10:15", type: "Regular", status: "Waiting", room: "-" },
  { id: "PAT-003", name: "John Davis", time: "11:00", type: "Video", status: "Pending", room: "Online" },
];

const pharmacyAlerts = [
  { id: 1, med: "Amoxicillin", stock: 12, unit: "Packs", status: "Critical" },
  { id: 2, med: "Paracetamol", stock: 8, unit: "Bottles", status: "Expiring" },
];

export default function DashboardPage() {
  const { t } = useTranslation()
  const satisfactionScore = 4.8
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      toast.info("System health check optimal", {
        description: "All modules are running smoothly. 3 emergency beds available.",
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <div className="px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Intelligence Dashboard
            </div>
            <span className="text-slate-400 dark:text-slate-500 text-xs font-medium">Monday, May 11, 2026</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Hopify Clinic Overview</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium italic">Empowering care with real-time clinical intelligence.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl relative hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900" />
          </button>
          <Link href="/app/analytics">
             <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg active:scale-95">
               <TrendingUp className="w-4 h-4" /> Full Analytics
             </button>
          </Link>
        </div>
      </div>

      {/* Primary Metrics (Widgets) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-all hover:border-teal-500/30 group">
           <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-teal-50 dark:bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                 <Users className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-emerald-600">+12%</span>
           </div>
           <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Patients Today</p>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-1">48</h3>
           </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-all hover:border-indigo-500/30 group">
           <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                 <Stethoscope className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-indigo-600">88% Active</span>
           </div>
           <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Doctors Active</p>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-1">14 <span className="text-sm font-bold text-slate-400">/ 18</span></h3>
           </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-all hover:border-rose-500/30 group">
           <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-rose-50 dark:bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
                 <AlertCircle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-rose-600 animate-pulse">Critical</span>
           </div>
           <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Emergencies</p>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-1">03</h3>
           </div>
        </div>

        <div className="bg-slate-900 dark:bg-slate-100 p-6 rounded-[2rem] shadow-xl space-y-6 group">
           <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-white/10 dark:bg-black/5 rounded-2xl flex items-center justify-center text-white dark:text-black group-hover:scale-110 transition-transform">
                 <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-teal-400">+$2.1k</span>
           </div>
           <div>
              <p className="text-[10px] font-black text-white/50 dark:text-slate-400 uppercase tracking-widest">Daily Revenue</p>
              <h3 className="text-3xl font-black text-white dark:text-slate-900 mt-1">$4,120</h3>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
         {/* LEFT COLUMN: Main Charts & Lists (8 cols) */}
         <div className="lg:col-span-8 space-y-8">
            {/* Revenue Mini Graph */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm p-8">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="font-black text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                     <TrendingUp className="w-5 h-5 text-teal-500" /> Financial Pulse
                  </h3>
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-teal-500" />
                     <span className="text-[10px] font-black text-slate-400 uppercase">Weekly Growth</span>
                  </div>
               </div>
               <div className="flex items-end justify-between h-48 gap-4 px-2">
                  {revenueData.map((d) => (
                    <div key={d.day} className="flex-1 flex flex-col items-center gap-3 group">
                       <div className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl relative overflow-hidden h-full">
                          <div 
                             className="absolute bottom-0 left-0 right-0 bg-teal-600/20 group-hover:bg-teal-600 transition-all duration-700"
                             style={{ height: `${(d.value / d.max) * 100}%` }}
                          />
                       </div>
                       <span className="text-[9px] font-black text-slate-400 uppercase">{d.day}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Patients of the Day */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
               <div className="p-8 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <h3 className="font-black text-lg text-slate-900 dark:text-white tracking-tight">Today&apos;s Appointments</h3>
                  <button className="text-teal-600 text-[10px] font-black uppercase tracking-widest hover:underline">View All</button>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left whitespace-nowrap">
                     <thead className="bg-slate-50/50 dark:bg-slate-800/50 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        <tr>
                           <th className="px-8 py-4">Patient</th>
                           <th className="px-8 py-4">Time</th>
                           <th className="px-8 py-4">Type</th>
                           <th className="px-8 py-4">Status</th>
                           <th className="px-8 py-4 text-right">Room</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                        {patientsOfTheDay.map(p => (
                          <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                             <td className="px-8 py-5">
                                <p className="text-sm font-black text-slate-900 dark:text-white">{p.name}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.id}</p>
                             </td>
                             <td className="px-8 py-5">
                                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{p.time} AM</span>
                             </td>
                             <td className="px-8 py-5">
                                <span className={cn(
                                   "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border",
                                   p.type === "Urgent" ? "bg-rose-50 text-rose-600 border-rose-100" : 
                                   p.type === "Video" ? "bg-indigo-50 text-indigo-600 border-indigo-100" : 
                                   "bg-slate-50 text-slate-600 border-slate-100"
                                )}>{p.type}</span>
                             </td>
                             <td className="px-8 py-5">
                                <span className="flex items-center gap-2 text-[10px] font-black uppercase text-teal-600">
                                   <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" /> {p.status}
                                </span>
                             </td>
                             <td className="px-8 py-5 text-right font-black text-slate-900 dark:text-white text-xs">{p.room}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         {/* RIGHT COLUMN: Specific Widgets (4 cols) */}
         <div className="lg:col-span-4 space-y-8">
            {/* Medical KPIs */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-all hover:border-teal-500/30 group">
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Clinical KPIs</h3>
               <div className="space-y-6">
                  <div className="space-y-2">
                     <div className="flex justify-between text-[10px] font-black uppercase text-slate-500">
                        <span>Patient Satisfaction</span>
                        <span className="text-teal-600">4.8 / 5.0</span>
                     </div>
                     <div className="h-2 bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-teal-500 w-[96%]" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between text-[10px] font-black uppercase text-slate-500">
                        <span>Bed Occupancy</span>
                        <span className="text-rose-600">84%</span>
                     </div>
                     <div className="h-2 bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-rose-500 w-[84%]" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between text-[10px] font-black uppercase text-slate-500">
                        <span>Consultation Efficiency</span>
                        <span className="text-indigo-600">92%</span>
                     </div>
                     <div className="h-2 bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 w-[92%]" />
                     </div>
                  </div>
               </div>
            </div>

            {/* Pharmacy Stock Widget */}
            <div className="bg-slate-900 dark:bg-slate-950 p-8 rounded-[2.5rem] text-white shadow-xl space-y-6">
               <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black uppercase tracking-widest text-white/50">Pharmacy Stock</h3>
                  <Pill className="w-5 h-5 text-teal-400" />
               </div>
               <div className="space-y-4">
                  {pharmacyAlerts.map(alert => (
                    <div key={alert.id} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                       <div>
                          <p className="text-xs font-bold text-white">{alert.med}</p>
                          <p className="text-[10px] font-black text-rose-500 uppercase mt-0.5">{alert.status}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-sm font-black">{alert.stock}</p>
                          <p className="text-[9px] font-bold text-white/30 uppercase">{alert.unit}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <Link href="/app/pharmacy" className="block text-center text-[10px] font-black uppercase tracking-widest text-teal-400 hover:underline pt-2">
                  Inventory Manager <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
               </Link>
            </div>

            {/* Active Consultations Mini widget */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
               <div className="flex items-center gap-4 text-slate-400">
                  <Microscope className="w-5 h-5" />
                  <h3 className="text-[10px] font-black uppercase tracking-widest">Lab Requests</h3>
               </div>
               <div className="flex items-center gap-4">
                  <div className="text-3xl font-black text-slate-900 dark:text-white">12</div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase leading-tight">Tests pending<br/>validation today</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
