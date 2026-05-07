"use client"

import { 
  Calendar as CalendarIcon, Users, Activity, AlertCircle, Phone, ArrowUpRight, Clock,
  TrendingUp, Zap, UserPlus, FileText, CalendarPlus, Bot, Star, CheckCircle2,
  MessageSquare, BrainCircuit, Search, Bell, ChevronRight, MoreVertical, ArrowRight,
  Stethoscope, Bed
} from "lucide-react"
import Link from "next/link"
import NewAppointmentModal from "@/components/modals/new-appointment-modal"
import AddPatientModal from "@/components/modals/add-patient-modal"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

// Mini bar chart data (last 7 days revenue)
const revenueData = [
  { day: "Mon", value: 1200, max: 2400 },
  { day: "Tue", value: 1800, max: 2400 },
  { day: "Wed", value: 900, max: 2400 },
  { day: "Thu", value: 2400, max: 2400 },
  { day: "Fri", value: 2100, max: 2400 },
  { day: "Sat", value: 600, max: 2400 },
  { day: "Sun", value: 300, max: 2400 },
]

const aiConversations = [
  { id: 1, patient: "Sarah Miller", lastMessage: "How do I prepare for my blood test tomorrow?", time: "Just now", status: "booking" },
  { id: 2, patient: "John Davis", lastMessage: "Can I reschedule my cardiology appointment?", time: "5m ago", status: "rescheduling" },
  { id: 3, patient: "Elena Rodriguez", lastMessage: "Thank you for the prescription info.", time: "12m ago", status: "completed" },
]

const activityFeed = [
  { id: 1, action: "New appointment booked", detail: "Md Tajuddin — General Consultation", time: "2 min ago", icon: CalendarPlus, color: "teal" },
  { id: 2, action: "Patient registered", detail: "Nadia Rahman joined the clinic", time: "18 min ago", icon: UserPlus, color: "indigo" },
  { id: 3, action: "Invoice paid", detail: "INV-2026-089 — $150.00 received", time: "1h ago", icon: FileText, color: "emerald" },
  { id: 4, action: "AI handled booking", detail: "Chatbot scheduled Asif Khan automatically", time: "2h ago", icon: Bot, color: "violet" },
  { id: 5, action: "Appointment cancelled", detail: "Rakib Ahmed cancelled dermatology visit", time: "3h ago", icon: AlertCircle, color: "rose" },
]

const colorMap: Record<string, string> = {
  teal: "bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400",
  indigo: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  emerald: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  violet: "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400",
  rose: "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400",
}

