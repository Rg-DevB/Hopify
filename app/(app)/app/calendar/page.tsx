import FullCalendarWrapper from "@/components/calendar/full-calendar-wrapper";

export default function CalendarPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            Dashboard / Calendar
          </p>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Calendar</h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">Scheduled</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">Follow-up</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">Cancelled</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">No Show</span>
          </div>
        </div>
      </div>

      <FullCalendarWrapper />
    </div>
  );
}
