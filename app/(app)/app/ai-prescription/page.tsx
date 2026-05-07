"use client";

import { 
  Sparkles, Send, BrainCircuit, AlertTriangle, 
  CheckCircle2, Pill, FileText, Download, 
  RotateCcw, Loader2, Search, User
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AiPrescriptionPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [symptoms, setSymptoms] = useState("");

  const analyzeSymptoms = () => {
    if (!symptoms) return;
    setLoading(true);
    // Simulate AI analysis
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-xs font-black uppercase tracking-widest border border-teal-100 dark:border-teal-500/20">
          <Sparkles className="w-3 h-3" />
          AI Powered Assistant
        </div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Prescription Intelligence</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Enter patient symptoms and medical history. Our clinical AI will analyze the data to suggest the most accurate diagnoses and treatments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Input */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-white dark:text-slate-900" />
                </div>
                <h2 className="font-bold text-lg text-slate-900 dark:text-white">Clinical Input</h2>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    step >= s ? "bg-teal-500 w-6" : "bg-slate-200 dark:bg-slate-800"
                  )} />
                ))}
              </div>
            </div>

            <div className="p-8 space-y-6">
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Patient</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm outline-none focus:border-teal-500 transition-all appearance-none">
                        <option>Md Tajuddin (PAT-0012)</option>
                        <option>Sarah Miller (PAT-0045)</option>
                        <option>Asif Khan (PAT-0089)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Symptoms & Clinical Notes</label>
                    <textarea 
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder="Enter symptoms (e.g., Persistent dry cough, chest pain for 3 days, low-grade fever...)"
                      className="w-full h-48 p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] text-sm outline-none focus:border-teal-500 transition-all resize-none dark:text-slate-200"
                    />
                  </div>

                  <button 
                    onClick={analyzeSymptoms}
                    disabled={loading || !symptoms}
                    className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Run AI Analysis
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                  {/* Diagnoses */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Suggested Diagnoses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { title: "Viral Pneumonia", confidence: "94%", color: "teal" },
                        { title: "Bronchitis", confidence: "72%", color: "amber" }
                      ].map((d, i) => (
                        <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex justify-between items-center group hover:border-teal-500 cursor-pointer transition-all">
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white">{d.title}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Confidence: {d.confidence}</p>
                          </div>
                          <CheckCircle2 className="w-5 h-5 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Medications */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">AI Recommended Treatment</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Amoxicillin", dosage: "500mg", freq: "3 times daily", dur: "7 days" },
                        { name: "Paracetamol", dosage: "1000mg", freq: "Every 6 hours", dur: "3 days" }
                      ].map((m, i) => (
                        <div key={i} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center gap-4 group hover:border-teal-500 transition-all shadow-sm">
                          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center">
                            <Pill className="w-6 h-6 text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-black text-slate-900 dark:text-white">{m.name}</p>
                            <p className="text-xs text-slate-500">{m.dosage} • {m.freq} • {m.dur}</p>
                          </div>
                          <button className="p-2 text-slate-400 hover:text-teal-600 transition-colors">
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl font-bold text-sm hover:bg-slate-100 transition-all"
                    >
                      Refine Input
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="flex-[2] bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl font-black text-sm transition-all shadow-lg shadow-teal-500/25"
                    >
                      Generate Prescription
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="p-8 bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/20 rounded-[2rem] text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white">Prescription Ready!</h3>
                      <p className="text-sm text-slate-500 mt-1">The AI analysis has been finalized and the document is generated.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                    <button className="flex items-center justify-center gap-2 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-sm hover:scale-[1.02] transition-all">
                      <FileText className="w-4 h-4" />
                      Send to Pharmacy
                    </button>
                  </div>

                  <button 
                    onClick={() => { setStep(1); setSymptoms(""); }}
                    className="w-full py-4 text-slate-400 font-bold text-xs hover:text-teal-600 transition-colors uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Start New Analysis
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: AI Assistant & Warnings */}
        <div className="space-y-6">
          {/* AI Status Card */}
          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-[2rem] p-8 text-white shadow-xl shadow-teal-500/20">
            <Sparkles className="w-10 h-10 mb-4 opacity-50" />
            <h3 className="text-xl font-bold mb-2">Live AI Assistant</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              I am currently processing patient history and real-time medical databases to ensure the highest safety standards.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Cross-referencing Allergies
              </div>
              <div className="flex items-center gap-3 text-xs font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse delay-75" />
                Checking Drug Interactions
              </div>
            </div>
          </div>

          {/* Safety Warning */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-rose-100 dark:border-rose-900/50 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="font-black text-xs uppercase tracking-widest">Safety Warning</h3>
            </div>
            <div className="p-4 bg-rose-50 dark:bg-rose-500/10 rounded-2xl border border-rose-100 dark:border-rose-500/20">
              <p className="text-xs text-rose-700 dark:text-rose-400 font-bold leading-relaxed">
                Patient has a recorded allergy to <span className="underline decoration-2">Penicillin</span>. 
                Suggested medications have been filtered to avoid allergens.
              </p>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed italic">
              AI suggestions are for guidance only. Please verify all clinical decisions before finalizing prescriptions.
            </p>
          </div>

          {/* Recent Analysis */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Recent AI Insights</h3>
            <div className="space-y-4">
              {[
                { date: "10:30 AM", type: "Diagnosis Suggestion", pat: "Sarah Miller" },
                { date: "Yesterday", type: "Allergy Alert", pat: "Md Tajuddin" }
              ].map((h, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Search className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{h.type}</p>
                    <p className="text-[10px] text-slate-500">{h.pat} • {h.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
