"use client";

import { 
  Pill, Search, Plus, Filter, 
  AlertTriangle, CheckCircle2, Calendar, 
  ArrowUpRight, Package, Truck, MoreVertical,
  History, Settings2, Download
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const inventory = [
  {
    id: "MED-001",
    name: "Amoxicillin",
    category: "Antibiotics",
    stock: 850,
    unit: "Capsules",
    expiry: "Dec 2025",
    status: "In Stock",
    price: 12.50
  },
  {
    id: "MED-002",
    name: "Paracetamol",
    category: "Analgesics",
    stock: 45,
    unit: "Tablets",
    expiry: "Aug 2024",
    status: "Low Stock",
    price: 5.00
  },
  {
    id: "MED-003",
    name: "Insulin Glargine",
    category: "Antidiabetic",
    stock: 120,
    unit: "Vials",
    expiry: "Jan 2025",
    status: "In Stock",
    price: 45.00
  },
  {
    id: "MED-004",
    name: "Atorvastatin",
    category: "Statins",
    stock: 0,
    unit: "Tablets",
    expiry: "Oct 2024",
    status: "Out of Stock",
    price: 18.00
  }
];

export default function PharmacyPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Pharmacy & Inventory</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage medicines, medical supplies, and supplier orders.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-all shadow-sm">
            <History className="w-5 h-5" />
          </button>
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-teal-500/25 active:scale-95">
            <Plus className="w-4 h-4" />
            Add Medicine
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-teal-50 dark:bg-teal-500/10 rounded-2xl flex items-center justify-center">
            <Package className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Items</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">1,248</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-rose-50 dark:bg-rose-500/10 rounded-2xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-rose-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Low Stock Alerts</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">12</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center">
            <Calendar className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Expiring Soon</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">08</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center">
            <Truck className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pending Orders</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">04</h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by medicine name, ID or category..." 
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm outline-none focus:border-teal-500 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex bg-slate-50 dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700">
              {["All", "In Stock", "Low Stock", "Out of Stock"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-xs font-bold transition-all",
                    filter === f ? "bg-white dark:bg-slate-900 text-teal-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
            <button className="p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all">
              <Settings2 className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 dark:bg-slate-800/50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="px-8 py-4">Medicine Info</th>
                <th className="px-8 py-4">Category</th>
                <th className="px-8 py-4">Stock Level</th>
                <th className="px-8 py-4">Expiry Date</th>
                <th className="px-8 py-4">Unit Price</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {inventory.filter(med => filter === "All" || med.status === filter).map((med) => (
                <tr key={med.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center">
                        <Pill className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-black text-slate-900 dark:text-white">{med.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{med.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="font-bold text-slate-600 dark:text-slate-400">{med.category}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between w-32">
                        <span className="text-xs font-black text-slate-700 dark:text-slate-200">{med.stock}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase">{med.unit}</span>
                      </div>
                      <div className="w-32 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={cn(
                          "h-full rounded-full transition-all",
                          med.stock > 100 ? "bg-teal-500" : med.stock > 0 ? "bg-amber-500" : "bg-rose-500"
                        )} style={{ width: `${Math.min((med.stock / 1000) * 100, 100)}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-bold text-slate-600 dark:text-slate-400">{med.expiry}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-black text-slate-900 dark:text-white">${med.price.toFixed(2)}</td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                      med.status === "In Stock" ? "text-emerald-600 border-emerald-100 bg-emerald-50 dark:bg-emerald-500/10" : 
                      med.status === "Low Stock" ? "text-amber-600 border-amber-100 bg-amber-50 dark:bg-amber-500/10" : 
                      "text-rose-600 border-rose-100 bg-rose-50 dark:bg-rose-500/10"
                    )}>
                      {med.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-teal-600">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-slate-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <button className="flex items-center gap-2 text-xs font-bold text-teal-600 hover:underline">
               <Truck className="w-4 h-4" />
               Manage Suppliers
             </button>
             <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:underline">
               <Download className="w-4 h-4" />
               Download Inventory Report
             </button>
          </div>
          <div className="flex gap-2">
            <button className="px-5 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all shadow-sm">Previous</button>
            <button className="px-5 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-900 dark:text-white hover:bg-slate-50 transition-all shadow-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
