export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded"></div>
          <div className="h-8 w-64 bg-slate-200 dark:bg-slate-800 rounded"></div>
        </div>
        <div className="h-10 w-32 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl"></div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl"></div>
        <div className="h-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl"></div>
      </div>
      <div className="h-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl"></div>
    </div>
  );
}