export default function DashboardPage() {
  const completionRate = 73
  const satisfactionScore = 4.8
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      toast.info("Welcome back, Dr. Tajuddin!", {
        description: "Hopify AI has handled 3 new bookings since your last login.",
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header & Quick Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <div className="px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Live Platform
            </div>
            <span className="text-slate-400 dark:text-slate-500 text-xs font-medium">Sunday, May 7, 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Good morning, Dr. Tajuddin</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Here is what&apos;s happening with your clinic today.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative hidden xl:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-64 pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-slate-200"
            />
          </div>
          <button className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl relative hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900" />
          </button>
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-teal-500/25 active:scale-95">
            <Zap className="w-4 h-4 fill-white" />
            AI Insights
          </button>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <NewAppointmentModal>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 group hover:border-teal-500 transition-all cursor-pointer w-full">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
               <CalendarPlus className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">+ Appointment</h3>
              <p className="text-xs text-slate-400">Schedule a visit</p>
            </div>
          </div>
        </NewAppointmentModal>
        
        <AddPatientModal>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 group hover:border-indigo-500 transition-all cursor-pointer w-full">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
               <UserPlus className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">+ Patient</h3>
              <p className="text-xs text-slate-400">Register new record</p>
            </div>
          </div>
        </AddPatientModal>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 group hover:border-emerald-500 transition-all cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
             <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Export CSV</h3>
            <p className="text-xs text-slate-400">Download reports</p>
          </div>
        </div>
        
        <Link href="/app/ai-settings">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 group hover:border-violet-500 transition-all cursor-pointer text-violet-600">
            <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
               <Bot className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">AI Settings</h3>
              <p className="text-xs text-slate-400">Configure agents</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Hospital Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-teal-500/50 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Patients Today</p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2">48</h3>
              <p className="text-[11px] text-teal-600 font-bold mt-1">+12% from yesterday</p>
            </div>
            <div className="w-10 h-10 bg-teal-50 dark:bg-teal-500/10 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500/50 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Doctors</p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2">14<span className="text-sm text-slate-400 font-medium ml-1">/ 18</span></h3>
              <p className="text-[11px] text-indigo-600 font-bold mt-1">4 Available now</p>
            </div>
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/50 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hospital Beds</p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2">84<span className="text-sm text-slate-400 font-medium ml-1">/ 120</span></h3>
              <p className="text-[11px] text-emerald-600 font-bold mt-1">36 Rooms available</p>
            </div>
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <Bed className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-rose-100 dark:border-rose-900/50 shadow-sm hover:border-rose-500/50 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Emergency</p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2">03</h3>
              <p className="text-[11px] text-rose-600 font-bold mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                Critical cases
              </p>
            </div>
            <div className="w-10 h-10 bg-rose-50 dark:bg-rose-500/10 rounded-xl flex items-center justify-center">
              <Activity className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Stats & Revenue */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Real Revenue Chart */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
              <div>
                <h2 className="font-bold text-lg text-slate-900 dark:text-white">Financial Overview</h2>
                <p className="text-sm text-slate-500">Weekly revenue growth</p>
              </div>
              <select className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold px-3 py-1.5 outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-8 mb-8">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Revenue</p>
                  <p className="text-3xl font-black text-slate-900 dark:text-white">$12,840.00</p>
                  <p className="text-xs font-bold text-emerald-500 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +12.5% 
                    <span className="text-slate-400 font-normal">vs last week</span>
                  </p>
                </div>
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 hidden sm:block" />
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Avg. Per Patient</p>
                  <p className="text-3xl font-black text-slate-900 dark:text-white">$145</p>
                  <p className="text-xs font-bold text-teal-500 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Optimal 
                  </p>
                </div>
              </div>

              <div className="flex items-end justify-between gap-4 h-56 px-2">
                {revenueData.map((d) => (
                  <div key={d.day} className="flex-1 flex flex-col items-center gap-3 group">
                    <div className="relative w-full flex flex-col items-center">
                      <div className="absolute -top-8 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-2">
                        ${d.value}
                      </div>
                      <div className="w-full max-w-[40px] bg-slate-100 dark:bg-slate-800 rounded-t-xl overflow-hidden relative" style={{ height: "180px" }}>
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-600 to-cyan-500 group-hover:from-teal-500 group-hover:to-cyan-400 transition-all duration-1000 ease-out rounded-t-xl"
                          style={{ height: `${(d.value / d.max) * 100}%` }}
                        >
                          <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse opacity-0 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase">{d.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Schedule Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h2 className="font-bold text-lg text-slate-900 dark:text-white">Upcoming Appointments</h2>
              <Link href="/app/appointments" className="text-teal-600 dark:text-teal-400 text-xs font-bold flex items-center gap-1 hover:underline underline-offset-4">
                Full Schedule <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50 dark:bg-slate-800/50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Patient</th>
                    <th className="px-6 py-4">Specialty</th>
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right pr-8">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                   <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-teal-700 dark:text-teal-400 font-bold text-xs">MT</div>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Md Tajuddin</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-slate-500 font-medium">General Consultation</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-slate-100">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        09:30 AM
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 rounded-full text-[10px] font-bold border border-teal-100 dark:border-teal-500/20">CONFIRMED</span>
                    </td>
                    <td className="px-6 py-4 text-right pr-8">
                      <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-slate-400" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-xs">AS</div>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Asif Khan</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-slate-500 font-medium">Cardiology Follow-up</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-slate-100">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        11:15 AM
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-[10px] font-bold border border-amber-100 dark:border-amber-500/20">PENDING</span>
                    </td>
                    <td className="px-6 py-4 text-right pr-8">
                      <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-slate-400" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: AI Widget & Activity */}
        <div className="space-y-8">
          
          {/* AI Conversations Widget */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-xl shadow-slate-900/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-teal-500/20 transition-all duration-700" />
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-teal-400" />
                <h3 className="font-bold">AI Agent Live Feed</h3>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">Handling</span>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              {aiConversations.map((conv) => (
                <div key={conv.id} className="p-3.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group/item">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold text-white group-hover/item:text-teal-300 transition-colors">{conv.patient}</span>
                    <span className="text-[10px] text-slate-500 font-medium">{conv.time}</span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1 italic">&quot;{conv.lastMessage}&quot;</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className={cn(
                      "text-[9px] font-bold uppercase px-2 py-0.5 rounded-full",
                      conv.status === "booking" ? "bg-teal-500/20 text-teal-400" :
                      conv.status === "rescheduling" ? "bg-amber-500/20 text-amber-400" :
                      "bg-emerald-500/20 text-emerald-400"
                    )}>
                      {conv.status}
                    </span>
                    <MessageSquare className="w-3.5 h-3.5 text-slate-600 group-hover/item:text-teal-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-2.5 bg-white/10 hover:bg-white/15 border border-white/5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
              View Agent Logs <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Performance Gauges */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Patient Satisfaction</h3>
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="12" className="text-slate-100 dark:text-slate-800" />
                    <circle cx="60" cy="60" r="54" fill="none" stroke="url(#dashGrad)" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${satisfactionScore * 20 * 3.39} 339`} />
                    <defs>
                      <linearGradient id="dashGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0d9488" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black text-slate-900 dark:text-white">{satisfactionScore}</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className={`w-4 h-4 ${i <= 4 ? "text-amber-400 fill-amber-400" : "text-slate-200 dark:text-slate-700"}`} />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Based on 124 reviews</p>
                  <p className="text-xs font-bold text-teal-600 mt-1">Excellent (Top 5%)</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Completion Rate</h3>
                <span className="text-xs font-black text-slate-900 dark:text-white">{completionRate}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-1000"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                <span>11 APPOINTMENTS DONE</span>
                <span className="text-teal-600">4 REMAINING</span>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
             <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Recent Activity</h3>
             <div className="space-y-6">
               {activityFeed.slice(0, 4).map((item) => (
                 <div key={item.id} className="flex gap-4 group cursor-pointer">
                   <div className={cn(
                     "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm",
                     colorMap[item.color]
                   )}>
                     <item.icon className="w-5 h-5" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <p className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-teal-600 transition-colors">{item.action}</p>
                     <p className="text-[11px] text-slate-500 truncate">{item.detail}</p>
                     <p className="text-[10px] text-slate-400 mt-1 font-medium">{item.time}</p>
                   </div>
                 </div>
               ))}
             </div>
             <button className="w-full mt-8 py-2 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[11px] font-bold text-slate-600 dark:text-slate-400 transition-colors">
               View All Activity
             </button>
          </div>
        </div>
      </div>
    </div>
  )
}
