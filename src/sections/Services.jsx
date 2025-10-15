import React from 'react'
export default function Services(){
const items = [
{ n: '01', title: 'By Road', sub: 'Land logistics & courier' },
{ n: '02', title: 'By Air', sub: 'Lightweight, urgent deliveries' },
{ n: '03', title: 'By Sea', sub: 'Bulk & containerized cargo' },
]
return (
<section id="services" className="container-w mt-10 grid md:grid-cols-2 gap-8">
<div className="bg-white">
{items.map((item, idx) => (
<div key={idx} className="flex items-start gap-5 py-5 border-b last:border-b-0">
<div className="text-slate-300 font-bold text-2xl w-10">{item.n}</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">{item.title}</h3>
<span className="text-slate-400">×</span>
</div>
<p className="text-sm text-slate-500 mt-1">{item.sub}</p>
</div>
</div>
))}
</div>
<div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
<h3 className="text-xl font-bold leading-snug">Transport Solutions For Business to Solve Any Delivery Problems</h3>
<p className="text-slate-600 text-sm mt-3 leading-relaxed">Logistics is the process of efficiently moving goods from point A to point B. Success demands minute attention to details, from packaging to warehousing to transportation.</p>
<button className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-white text-sm font-semibold">More Info <span>➝</span></button>
</div>
</section>
)
}