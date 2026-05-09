"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  HeartPulse, Sparkles, BrainCircuit, Activity, 
  Users, BarChart3, Pill, ArrowRight, ShieldCheck,
  CheckCircle2, Globe, Moon, Sun, Menu, X, Play,
  MessageSquare, Calendar, ChevronRight, Target,
  Stethoscope, Clock, CreditCard, ChevronDown, MoreVertical,
  Star, TrendingUp, Zap, UserPlus, FileText, CalendarPlus, Bot, Bell, Search,
  AlertCircle, Shield, Award, Lock, HelpCircle, LayoutDashboard, Database, ClipboardList, Send,
  Bed, Check, Mail, Facebook, Instagram, Twitter
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";

// SEO Metadata (Client-side simulation or head update)
// In a real app, this would be in a separate layout or metadata export
// Since it's a "use client" page, we'll use a Head component if needed, or just standard semantic tags.

// FAITHFUL REPRODUCTION OF DASHBOARD COMPONENTS
const DashboardMockup = () => (
  <div className="w-full h-full bg-white dark:bg-slate-900 flex flex-col font-sans overflow-hidden">
    <div className="h-16 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center gap-6">
        <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-white">
          <HeartPulse className="w-6 h-6" />
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <div className="h-3 w-32 bg-slate-200 dark:bg-slate-600 rounded-full" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800" />
        <div className="w-8 h-8 rounded-full bg-teal-500" />
      </div>
    </div>
    <div className="flex-1 flex overflow-hidden">
      <div className="w-20 lg:w-56 border-r border-slate-100 dark:border-slate-800 p-4 space-y-8 shrink-0">
        <div className="space-y-2">
          {[
            { icon: BarChart3, label: "Dashboard", active: true },
            { icon: Users, label: "Patients" },
            { icon: Stethoscope, label: "Doctors" },
            { icon: Calendar, label: "Schedule" },
            { icon: CreditCard, label: "Billing" },
            { icon: Pill, label: "Pharmacy" },
          ].map((item, i) => (
            <div key={i} className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all",
              item.active ? "bg-teal-50 dark:bg-teal-500/10 text-teal-600" : "text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
            )}>
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-bold hidden lg:block">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/50 dark:bg-slate-950/20">
        <div className="grid grid-cols-4 gap-6">
           {[
             { label: "Active Patients", val: "48", color: "text-teal-600 bg-teal-50", icon: Users },
             { label: "Available Doctors", val: "14/18", color: "text-indigo-600 bg-indigo-50", icon: Stethoscope },
             { label: "Bed Occupancy", val: "84%", color: "text-rose-600 bg-rose-50", icon: Bed },
             { label: "Emergency", val: "03", color: "text-amber-600 bg-amber-50", icon: Activity },
           ].map((s, i) => (
             <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", s.color)}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white">{s.val}</h4>
             </div>
           ))}
        </div>
      </div>
    </div>
  </div>
);

const ActivityMockup = () => (
  <div className="w-full h-full bg-slate-900 dark:bg-slate-950 p-8 flex flex-col font-sans overflow-hidden text-left">
     <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
           <BrainCircuit className="w-6 h-6 text-teal-400" />
           <h3 className="text-lg font-black text-white">AI Agent Live Feed</h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-teal-400/10 border border-teal-400/20 rounded-full">
           <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
           <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest">Live Monitoring</span>
        </div>
     </div>
     <div className="space-y-6 flex-1 overflow-hidden">
        {[
          { patient: "Sarah Miller", message: "How do I prepare for my blood test tomorrow?", time: "Just now", status: "Booking" },
          { patient: "John Davis", message: "Can I reschedule my cardiology appointment?", time: "5m ago", status: "Help" },
        ].map((conv, i) => (
          <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer group">
             <div className="flex justify-between items-start mb-3 text-left">
                <span className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors">{conv.patient}</span>
                <span className="text-[10px] text-slate-500">{conv.time}</span>
             </div>
             <p className="text-xs text-slate-400 italic mb-4 leading-relaxed">&quot;{conv.message}&quot;</p>
             <div className="flex justify-between items-center">
                <span className="px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded-full text-[9px] font-black uppercase tracking-widest">{conv.status}</span>
                <MessageSquare className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition-colors" />
             </div>
          </div>
        ))}
     </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-0">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">{question}</span>
        <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300", open && "rotate-180 text-teal-600")} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        open ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
      )}>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

