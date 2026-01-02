import { useState } from 'react';
import { 
  User, BarChart2, LayoutGrid, 
  Camera, FileText, MessageSquare, 
  Send, MoreHorizontal, Activity,
  Database, Briefcase, Heart,
  Globe, Cpu, Zap, Music, BookOpen
} from 'lucide-react';

// --- DATA CONFIGURATION ---
const pastCategories = [
  { id: 'finance', label: 'FINANCE', icon: <Database size={20} />, color: 'hover:shadow-[4px_4px_0px_0px_#10b981] hover:border-emerald-500' },
  { id: 'health', label: 'HEALTH', icon: <Activity size={20} />, color: 'hover:shadow-[4px_4px_0px_0px_#ef4444] hover:border-red-500' },
  { id: 'career', label: 'CAREER', icon: <Briefcase size={20} />, color: 'hover:shadow-[4px_4px_0px_0px_#3b82f6] hover:border-blue-500' },
  { id: 'education', label: 'EDUCATION', icon: <BookOpen size={20} />, color: 'hover:shadow-[4px_4px_0px_0px_#8b5cf6] hover:border-violet-500' },
  { id: 'media', label: 'MEDIA', icon: <Music size={20} />, color: 'hover:shadow-[4px_4px_0px_0px_#d946ef] hover:border-fuchsia-500' },
  { id: 'relationships', label: 'RELATIONS', icon: <Heart size={20} />, color: 'hover:shadow-[4px_4px_0px_0px_#ec4899] hover:border-pink-500' },
  { id: 'travel', label: 'TRAVEL', icon: <Globe size={20} />, color: 'hover:shadow-[4px_4px_0px_0px_#06b6d4] hover:border-cyan-500' },
  { id: 'creativity', label: 'CREATIVE', icon: <Zap size={20} />, color: 'hover:shadow-[4px_4px_0px_0px_#f59e0b] hover:border-amber-500' },
  { id: 'inventory', label: 'INVENTORY', icon: <Cpu size={20} />, color: 'hover:shadow-[4px_4px_0px_0px_#94a3b8] hover:border-slate-500' },
  // ... add others as needed
];

