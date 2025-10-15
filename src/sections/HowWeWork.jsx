import React from 'react'
import Placeholder from '../components/Placeholder'
export default function HowWeWork(){
const steps = [
{ t: 'Order Placement', d: 'Customer submits order with product details, delivery option, and docs, kicking the process.' },
{ t: 'Route Planning', d: 'Using planning software, best routes selected, ensuring safety & efficiency.' },
{ t: 'Transportation', d: 'Cargo shipped via chosen mode; proper equipment & safety checks at every milestone.' },
{ t: 'Tracking & Monitoring', d: 'Real-time updates with milestones and proactive management of any issues.' },
{ t: 'Delivery & Confirmation', d: 'Delivery completed; client receives proof of delivery and documentation.' },
]
return (
<section className="container-w mt-14">
<h3 className="text-xl font-bold">How We Work</h3>
<p className="text-sm text-slate-600 mt-2 max-w-2xl">Discover our streamlined process that ensures efficiency and excellence every step of the way.</p>
<div className="mt-6"><Placeholder label="[CRANE HOOK + BLUE CONTAINER ILLUSTRATION]" className="w-full aspect-[16/6] rounded-xl" /></div>
<div className="mt-6 grid md:grid-cols-5 gap-6">
{steps.map((s,i)=> (
<div key={i} className="relative rounded-xl border border-dashed border-slate-300 p-4">
<div className="absolute -top-3 left-3 h-6 w-6 rounded-full bg-white border border-slate-300 text-[11px] grid place-items-center font-semibold">{String(i+1).padStart(2,'0')}</div>
<h4 className="mt-3 font-semibold text-sm">{s.t}</h4>
<p className="mt-2 text-xs text-slate-600 leading-relaxed">{s.d}</p>
</div>
))}
</div>
</section>
)
}