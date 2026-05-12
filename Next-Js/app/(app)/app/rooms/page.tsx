"use client";

import { useState } from "react";
import AdmissionModal from "@/components/modals/admission-modal";
import DischargeModal from "@/components/modals/discharge-modal";
import { 
  Bed, Search, Plus, Filter, 
  CheckCircle2, AlertCircle, User, 
  LayoutGrid, List as ListIcon,
  LogOut, ArrowRightLeft, Clock,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const roomsData = [
  { id: "101", type: "ICU", floor: "1st Floor", status: "Occupied", patient: "Md Tajuddin", since: "2026-05-09", color: "rose" },
  { id: "102", type: "ICU", floor: "1st Floor", status: "Available", patient: null, since: null, color: "emerald" },
  { id: "201", type: "General Ward", floor: "2nd Floor", status: "Occupied", patient: "Sarah Miller", since: "2026-05-11", color: "rose" },
  { id: "202", type: "General Ward", floor: "2nd Floor", status: "Maintenance", patient: null, since: null, color: "amber" },
  { id: "301", type: "Pediatric", floor: "3rd Floor", status: "Available", patient: null, since: null, color: "emerald" },
  { id: "302", type: "Pediatric", floor: "3rd Floor", status: "Occupied", patient: "Asif Khan", since: "2026-05-04", color: "rose" },
  { id: "401", type: "VIP Suite", floor: "4th Floor", status: "Available", patient: null, since: null, color: "emerald" },
  { id: "402", type: "VIP Suite", floor: "4th Floor", status: "Occupied", patient: "John Davis", since: "2026-05-10", color: "rose" },
];

export default function RoomsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState("All");
  const [dischargeModal, setDischargeModal] = useState({ open: false, patient: "", room: "" });

  const filteredRooms = roomsData.filter(room => filter === "All" || room.status === filter);

  const calculateDuration = (since: string | null) => {
    if (!since) return null;
    const start = new Date(since);
    const now = new Date("2026-05-11"); // Fixed for demo
    const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff === 0 ? "Today" : `${diff} days`;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Clinic / Hospitalization</p>
           <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Beds & Wards Dashboard</h1>
           <p className="text-slate-500 dark:text-slate-400 mt-1">Real-time occupancy monitoring and patient admission flow.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-1 shadow-sm mr-2 transition-colors">
            <button 
              onClick={() => setView("grid")}
              className={cn("p-2 rounded-lg transition-all", view === "grid" ? "bg-slate-100 dark:bg-slate-800 text-teal-600" : "text-slate-400 hover:text-slate-600")}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setView("list")}
              className={cn("p-2 rounded-lg transition-all", view === "list" ? "bg-slate-100 dark:bg-slate-800 text-teal-600" : "text-slate-400 hover:text-slate-600")}
            >
              <ListIcon className="w-5 h-5" />
            </button>
          </div>
          <AdmissionModal />
        </div>
      </div>

      {/* Real-time Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-teal-600">
               <Bed className="w-6 h-6" />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Available Beds</p>
               <p className="text-2xl font-black text-slate-900 dark:text-white">36 <span className="text-xs font-bold text-slate-400">/ 120</span></p>
            </div>
         </div>
         <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-600">
               <AlertCircle className="w-6 h-6" />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">ICU Occupancy</p>
               <p className="text-2xl font-black text-slate-900 dark:text-white">92%</p>
            </div>
         </div>
         <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600">
               <Clock className="w-6 h-6" />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Avg Stay</p>
               <p className="text-2xl font-black text-slate-900 dark:text-white">4.2 <span className="text-xs font-bold text-slate-400">Days</span></p>
            </div>
         </div>
         <div className="bg-slate-900 dark:bg-slate-100 p-6 rounded-[2rem] shadow-xl flex items-center gap-4 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-white/10 dark:bg-black/5 flex items-center justify-center text-white dark:text-black">
               <Plus className="w-6 h-6" />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase text-white/50 dark:text-slate-400 tracking-widest">Critical Alert</p>
               <p className="text-sm font-bold text-white dark:text-slate-900">Staffing level low</p>
            </div>
         </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
         <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
           {["All", "Available", "Occupied", "Maintenance"].map((f) => (
             <button
               key={f}
               onClick={() => setFilter(f)}
               className={cn(
                 "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border",
                 filter === f 
                   ? "bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-500/20"
                   : "bg-white dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50"
               )}
             >
               {f}
             </button>
           ))}
         </div>
         <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input placeholder="Search room or patient..." className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs outline-none focus:border-teal-500 transition-all" />
         </div>
      </div>

      {/* Rooms Content */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRooms.map((room) => (
            <div key={room.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden hover:border-teal-500/30 transition-all group">
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black shadow-lg",
                    room.status === "Occupied" ? "bg-rose-500" : 
                    room.status === "Available" ? "bg-teal-500" : 
                    "bg-amber-500"
                  )}>
                    {room.id}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                     <span className={cn(
                       "text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-full border",
                       room.status === "Occupied" ? "text-rose-600 border-rose-100 bg-rose-50" : 
                       room.status === "Available" ? "text-teal-600 border-teal-100 bg-teal-50" : 
                       "text-amber-600 border-amber-100 bg-amber-50"
                     )}>
                       {room.status}
                     </span>
                     {room.since && (
                        <span className="text-[9px] font-bold text-slate-400 uppercase">{calculateDuration(room.since)} stay</span>
                     )}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-black text-lg text-slate-900 dark:text-white tracking-tight">{room.type}</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                     <MapPin className="w-3 h-3" /> {room.floor}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-800">
                  {room.patient ? (
                    <div className="space-y-4">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-xs text-slate-500">
                             {room.patient.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="min-w-0">
                             <p className="text-sm font-black text-slate-900 dark:text-white truncate">{room.patient}</p>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID Patient: {room.id}99</p>
                          </div>
                       </div>
                       <div className="flex gap-2">
                          <button 
                            onClick={() => toast.info("Transfer workflow started...")}
                            className="flex-1 py-2 bg-slate-50 dark:bg-slate-800/50 text-[9px] font-black uppercase tracking-widest text-slate-500 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-all border border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2"
                          >
                             <ArrowRightLeft className="w-3 h-3" /> Transfer
                          </button>
                          <button 
                            onClick={() => setDischargeModal({ open: true, patient: room.patient!, room: room.id })}
                            className="flex-1 py-2 bg-rose-500/5 text-[9px] font-black uppercase tracking-widest text-rose-600 rounded-lg hover:bg-rose-500 hover:text-white transition-all border border-rose-500/10 flex items-center justify-center gap-2"
                          >
                             <LogOut className="w-3 h-3" /> Discharge
                          </button>
                       </div>
                    </div>
                  ) : (
                    <div className="py-2">
                       <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic mb-4">No patient assigned</p>
                       <button className="w-full py-2 bg-teal-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-md">Assign Bed</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-slate-50/80 dark:bg-slate-800/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
              <tr>
                <th className="px-8 py-5">Room / Floor</th>
                <th className="px-8 py-5">Ward Type</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Assigned Patient</th>
                <th className="px-8 py-5">Stay Duration</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredRooms.map((room) => (
                <tr key={room.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-8 py-5">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center font-black text-xs">{room.id}</div>
                        <span className="text-xs font-bold text-slate-500">{room.floor}</span>
                     </div>
                  </td>
                  <td className="px-8 py-5 font-black text-slate-900 dark:text-white text-xs">{room.type}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                      room.status === "Occupied" ? "text-rose-600 border-rose-100 bg-rose-50" : 
                      room.status === "Available" ? "text-teal-600 border-teal-100 bg-teal-50" : 
                      "text-amber-600 border-amber-100 bg-amber-50"
                    )}>
                      {room.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    {room.patient ? (
                      <span className="text-sm font-black text-slate-700 dark:text-slate-300">{room.patient}</span>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium italic">Empty</span>
                    )}
                  </td>
                  <td className="px-8 py-5">
                     <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{calculateDuration(room.since) || "-"}</span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button onClick={() => room.patient && setDischargeModal({ open: true, patient: room.patient, room: room.id })} className="p-2 text-slate-400 hover:text-rose-600 transition-colors">
                       <LogOut className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <DischargeModal 
        open={dischargeModal.open}
        onOpenChange={(open) => setDischargeModal({ ...dischargeModal, open })}
        patientName={dischargeModal.patient}
        roomId={dischargeModal.room}
      />
    </div>
  );
}
