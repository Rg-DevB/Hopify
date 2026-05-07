"use client";

import { 
  Bed, Search, Plus, Filter, 
  CheckCircle2, AlertCircle, User, 
  LayoutGrid, List as ListIcon 
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import AddRoomModal from "@/components/modals/add-room-modal";

const rooms = [
  { id: "101", type: "ICU", floor: "1st Floor", status: "Occupied", patient: "Md Tajuddin", since: "2 days ago", color: "rose" },
  { id: "102", type: "ICU", floor: "1st Floor", status: "Available", patient: null, since: null, color: "emerald" },
  { id: "201", type: "General Ward", floor: "2nd Floor", status: "Occupied", patient: "Sarah Miller", since: "4 hours ago", color: "rose" },
  { id: "202", type: "General Ward", floor: "2nd Floor", status: "Maintenance", patient: null, since: null, color: "amber" },
  { id: "301", type: "Pediatric", floor: "3rd Floor", status: "Available", patient: null, since: null, color: "emerald" },
  { id: "302", type: "Pediatric", floor: "3rd Floor", status: "Occupied", patient: "Asif Khan", since: "1 week ago", color: "rose" },
  { id: "401", type: "VIP Suite", floor: "4th Floor", status: "Available", patient: null, since: null, color: "emerald" },
  { id: "402", type: "VIP Suite", floor: "4th Floor", status: "Occupied", patient: "John Davis", since: "12 hours ago", color: "rose" },
];

export default function RoomsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState("All");

  const filteredRooms = rooms.filter(room => filter === "All" || room.status === filter);

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Facility Management</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Monitor hospital beds, wards, and occupancy status.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-1 shadow-sm">
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
          <AddRoomModal />
        </div>
      </div>

      {/* Capacity Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Overall Occupancy</h3>
            <span className="text-sm font-bold text-teal-600">70% Full</span>
          </div>
          <div className="space-y-6">
            <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
              <div className="h-full bg-rose-500 w-[70%]" title="Occupied" />
              <div className="h-full bg-emerald-500 w-[25%]" title="Available" />
              <div className="h-full bg-amber-500 w-[5%]" title="Maintenance" />
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Occupied (84)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Available (30)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Maintenance (6)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-8 text-white shadow-lg shadow-teal-500/20">
          <Bed className="w-10 h-10 mb-4 opacity-50" />
          <h3 className="text-xl font-bold mb-2">Total Capacity</h3>
          <p className="text-4xl font-black mb-4">120</p>
          <p className="text-xs font-medium opacity-80">Including ICU, General, and VIP wards across all 4 floors.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2">
        {["All", "Available", "Occupied", "Maintenance"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
              filter === f 
                ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md"
                : "bg-white dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Rooms Content */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRooms.map((room) => (
            <div key={room.id} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden hover:border-teal-500 transition-all group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black shadow-lg",
                    room.status === "Occupied" ? "bg-rose-500 shadow-rose-500/20" : 
                    room.status === "Available" ? "bg-emerald-500 shadow-emerald-500/20" : 
                    "bg-amber-500 shadow-amber-500/20"
                  )}>
                    {room.id}
                  </div>
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border",
                    room.status === "Occupied" ? "text-rose-600 border-rose-100 bg-rose-50 dark:bg-rose-500/10" : 
                    room.status === "Available" ? "text-emerald-600 border-emerald-100 bg-emerald-50 dark:bg-emerald-500/10" : 
                    "text-amber-600 border-amber-100 bg-amber-50 dark:bg-amber-500/10"
                  )}>
                    {room.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 dark:text-white">{room.type}</h3>
                  <p className="text-xs text-slate-500">{room.floor}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-50 dark:border-slate-800">
                  {room.patient ? (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">{room.patient}</p>
                        <p className="text-[10px] text-slate-500">Since {room.since}</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs font-bold text-slate-400 italic">No patient assigned</p>
                  )}
                </div>
              </div>
              <button className="w-full py-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-teal-600 hover:text-white text-[11px] font-black uppercase tracking-widest text-slate-500 transition-all">
                {room.status === "Available" ? "Assign Patient" : "View Details"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 dark:bg-slate-800/50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="px-8 py-4">Room ID</th>
                <th className="px-8 py-4">Type</th>
                <th className="px-8 py-4">Floor</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Patient</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {filteredRooms.map((room) => (
                <tr key={room.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-8 py-4 font-black text-slate-900 dark:text-white">{room.id}</td>
                  <td className="px-8 py-4 font-bold text-slate-700 dark:text-slate-300">{room.type}</td>
                  <td className="px-8 py-4 text-slate-500">{room.floor}</td>
                  <td className="px-8 py-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                      room.status === "Occupied" ? "text-rose-600 border-rose-100 bg-rose-50" : 
                      room.status === "Available" ? "text-emerald-600 border-emerald-100 bg-emerald-50" : 
                      "text-amber-600 border-amber-100 bg-amber-50"
                    )}>
                      {room.status}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    {room.patient ? (
                      <span className="font-bold text-slate-700 dark:text-slate-300">{room.patient}</span>
                    ) : (
                      <span className="text-slate-400 italic">Empty</span>
                    )}
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="text-xs font-bold text-teal-600 hover:underline">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
