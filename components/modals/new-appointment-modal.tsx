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
import { CalendarPlus } from "lucide-react";

const services = [
  "General Consultation",
  "Follow Up Visit",
  "Cardiology Screening",
  "Vaccination & Immunization",
  "Neurological Exam",
  "Vision Therapy",
];

export default function NewAppointmentModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    patient: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Appointment scheduled!`, {
      description: `${form.patient} — ${form.service} on ${form.date} at ${form.time}`,
    });
    setForm({ patient: "", service: "", date: "", time: "", notes: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all shadow-sm shadow-teal-500/20">
          <CalendarPlus className="w-4 h-4" />
          New Appointment
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-slate-900 dark:text-white text-xl">Schedule New Appointment</DialogTitle>
          <DialogDescription className="text-slate-500 dark:text-slate-400">
            Select a patient and a service to schedule a new visit.
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
              placeholder="Start typing patient name..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Service *</label>
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
            >
              <option value="">Select a service</option>
              <option value="consultation">General Consultation</option>
              <option value="followup">Follow Up</option>
              <option value="checkup">Routine Checkup</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Date *</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Time *</label>
              <input
                type="time"
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all dark:text-slate-200"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Notes</label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all resize-none dark:text-slate-200"
              placeholder="Any additional information..."
            />
          </div>
          <DialogFooter className="gap-2 pt-2">
            <button type="button" onClick={() => setOpen(false)} className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm shadow-teal-500/20">
              Schedule Appointment
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