// INTERACTIVE AI CHAT DEMO - Dedicated Section Component
const AIChatDemoSection = () => {
  const { language } = useTranslation();
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: language === 'en' ? 'Hello! I am Hopify AI. How can I help you today?' : 'Bonjour ! Je suis l\'IA Hopify. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const userMsg = input;
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      let aiRes = language === 'en' ? "I've logged that. Our agents are ready. Book a demo?" : "J'ai bien noté. Nos agents sont prêts. Voulez-vous une démo ?";
      if (userMsg.toLowerCase().includes('appointment') || userMsg.toLowerCase().includes('rdv')) {
        aiRes = language === 'en' ? "Sure! Dr. Miller is available tomorrow at 10:00 AM. Confirm?" : "Bien sûr ! Le Dr. Miller est disponible demain à 10h00. Confirmer ?";
      }
      setMessages(prev => [...prev, { role: 'ai', text: aiRes }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl flex flex-col md:flex-row h-[600px]">
       <div className="md:w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-between">
          <div className="space-y-6">
             <div className="w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
             </div>
             <h3 className="text-3xl font-black leading-tight">Try it <br /> yourself.</h3>
             <p className="text-sm text-slate-400 font-medium leading-relaxed">
                Interact with our AI agent in real-time. Experience the speed and accuracy of Hopify triage.
             </p>
          </div>
          <div className="space-y-4">
             {["24/7 Availability", "Instant Triage", "Seamless Sync"].map(tag => (
               <div key={tag} className="flex items-center gap-2 text-xs font-bold text-teal-400">
                  <CheckCircle2 className="w-4 h-4" />
                  {tag}
               </div>
             ))}
          </div>
       </div>
       <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950/20 relative">
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
             {messages.map((m, i) => (
               <div key={i} className={cn("flex flex-col max-w-[80%]", m.role === 'user' ? "ml-auto" : "")}>
                  <div className={cn(
                    "p-5 rounded-3xl text-sm font-medium shadow-sm",
                    m.role === 'user' ? "bg-teal-600 text-white rounded-tr-none" : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-tl-none border border-slate-100 dark:border-slate-700"
                  )}>
                    {m.text}
                  </div>
               </div>
             ))}
             {isTyping && <div className="flex gap-2 p-3 bg-slate-200 dark:bg-slate-800 w-16 rounded-full justify-center"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" /><span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100" /></div>}
             <div ref={chatEndRef} />
          </div>
          <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
             <div className="flex gap-3">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={language === 'en' ? "Ask the AI anything..." : "Demandez n'importe quoi..."}
                  className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-teal-500/20"
                />
                <button onClick={handleSend} className="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center hover:scale-105 transition-transform"><Send className="w-6 h-6" /></button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const { t, language, setLanguage } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
      setIsScrolled(winScroll > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden relative">
      {/* SEO TAGS SIMULATION */}
      <title>Hopify AI | Next-Gen Clinic Management SaaS</title>
      <meta name="description" content="Automate your clinic care with Hopify. AI triage, automated prescriptions, and real-time medical analytics for modern healthcare providers." />

      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 z-[100] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      
      {/* BACKGROUND DECORATIONS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal-500/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[160px] rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-black text-slate-900/[0.03] dark:text-white/[0.03] whitespace-nowrap select-none rotate-12">
          {language === 'en' ? 'AI CARE • HOPIFY • HEALTH 4.0' : 'SOINS IA • HOPIFY • SANTÉ 4.0'}
        </div>
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700",
        isScrolled 
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 py-4 shadow-sm" 
          : "bg-transparent py-10"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-teal-500 flex items-center justify-center shadow-xl shadow-teal-500/30 group-hover:rotate-[15deg] transition-all duration-500">
              <HeartPulse className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Hopify.</span>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {["Features", "Demo", "Pricing", "FAQ"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-black text-slate-600 dark:text-slate-400 hover:text-teal-600 transition-colors relative group uppercase tracking-widest">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
               <button onClick={() => setLanguage('en')} className={cn("px-4 py-2 rounded-xl text-[10px] font-black transition-all", language === 'en' ? "bg-white dark:bg-slate-800 text-teal-600 shadow-xl scale-105" : "text-slate-500")}>EN</button>
               <button onClick={() => setLanguage('fr')} className={cn("px-4 py-2 rounded-xl text-[10px] font-black transition-all", language === 'fr' ? "bg-white dark:bg-slate-800 text-teal-600 shadow-xl scale-105" : "text-slate-500")}>FR</button>
            </div>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-3 text-slate-500 hover:text-teal-600 transition-all rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:rotate-90">
              {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <Link href="/login" className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all hover:scale-105 hover:shadow-2xl active:scale-95">{t("heroCTA")}</Link>
          </div>
        </div>
      </nav>

      {/* SUPER MODERN HERO */}
      <section className="relative pt-64 lg:pt-80 pb-48 z-10">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-black text-teal-600 dark:text-teal-400 uppercase tracking-[0.2em] animate-bounce-slow">
              <Sparkles className="w-4 h-4" />
              Next-Gen Medical Intelligence
            </div>
            
            <h1 className="text-7xl lg:text-[10rem] font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter">
              AI Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-500 via-cyan-500 to-indigo-500">Perfected.</span>
            </h1>

            <p className="text-xl lg:text-3xl text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed">
              The world&apos;s most advanced clinic management ecosystem. Built for speed. Designed for doctors.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
              <Link href="/login" className="px-14 py-7 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-[2.5rem] font-black text-xl hover:scale-105 hover:shadow-[0_20px_50px_rgba(13,148,136,0.4)] transition-all flex items-center justify-center gap-4">{t("heroCTA")} <ArrowRight className="w-7 h-7" /></Link>
              <Link href="/portal" className="px-14 py-7 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-[2.5rem] font-black text-xl hover:bg-slate-50 transition-all shadow-xl flex items-center justify-center gap-4">{t("heroDemo")}</Link>
            </div>
          </div>

          {/* DYNAMIC SHOWCASE */}
          <div className="relative h-[600px] lg:h-[800px] flex items-center justify-center group/hero-ui">
             <div className="absolute top-0 w-full aspect-video rounded-[4rem] shadow-[0_80px_150px_-30px_rgba(0,0,0,0.4)] border border-slate-200 dark:border-slate-800 overflow-hidden transform -rotate-6 group-hover/hero-ui:rotate-0 group-hover/hero-ui:scale-110 transition-all duration-1000 z-10 bg-white">
                <DashboardMockup />
             </div>
             <div className="absolute bottom-10 right-[-10%] w-[90%] h-[500px] rounded-[4rem] shadow-[0_80px_150px_-30px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden transform rotate-12 group-hover/hero-ui:rotate-3 group-hover/hero-ui:scale-110 transition-all duration-1000 z-20">
                <ActivityMockup />
             </div>
          </div>
        </div>
      </section>

      {/* ROI & METRICS */}
      <section className="py-48 bg-slate-50 dark:bg-slate-900/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { label: t("timeSaved"), val: "15h/wk", color: "text-teal-600", icon: Clock },
                { label: t("revenueGrowth"), val: "+24%", color: "text-indigo-600", icon: TrendingUp },
                { label: t("accuracyRate"), val: "98.4%", color: "text-rose-600", icon: ShieldCheck },
                { label: t("satisfactionRate"), val: "4.9/5", color: "text-amber-600", icon: Star },
              ].map((m, i) => (
                <div key={i} className="p-12 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[4rem] text-center space-y-6 hover:-translate-y-4 transition-all shadow-xl shadow-slate-200/20 dark:shadow-none group">
                   <div className={cn("w-20 h-20 rounded-3xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mx-auto transition-transform group-hover:scale-125", m.color)}>
                      <m.icon className="w-10 h-10" />
                   </div>
                   <h4 className="text-5xl font-black text-slate-900 dark:text-white">{m.val}</h4>
                   <p className="text-xs font-black uppercase tracking-widest text-slate-400">{m.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-64 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-32 space-y-4">
              <h2 className="text-6xl lg:text-9xl font-black text-slate-900 dark:text-white tracking-tighter">{t("featuresTitle")}</h2>
              <p className="text-slate-400 font-black uppercase tracking-[0.5em] text-xs">Everything you need, built-in</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "AI Triage", icon: BrainCircuit, color: "teal", desc: "Automated symptom analysis and diagnosis assistance." },
                { title: "Analytics Hub", icon: BarChart3, color: "indigo", desc: "Real-time growth metrics and clinical performance." },
                { title: "Inventory", icon: Pill, color: "rose", desc: "Smart stock management with automated restocking." },
                { title: "Financials", icon: CreditCard, color: "emerald", desc: "Professional invoicing and global payment gateway." },
                { title: "Wards & Beds", icon: Activity, color: "amber", desc: "Live capacity tracking and room management." },
                { title: "EMR Records", icon: ClipboardList, color: "cyan", desc: "Digitized patient files with history and audits." },
              ].map((f, i) => (
                <div key={i} className="p-14 bg-slate-50 dark:bg-slate-900 rounded-[5rem] border border-slate-100 dark:border-slate-800 hover:border-teal-500/50 transition-all group">
                   <f.icon className={cn("w-12 h-12 mb-10 transition-transform group-hover:scale-110 group-hover:rotate-6", 
                     f.color === "teal" ? "text-teal-600" :
                     f.color === "indigo" ? "text-indigo-600" :
                     f.color === "rose" ? "text-rose-600" :
                     f.color === "emerald" ? "text-emerald-600" :
                     f.color === "amber" ? "text-amber-600" :
                     "text-cyan-600"
                   )} />
                   <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6">{f.title}</h3>
                   <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{f.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO SECTION */}
      <section id="demo" className="py-64 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24 space-y-4">
              <h2 className="text-6xl lg:text-9xl font-black text-slate-900 dark:text-white tracking-tighter">Experience it.</h2>
              <p className="text-slate-400 font-black uppercase tracking-[0.5em] text-xs">Chat with Hopify AI right now</p>
           </div>
           <AIChatDemoSection />
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-64 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-10">
                 <h2 className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">Hopify vs <br /> <span className="text-slate-400">Traditional.</span></h2>
                 <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Don&apos;t get left behind with legacy software. Upgrade to the first AI-native clinic system.</p>
                 <div className="space-y-4 pt-6">
                    {["AI-Driven Bookings", "Live Clinical Analytics", "Automated Prescription Safety", "Patient-First Portal"].map(item => (
                       <div key={item} className="flex items-center gap-4 text-lg font-black text-slate-900 dark:text-white">
                          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center"><Check className="w-5 h-5 text-white" /></div>
                          {item}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="relative rounded-[5rem] overflow-hidden shadow-2xl border-8 border-slate-100 dark:border-slate-800">
                 <Image src="/medical_ai_illustration.png" alt="Comparison" width={800} height={800} className="w-full" />
              </div>
           </div>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE */}
      <section className="py-64 bg-slate-900 text-white relative">
         <div className="max-w-7xl mx-auto px-6 text-center space-y-24 relative z-10">
            <h2 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase">{t("securityTitle")}</h2>
            <div className="grid md:grid-cols-4 gap-12">
               {[
                 { title: "HIPAA Compliant", icon: Shield },
                 { title: "256-bit AES", icon: Lock },
                 { title: "SOC2 Audited", icon: Award },
                 { title: "Zero Data Loss", icon: Globe }
               ].map((item, i) => (
                 <div key={i} className="space-y-6 group">
                    <item.icon className="w-20 h-20 text-teal-500 mx-auto transition-transform group-hover:scale-125 group-hover:rotate-12" />
                    <h3 className="text-xl font-black">{item.title}</h3>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-64 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
           <div className="text-center mb-24">
              <h2 className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">Questions?</h2>
           </div>
           <div className="space-y-4">
              <FAQItem question="Is data migration included?" answer="Yes, our team handles all your data migration from legacy systems for free on professional plans." />
              <FAQItem question="Can I customize the AI triage?" answer="Absolutely. You can define specialized agents for different departments and clinics." />
              <FAQItem question="Is Hopify available on mobile?" answer="Yes, the dashboard is fully responsive and we have native iOS/Android apps coming soon." />
           </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900/30 relative">
         <div className="max-w-4xl mx-auto p-16 rounded-[4rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-8 shadow-2xl">
            <Mail className="w-16 h-16 text-teal-600 mx-auto" />
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Get the AI Clinic Guide.</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Join 5,000+ clinical leaders receiving weekly insights on medical AI.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4">
               <input type="email" placeholder="doctor@clinic.com" className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-2xl px-6 py-4 text-sm font-bold border-none outline-none focus:ring-2 focus:ring-teal-500/20" />
               <button className="px-10 py-4 bg-teal-600 text-white rounded-2xl font-black text-sm hover:scale-105 transition-all">Join Now</button>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-64 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto rounded-[6rem] bg-gradient-to-br from-teal-600 via-cyan-600 to-indigo-600 p-24 lg:p-48 text-center space-y-16 relative overflow-hidden shadow-2xl">
           <h2 className="text-7xl lg:text-[12rem] font-black text-white leading-none tracking-tighter">
             GO <br /> HOPIFY.
           </h2>
           <div className="flex justify-center pt-10">
              <Link href="/login" className="px-20 py-10 bg-white text-teal-600 rounded-[3rem] font-black text-3xl hover:scale-110 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-6 group">
                 {t("heroCTA")}
                 <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform" />
              </Link>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-48 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
          <div className="col-span-2 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center shadow-xl">
                <HeartPulse className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl font-black uppercase tracking-tighter text-white">Hopify.</span>
            </div>
            <p className="text-xl text-slate-400 max-w-sm leading-relaxed font-medium">
              Transforming healthcare through intelligence.
            </p>
            <div className="flex gap-8">
               <Twitter className="w-6 h-6 text-slate-400 hover:text-teal-400 cursor-pointer" />
               <Facebook className="w-6 h-6 text-slate-400 hover:text-teal-400 cursor-pointer" />
               <Instagram className="w-6 h-6 text-slate-400 hover:text-teal-400 cursor-pointer" />
            </div>
          </div>
          <div className="space-y-10">
             <h4 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500">Solutions</h4>
             <ul className="space-y-6 text-xl font-black">
                <li><Link href="#" className="hover:text-teal-400">Triage</Link></li>
                <li><Link href="#" className="hover:text-teal-400">EMR</Link></li>
                <li><Link href="#" className="hover:text-teal-400">Inventory</Link></li>
             </ul>
          </div>
          <div className="space-y-10">
             <h4 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500">Legal</h4>
             <ul className="space-y-6 text-xl font-black">
                <li><Link href="#" className="hover:text-teal-400">Privacy</Link></li>
                <li><Link href="#" className="hover:text-teal-400">Terms</Link></li>
                <li><Link href="#" className="hover:text-teal-400">HIPAA</Link></li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-48 pt-12 border-t border-white/5 text-center text-xs font-black text-slate-600 uppercase tracking-widest">
           © 2026 HOPIFY INC. ALL RIGHTS RESERVED.
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
