"use client";

import { Search, Bell, Moon, Sun, X, CalendarPlus, UserPlus, AlertCircle, CreditCard } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/language-switcher";
import SearchModal from "@/components/search-modal";

const sampleNotifications = [
  { id: 1, title: "New appointment booked", desc: "Md Tajuddin — Tomorrow at 9:30 AM", time: "2m ago", icon: CalendarPlus, read: false, color: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10" },
  { id: 2, title: "Patient registered", desc: "Nadia Rahman joined the clinic", time: "18m ago", icon: UserPlus, read: false, color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10" },
  { id: 3, title: "Invoice overdue", desc: "INV-2026-092 — Rakib Ahmed ($300)", time: "1h ago", icon: AlertCircle, read: true, color: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10" },
  { id: 4, title: "Payment received", desc: "INV-2026-089 — $150.00", time: "3h ago", icon: CreditCard, read: true, color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10" },
];

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 shrink-0 transition-colors relative z-30">
      <div className="flex-1 max-w-xl ml-10 lg:ml-0">
        <div className="relative group cursor-pointer" onClick={() => setSearchOpen(true)}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors" />
          <div className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-transparent rounded-full text-sm text-slate-400 dark:text-slate-500 transition-all border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-700 flex items-center justify-between">
             <span>Search patients, appointments...</span>
             <div className="flex items-center gap-1 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="text-[10px] font-black opacity-40">⌘K</span>
             </div>
          </div>
        </div>
      </div>
      
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <div className="flex items-center gap-2 sm:gap-4 ml-4">
        {/* System Status */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-full">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Systems Online</span>
        </div>

        <LanguageSwitcher />
        {mounted && (
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="relative p-2.5 text-slate-400 hover:text-teal-600 transition-all rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
        
        {/* Notification Bell */}
        <div className="relative">
          <button onClick={() => setNotifOpen(!notifOpen)} className="relative p-2.5 text-slate-400 hover:text-teal-600 transition-all rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-4 h-4 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900 text-[10px] text-white font-black flex items-center justify-center shadow-lg shadow-rose-500/20">{unreadCount}</span>
            )}
          </button>

          {/* Notification dropdown */}
          {notifOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setNotifOpen(false)} />
              <div className="absolute right-0 top-full mt-4 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                  <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">Clinical Alerts</h3>
                  <div className="flex items-center gap-3">
                    {unreadCount > 0 && (
                      <button onClick={markAllRead} className="text-[10px] font-black text-teal-600 uppercase tracking-widest hover:underline">Clear all</button>
                    )}
                    <button onClick={() => setNotifOpen(false)} className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="max-h-[400px] overflow-y-auto divide-y divide-slate-50 dark:divide-slate-800">
                  {notifications.map((n) => (
                    <div key={n.id} className={cn(
                      "p-5 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer group",
                      !n.read ? "bg-teal-500/[0.02]" : ""
                    )}>
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform", n.color)}>
                        <n.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-sm font-black text-slate-900 dark:text-white truncate pr-4">{n.title}</p>
                          {!n.read && <div className="w-2 h-2 rounded-full bg-teal-500 shadow-lg shadow-teal-500/40 mt-1.5" />}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{n.desc}</p>
                        <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 text-center">
                  <button className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] hover:underline">View All Notifications</button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-4 pl-4 border-l border-slate-100 dark:border-slate-800 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black text-slate-900 dark:text-white leading-none">Dr. Tajuddin</p>
            <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mt-1">Chief Surgeon</p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-black border-2 border-white dark:border-slate-800 shadow-xl shadow-teal-500/20 group-hover:scale-110 transition-transform">
            DT
          </div>
        </div>
      </div>
    </header>
  );
}
