import { DashboardLayout } from "./layouts/DashboardLayout";
import { Card } from "./components/ui/Card";
import { Badge } from "./components/ui/Badge";

function App() {
  return (
    <DashboardLayout>
      
      {/* 1. VITALITY (Health & Skincare) - Priority #1 */}
      <Card title="Vitality" className="row-span-2">
        <div className="space-y-6">
          {/* Status Toggle */}
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
            <span className="font-medium text-gray-700">Current Status</span>
            <Badge label="HEALTHY" variant="success" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-gray-400 mb-1">SLEEP</div>
              <div className="text-2xl font-bold text-gray-900">7.5h</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">DIET</div>
              <div className="text-2xl font-bold text-gray-900">Vegan</div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Skincare Simple Log */}
          <div>
             <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Skincare PM</h4>
             <div className="space-y-2">
               {['Cleanser', 'Retinol', 'Moisturizer'].map(step => (
                 <div key={step} className="flex items-center gap-3">
                   <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                   <span className="text-sm text-gray-600">{step}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </Card>

      {/* 2. WEALTH (Finances) */}
      <Card title="Wealth">
        <div className="flex flex-col h-full justify-between">
           <div>
             <div className="text-xs text-gray-400 mb-1">NET WORTH</div>
             <div className="text-3xl font-mono font-semibold tracking-tighter">₱ 42,500.00</div>
           </div>
           
           <div className="mt-6 space-y-3">
             <div className="flex justify-between text-sm">
                <span className="text-gray-500">Coffee (Starbucks)</span>
                <span className="font-medium text-red-500">- ₱180</span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-gray-500">Freelance</span>
                <span className="font-medium text-emerald-600">+ ₱5,000</span>
             </div>
           </div>
        </div>
      </Card>

      {/* 3. CAREER (Focus) */}
      <Card title="Career & Focus">
         <div className="space-y-4">
            <div className="p-4 bg-gray-900 text-white rounded-xl">
               <div className="text-xs opacity-50 mb-2">CURRENT GOAL</div>
               <div className="font-bold text-lg">Master .NET Core 8</div>
               <div className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-500 w-1/3"></div>
               </div>
            </div>
            <div className="flex gap-2">
               <Badge label="C#" variant="neutral" />
               <Badge label="React" variant="neutral" />
               <Badge label="Postgres" variant="neutral" />
            </div>
         </div>
      </Card>

      {/* 4. LIBRARY (Media) */}
      <Card title="Library" className="md:col-span-2">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Watching */}
            <div>
               <div className="text-xs text-gray-400 mb-2">NOW WATCHING</div>
               <div className="flex gap-4 items-center">
                  <div className="w-16 h-24 bg-gray-200 rounded-lg shrink-0"></div>
                  <div>
                     <div className="font-bold text-gray-900">Alice in Borderland</div>
                     <div className="text-sm text-gray-500">S2 • Ep 4</div>
                  </div>
               </div>
            </div>
            {/* Playing */}
            <div>
               <div className="text-xs text-gray-400 mb-2">NOW PLAYING</div>
               <div className="flex gap-4 items-center">
                   <div className="w-16 h-24 bg-gray-200 rounded-lg shrink-0"></div>
                   <div>
                      <div className="font-bold text-gray-900">Valorant</div>
                      <div className="text-sm text-gray-500">Rank: Platinum</div>
                   </div>
               </div>
            </div>
         </div>
      </Card>

      {/* 5. SANCTUARY (Thoughts) */}
      <Card title="Sanctuary">
         <div className="h-full flex flex-col justify-center items-center text-center p-4">
            <p className="text-xl font-serif italic text-gray-700 leading-relaxed">
              "To define is to limit."
            </p>
            <p className="text-xs text-gray-400 mt-4">— Oscar Wilde</p>
            <button className="mt-6 text-xs font-bold uppercase tracking-wide text-gray-400 hover:text-gray-900">
               + Write Entry
            </button>
         </div>
      </Card>

      {/* 6. ATLAS (Travel) */}
      <Card title="Atlas">
         <div className="relative h-32 rounded-xl bg-blue-50 overflow-hidden border border-blue-100 flex items-center justify-center">
            <span className="text-blue-200 font-bold text-4xl opacity-50">MAP</span>
            <div className="absolute bottom-3 left-3">
               <Badge label="Lipa City" variant="brand" />
            </div>
         </div>
      </Card>

    </DashboardLayout>
  );
}

export default App;