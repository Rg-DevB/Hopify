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
import { UserPlus } from "lucide-react";

export default function AddPatientModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "male",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    toast.success(`Patient added successfully!`, {
      description: `${form.name} has been added to the directory.`,
    });
    setForm({ name: "", email: "", phone: "", dob: "", gender: "male", notes: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all shadow-sm shadow-teal-500/20">
          <UserPlus className="w-4 h-4" />
          Add Patient
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-slate-900 dark:text-white text-xl">Add New Patient</DialogTitle>
          <DialogDescription className="text-slate-500 dark:text-slate-400">
            Fill in the patient&apos;s details to add them to the directory.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
                placeholder="e.g. John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone *</label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
                placeholder="+880 17xx-xxxxxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Date of Birth</label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) => setForm({ ...form, dob: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Gender</label>
              <select
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Medical Notes</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all resize-none dark:text-slate-200"
                placeholder="Any allergies, chronic conditions, etc."
              />
            </div>
          </div>
          <DialogFooter className="gap-2 pt-2">
            <button type="button" onClick={() => setOpen(false)} className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm shadow-teal-500/20">
              Add Patient
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
