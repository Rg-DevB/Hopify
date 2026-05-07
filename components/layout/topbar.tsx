"use client";

import { Search, Bell, Moon, Sun, X, CalendarPlus, UserPlus, AlertCircle, CreditCard } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
  const [notifications, setNotifications] = useState(sampleNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => { setMounted(true); }, []);

  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 shrink-0 transition-colors relative z-30">
      <div className="flex-1 max-w-xl ml-10 lg:ml-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input type="text" placeholder="Search patients, appointments..." className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-transparent rounded-full text-sm focus:bg-white dark:focus:bg-slate-800 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800 outline-none transition-all dark:text-slate-200 dark:placeholder-slate-400" />
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 ml-4">
        {mounted && (
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="relative p-2 text-slate-400 hover:text-teal-600 transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-800">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
        
        {/* Notification Bell */}
        <div className="relative">
          <button onClick={() => setNotifOpen(!notifOpen)} className="relative p-2 text-slate-400 hover:text-teal-600 transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-800">
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900 text-[10px] text-white font-bold flex items-center justify-center">{unreadCount}</span>
            )}
          </button>

          {/* Notification dropdown */}
          {notifOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setNotifOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 overflow-hidden animate-fade-in">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <h3 className="font-bold text-slate-800 dark:text-slate-100">Notifications</h3>
                  <div className="flex items-center gap-2">
                    {unreadCount > 0 && (
                      <button onClick={markAllRead} className="text-xs text-teal-600 dark:text-teal-400 font-medium hover:underline">Mark all read</button>
                    )}
                    <button onClick={() => setNotifOpen(false)} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
                  {notifications.map((n) => (
                    <div key={n.id} className={`p-4 flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer ${!n.read ? "bg-teal-50/30 dark:bg-teal-500/5" : ""}`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${n.color}`}>
                        <n.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                          {n.title}
                          {!n.read && <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0"></span>}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{n.desc}</p>
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-slate-200 dark:border-slate-800 text-center">
                  <button className="text-sm text-teal-600 dark:text-teal-400 font-semibold hover:underline">View all notifications</button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-3 pl-3 border-l border-slate-200 dark:border-slate-800">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">@theblockchaincoders</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Clinic Admin</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold border-2 border-white dark:border-slate-800 shadow-sm text-sm">
            BC
          </div>
        </div>
      </div>
    </header>
  );
}
