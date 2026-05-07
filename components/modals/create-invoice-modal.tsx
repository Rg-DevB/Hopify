"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Plus } from "lucide-react";

export default function CreateInvoiceModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    patient: "",
    service: "",
    amount: "",
    dueDate: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Invoice created!`, {
      description: `Invoice for ${form.patient} ($${form.amount}) generated successfully.`,
    });
    setForm({ patient: "", service: "", amount: "", dueDate: "", notes: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all shadow-sm shadow-teal-500/20">
          <Plus className="w-4 h-4" />
          Create Invoice
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-slate-900 dark:text-white text-xl">Create New Invoice</DialogTitle>
          <DialogDescription className="text-slate-500 dark:text-slate-400">
            Generate a new invoice for a patient visit or service.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Patient *</label>
            <input
              required
              value={form.patient}
              onChange={(e) => setForm({ ...form, patient: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
              placeholder="Patient name..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Service / Description *</label>
            <input
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
              placeholder="e.g. General Consultation"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Amount ($) *</label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Due Date *</label>
              <input
                type="date"
                required
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Notes</label>
            <textarea
              rows={2}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all resize-none dark:text-slate-200"
              placeholder="Additional billing notes..."
            />
          </div>
          <DialogFooter className="gap-2 pt-2">
            <button type="button" onClick={() => setOpen(false)} className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm shadow-teal-500/20">
              Create Invoice
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
