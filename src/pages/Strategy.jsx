import warning from "./../assets/svg/warning.svg"

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span className={`w-3 h-3 rounded-full ${color}`}></span>
    <span className="text-[12px] uppercase font-bold text-gray-500 tracking-tighter">{label}</span>
  </div>
);

const ProgressRow = ({ label, value, width }) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
      <span className="text-gray-400">{label}</span>
      <span className="text-gray-800">{value}</span>
    </div>
    <div className="h-2 w-full bg-[#eaeef4] rounded-full overflow-hidden">
      <div className={`h-full bg-[#b8cbbf] ${width}`}></div>
    </div>
  </div>
);

const SidebarInsight = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4">
    <span className="material-symbols-outlined text-[#b8cbbf]">{icon}</span>
    <div>
      <p className="text-sm font-bold text-white">{title}</p>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
  </div>
);

const Strategy = () => {
  return (
    <div className="bg-[#f6faff] text-[#171c20] font-sans min-h-screen flex selection:bg-emerald-900/30">
      <main className="flex-1 flex flex-col min-h-screen">

        <div className="p-6 md:p-10 max-w-[1200px] mx-auto w-full flex-grow flex flex-col gap-20">
          <section>
            <h2 className="text-5xl font-bold text-[#171c20] mb-2 tracking-tight">Visual Insights</h2>
            <p className="text-lg text-gray-500">Strategic mapping of your path to debt freedom.</p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
            <div className="lg:col-span-8 flex flex-col gap-6">

              <section className="bg-white rounded-[24px] p-8 shadow-[0_4px_30px_rgba(24,40,32,0.05)] border border-blue-50/50">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">Net Worth Progression</h3>
                    <p className="text-sm text-gray-500">Projected trajectory to 2026</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <LegendItem color="bg-[#182820]" label="Assets (₹240k)" />
                    <LegendItem color="bg-[#491200]" label="Debt (₹76k)" />
                  </div>
                </div>

                <div className="relative h-80 w-full flex">
                  <div className="flex flex-col justify-between py-2 pr-4 text-right border-r border-gray-100 text-[10px] font-bold text-gray-400 w-14">
                    <span>₹300k</span><span>₹225k</span><span>₹150k</span><span>₹75k</span><span>₹0</span>
                  </div>
                  <div className="flex-1 relative ml-4">
                    <div className="absolute inset-0 bg-slate-50/50 rounded-xl overflow-hidden border border-slate-100">
                      <div className="absolute inset-0 flex flex-col justify-between py-0 z-10 pointer-events-none opacity-20">
                        {[...Array(5)].map((_, i) => <div key={i} className="w-full h-px bg-gray-400"></div>)}
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-[#182820]/20 to-transparent clip-path-chart-up opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#491200]/10 to-transparent clip-path-chart-down opacity-40"></div>
                      
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,80 Q25,75 50,60 T100,20" fill="none" stroke="#182820" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                        <path d="M0,40 Q25,45 50,65 T100,90" fill="none" stroke="#491200" strokeDasharray="4" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                    <div className="absolute -bottom-8 inset-x-0 flex justify-between px-2 text-[10px] font-bold text-gray-400">
                      <span>Q1 '24</span><span>Q3 '24</span><span>Q1 '25</span><span>Q3 '25</span><span>Q1 '26</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-4 bg-slate-50/50 rounded-xl flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#182820]">
                    <img src="https://www.svgrepo.com/show/521525/bulb.svg" className='h-8'/>
                  </span>
                  <p className="text-sm text-gray-600">
                    Based on your current ₹1,200 monthly repayment rate, you are projected to be debt-free by <span className="font-bold text-[#182820]">May 2026</span>.
                  </p>
                </div>
              </section>

              <section className="bg-white rounded-[24px] p-8 shadow-[0_4px_30px_rgba(24,40,32,0.05)] border border-blue-50/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="relative flex justify-center">
                    <svg className="w-56 h-56 transform -rotate-90">
                      <circle cx="112" cy="112" r="90" fill="transparent" stroke="#eaeef4" strokeWidth="24" />
                      <circle cx="112" cy="112" r="90" fill="transparent" stroke="#182820" strokeWidth="24" strokeDasharray="565" strokeDashoffset="384" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-bold text-[#171c20]">32%</span>
                      <span className="text-[12px] font-bold text-[#182820] px-3 py-1 bg-[#d4e7da] rounded-full mt-1 uppercase tracking-widest">Healthy</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Debt-to-Income (DTI)</h3>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                      Your monthly debt payments account for 32% of your gross income. A ratio under 36% is generally considered manageable by lenders.
                    </p>
                    <div className="space-y-4">
                      <ProgressRow label="Personal Target" value="25%" width="w-[25%]" />
                      <ProgressRow label="Lender Limit" value="43%" width="w-[43%]" />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <section className="bg-[#182820] text-white rounded-[24px] p-8 shadow-xl relative overflow-hidden flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#b8cbbf]">
                      <img src="https://www.svgrepo.com/show/345174/stars.svg" className='h-8 brightness-0 invert'/>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">Optimization Potential</h3>
                </div>
                <div className="mb-8">
                  <div className="text-5xl font-bold text-[#d4e7da]">₹4,250</div>
                  <p className="text-[10px] uppercase font-bold text-emerald-400/60 mt-1">Total estimated savings</p>
                </div>
                <div className="space-y-6 mb-8">
                  <SidebarInsight icon="percent" title="₹3,100 Interest Saved" desc="Reduced principal balances over time." />
                  <SidebarInsight icon="schedule" title="14 Months Earlier" desc="Estimated time shaved off your journey." />
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-[#b8cbbf] italic mb-6">"By adding just ₹150 to your monthly payment, you transform your timeline significantly."</p>
                  <button className="w-full bg-[#d4e7da] text-[#182820] font-bold py-4 rounded-xl hover:bg-white transition-all transform active:scale-95">
                    Apply Strategy Now
                  </button>
                </div>
              </section>

              <section className="bg-[#eaeef4] rounded-[24px] p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3 text-[#491200]">
                  <span className="material-symbols-outlined">
                    <img src={warning} className='h-8'/>
                  </span>
                  <h4 className="text-xs font-bold uppercase tracking-widest">Interest Alert</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your Visa Platinum card currently has the highest APR (24.9%). Focusing an extra ₹50/mo here saves an additional <span className="font-bold text-black">₹120 this year</span>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .clip-path-chart-up { clip-path: polygon(0 100%, 0 80%, 25% 75%, 50% 60%, 75% 40%, 100% 20%, 100% 100%); }
        .clip-path-chart-down { clip-path: polygon(0 100%, 0 40%, 25% 45%, 50% 65%, 75% 80%, 100% 90%, 100% 100%); }
      `}</style>
    </div>
  );
};


export default Strategy;
