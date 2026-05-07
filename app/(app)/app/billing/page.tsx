"use client";

import { 
  CreditCard, Search, Plus, Filter, 
  ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, 
  FileText, MoreVertical, Download, Printer 
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CreateInvoiceModal from "@/components/modals/create-invoice-modal";

const invoices = [
  {
    id: "INV-2024-001",
    patient: "Md Tajuddin",
    date: "May 02, 2024",
    amount: 150.00,
    status: "Paid",
    service: "General Consultation"
  },
  {
    id: "INV-2024-002",
    patient: "Sarah Miller",
    date: "May 03, 2024",
    amount: 2450.00,
    status: "Pending",
    service: "Cardiac Surgery"
  },
  {
    id: "INV-2024-003",
    patient: "Asif Khan",
    date: "May 04, 2024",
    amount: 85.00,
    status: "Overdue",
    service: "Lab Test"
  },
  {
    id: "INV-2024-004",
    patient: "Elena Rodriguez",
    date: "May 05, 2024",
    amount: 120.00,
    status: "Paid",
    service: "Pediatric Checkup"
  }
];

export default function BillingPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Billing & Invoices</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage hospital revenue, invoices, and payment tracking.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
          <CreateInvoiceModal />
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
            <CreditCard className="w-24 h-24" />
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Revenue</p>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">$42,850.00</h3>
          <div className="mt-4 flex items-center gap-2 text-emerald-600 font-bold text-xs bg-emerald-50 dark:bg-emerald-500/10 w-fit px-2 py-1 rounded-lg">
            <ArrowUpRight className="w-3 h-3" />
            +18.5% from last month
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Pending Payments</p>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">$8,240.00</h3>
          <div className="mt-4 flex items-center gap-2 text-amber-600 font-bold text-xs bg-amber-50 dark:bg-amber-500/10 w-fit px-2 py-1 rounded-lg">
            <Clock className="w-3 h-3" />
            12 Invoices pending
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Avg. Ticket</p>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">$345.50</h3>
          <div className="mt-4 flex items-center gap-2 text-teal-600 font-bold text-xs bg-teal-50 dark:bg-teal-500/10 w-fit px-2 py-1 rounded-lg">
            <CheckCircle2 className="w-3 h-3" />
            Consistent growth
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="font-black text-slate-900 dark:text-white text-lg flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-500" />
            Recent Invoices
          </h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search invoice..." 
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-teal-500 transition-all"
              />
            </div>
            <div className="flex bg-slate-50 dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700">
              {["All", "Paid", "Pending", "Overdue"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                    filter === f ? "bg-white dark:bg-slate-900 text-teal-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 dark:bg-slate-800/50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="px-8 py-4">Invoice ID</th>
                <th className="px-8 py-4">Patient</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Service</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {invoices.filter(inv => filter === "All" || inv.status === filter).map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-8 py-4">
                    <Link href={`/app/billing/${inv.id}`} className="font-black text-teal-600 hover:underline">
                      {inv.id}
                    </Link>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-700 dark:text-slate-300">{inv.patient}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-slate-500">{inv.date}</td>
                  <td className="px-8 py-4 font-medium text-slate-600 dark:text-slate-400">{inv.service}</td>
                  <td className="px-8 py-4 font-black text-slate-900 dark:text-white">${inv.amount.toFixed(2)}</td>
                  <td className="px-8 py-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                      inv.status === "Paid" ? "text-emerald-600 border-emerald-100 bg-emerald-50 dark:bg-emerald-500/10" : 
                      inv.status === "Pending" ? "text-amber-600 border-amber-100 bg-amber-50 dark:bg-amber-500/10" : 
                      "text-rose-600 border-rose-100 bg-rose-50 dark:bg-rose-500/10"
                    )}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {inv.status === "Pending" && (
                        <Link href={`/app/billing/${inv.id}`}>
                          <button className="px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                            Pay
                          </button>
                        </Link>
                      )}
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-teal-600">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-teal-600">
                        <Printer className="w-4 h-4" />
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

        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
          <p className="text-xs font-bold text-slate-400">Showing 4 of 128 invoices</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all">Previous</button>
            <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-900 dark:text-white hover:bg-slate-50 transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
