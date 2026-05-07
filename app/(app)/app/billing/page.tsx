"use client";

import CreateInvoiceModal from "@/components/modals/create-invoice-modal"
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CreditCard,
  Download,
  FileText,
  FileX
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const invoices = [
  {
    id: "INV-2026-089",
    patient: { name: "Md Tajuddin", id: "PAT-0012" },
    date: "Apr 26, 2026",
    dueDate: "May 10, 2026",
    amount: "$150.00",
    status: "paid",
  },
  {
    id: "INV-2026-090",
    patient: { name: "Shakib Hasan", id: "PAT-0045" },
    date: "Apr 26, 2026",
    dueDate: "May 10, 2026",
    amount: "$250.00",
    status: "pending",
  },
  {
    id: "INV-2026-091",
    patient: { name: "Asif Khan", id: "PAT-0089" },
    date: "Apr 20, 2026",
    dueDate: "May 04, 2026",
    amount: "$85.00",
    status: "paid",
  },
  {
    id: "INV-2026-092",
    patient: { name: "Rakib Ahmed", id: "PAT-0102" },
    date: "Mar 15, 2026",
    dueDate: "Mar 29, 2026",
    amount: "$300.00",
    status: "overdue",
  },
  {
    id: "INV-2026-093",
    patient: { name: "Hasan Mahmud", id: "PAT-0156" },
    date: "Feb 20, 2026",
    dueDate: "Mar 06, 2026",
    amount: "$120.00",
    status: "paid",
  },
];

const statusStyles = {
  paid: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
  pending: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-500/20",
  overdue: "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-100 dark:border-rose-500/20",
};

export default function BillingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredInvoices = invoices.filter((inv) => {
    const matchesSearch = inv.patient.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         inv.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && inv.status === activeTab;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            Dashboard / Billing
          </p>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Billing & Invoices</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage patient invoices, payments, and financial overview.</p>
        </div>
        <CreateInvoiceModal />
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-100 dark:border-emerald-500/20">
              <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg">
              <TrendingUp className="w-3 h-3" /> +12%
            </span>
          </div>
          <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Total Revenue</p>
          <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 mt-1">$24,500.00</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Current month</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-100 dark:border-amber-500/20">
              <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
          <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Outstanding</p>
          <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 mt-1">$3,250.00</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">14 pending invoices</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-100 dark:border-blue-500/20">
              <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Subscription Plan</p>
          <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 mt-1">Pro</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Next billing: May 15, 2026</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center transition-colors">
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          <button 
            onClick={() => setActiveTab("all")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap",
              activeTab === "all" 
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-500/20" 
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            )}
          >
            All Invoices
          </button>
          <button 
            onClick={() => setActiveTab("paid")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
              activeTab === "paid" 
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-500/20" 
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            )}
          >
            Paid
          </button>
          <button 
            onClick={() => setActiveTab("pending")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
              activeTab === "pending" 
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-500/20" 
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            )}
          >
            Pending
          </button>
          <button 
            onClick={() => setActiveTab("overdue")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
              activeTab === "overdue" 
                ? "bg-rose-600 text-white shadow-md shadow-rose-500/20" 
                : "text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10"
            )}
          >
            Overdue
          </button>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search invoices..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:bg-white dark:focus:bg-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition-all dark:text-slate-200 dark:placeholder-slate-400"
            />
          </div>
          <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
        {filteredInvoices.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-semibold tracking-wider">Invoice ID</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Patient</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Date & Due</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Amount</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Status</th>
                  <th className="px-6 py-4 font-semibold tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                {filteredInvoices.map((invoice) => {
                  return (
                    <tr key={invoice.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 font-medium text-slate-900 dark:text-slate-100">
                          <FileText className="w-4 h-4 text-slate-400" />
                          {invoice.id}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900 dark:text-slate-100">{invoice.patient.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500">{invoice.patient.id}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-700 dark:text-slate-200">{invoice.date}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-500">Due: {invoice.dueDate}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-slate-100">
                        {invoice.amount}
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-3 py-1.5 rounded-full text-xs font-bold border capitalize w-fit flex",
                          statusStyles[invoice.status as keyof typeof statusStyles]
                        )}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-2 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" title="Download PDF">
                            <Download className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                            <MoreHorizontal className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-20 flex flex-col items-center justify-center text-center px-4">
            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <FileX className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No invoices found</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs mt-1">
              There are no invoices matching your search or filter.
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
              className="mt-6 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