export const LifeOS = () => {
  const [viewMode, setViewMode] = useState<'os' | 'vision'>('os');
  const [presentMode, setPresentMode] = useState<'micro' | 'gallery' | 'studio'>('micro');

  return (
    // MAIN CONTAINER - NEO-BRUTALIST BASE
    <div className="flex flex-col h-screen w-screen bg-[#050505] text-gray-200 overflow-hidden font-mono selection:bg-lime-400 selection:text-black">
      
      {/* === GLOBAL HEADER === */}
      <header className="h-16 border-b-2 border-zinc-800 bg-[#050505] flex items-center justify-between px-6 shrink-0 z-50">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-lime-400 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]"></div>
          <h1 className="text-xl font-bold tracking-tighter text-white">
            LIFE<span className="text-lime-400">OS</span>
          </h1>
        </div>

        {/* CENTER TOGGLE - OS vs VISION */}
        <div className="flex bg-zinc-900 border-2 border-zinc-800 p-1">
          <button 
            onClick={() => setViewMode('os')}
            className={`flex items-center gap-2 px-4 py-1 text-sm font-bold transition-all ${
              viewMode === 'os' 
              ? 'bg-lime-400 text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]' 
              : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <LayoutGrid size={16} /> OS
          </button>
          <button 
            onClick={() => setViewMode('vision')}
            className={`flex items-center gap-2 px-4 py-1 text-sm font-bold transition-all ${
              viewMode === 'vision' 
              ? 'bg-fuchsia-400 text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]' 
              : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <BarChart2 size={16} /> VISION
          </button>
        </div>

        {/* PROFILE BUTTON */}
        <button className="flex items-center gap-3 border-2 border-zinc-800 px-3 py-1.5 hover:bg-zinc-900 transition-colors group">
          <span className="text-xs text-zinc-400 group-hover:text-white">LEVEL 24</span>
          <div className="bg-zinc-800 p-1 border border-zinc-700">
            <User size={18} className="text-white" />
          </div>
        </button>
      </header>

      {/* === MAIN CONTENT GRID === */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* === COLUMN 1: THE PAST (Archive) === */}
        <section className="flex flex-col w-[25%] border-r-2 border-zinc-800 bg-[#080808]">
          <div className="p-3 border-b-2 border-zinc-800 bg-zinc-900/50">
            <h2 className="text-xs font-bold text-zinc-500 tracking-[0.2em]">ARCHIVE_PROTOCOL</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-lime-900 scrollbar-track-zinc-900">
            <div className="grid grid-cols-2 gap-3">
              {pastCategories.map((cat) => (
                <div 
                  key={cat.id}
                  className={`aspect-square border-2 border-zinc-800 bg-zinc-900/40 p-3 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer group ${cat.color}`}
                >
                  <div className="text-zinc-500 group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase group-hover:text-white tracking-wider">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === COLUMN 2: THE PRESENT (Stream) === */}
        <section className="flex flex-col w-[50%] border-r-2 border-zinc-800 bg-[#050505] relative">
          
          {/* TABS: TWITTER / INSTA / TUMBLR */}
          <div className="flex border-b-2 border-zinc-800">
            {[
              { id: 'micro', label: 'MICRO_LOG', icon: <MessageSquare size={14}/> },
              { id: 'gallery', label: 'GALLERY', icon: <Camera size={14}/> },
              { id: 'studio', label: 'STUDIO', icon: <FileText size={14}/> }
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setPresentMode(mode.id as any)}
                className={`flex-1 py-4 flex items-center justify-center gap-2 text-xs font-bold tracking-widest transition-colors ${
                  presentMode === mode.id 
                  ? 'bg-zinc-900 text-lime-400 border-b-2 border-lime-400' 
                  : 'text-zinc-600 hover:bg-zinc-900/50 hover:text-zinc-300'
                }`}
              >
                {mode.icon} {mode.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-0 scrollbar-hide">
            
            {/* INPUT AREA (Brutalist Box) */}
            <div className="p-6 border-b-2 border-zinc-800 bg-zinc-900/20">
              <div className="border-2 border-zinc-700 bg-black p-4 shadow-[4px_4px_0px_0px_rgba(39,39,42,1)] focus-within:shadow-[4px_4px_0px_0px_#a3e635] focus-within:border-lime-400 transition-all">
                <textarea 
                  placeholder={`Write to ${presentMode === 'micro' ? 'Log' : presentMode === 'gallery' ? 'Gallery' : 'Studio'}...`} 
                  className="w-full bg-transparent resize-none outline-none text-sm text-white placeholder-zinc-600 min-h-[80px] font-mono"
                />
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-zinc-800">
                  <div className="text-zinc-600 text-xs">0 / 280</div>
                  <button className="bg-lime-400 hover:bg-lime-300 text-black px-6 py-2 text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2">
                    Transmit <Send size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* FEED CONTENT */}
            <div className="p-6 space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group border-l-2 border-zinc-800 pl-6 hover:border-lime-400 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] text-lime-400 font-bold border border-lime-400/30 px-1">10:42 AM</span>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
                       {presentMode === 'micro' ? 'LOG_ENTRY' : 'VISUAL_DATA'}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    System operational. The brutalist interface provides clarity through constraint. This is the raw data of the present moment.
                  </p>
                  <div className="mt-3 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-zinc-600 hover:text-white"><MoreHorizontal size={14}/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === COLUMN 3: THE FUTURE (Architect) === */}
        <section className="flex flex-col w-[25%] bg-[#080808]">
          <div className="p-3 border-b-2 border-zinc-800 bg-zinc-900/50">
            <h2 className="text-xs font-bold text-zinc-500 tracking-[0.2em]">SYSTEM_FUTURE</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* VISION BOARD */}
            <div className="border-2 border-zinc-800 bg-[#050505] p-1 shadow-[4px_4px_0px_0px_#27272a]">
              <div className="h-32 border border-dashed border-zinc-700 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                <span className="text-xs text-zinc-500 font-bold">[VISION_BOARD_RENDER]</span>
              </div>
              <div className="p-2">
                 <h3 className="text-xs font-bold text-white">10_YEAR_PLAN</h3>
                 <div className="h-1 w-full bg-zinc-800 mt-2">
                   <div className="h-full w-[40%] bg-fuchsia-400"></div>
                 </div>
              </div>
            </div>

            {/* ACTION PLAN */}
            <div className="border-2 border-zinc-800 bg-[#050505] p-4">
              <h3 className="text-xs font-bold text-zinc-400 mb-4 uppercase">Action_Queue</h3>
              <div className="space-y-3">
                {['Establish Database', 'Design Profile', 'Sync API'].map((task, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-4 h-4 border-2 border-zinc-600 group-hover:border-lime-400 group-hover:bg-lime-400/20 transition-colors"></div>
                    <span className="text-xs text-zinc-300 group-hover:text-white font-medium">{task}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default LifeOS;