import React from 'react'
import Placeholder from '../components/Placeholder'
export default function PeopleStrip(){
const people = ['Henley Weston','Ben Parker','Shanley Smith']
return (
<section className="mt-14 bg-sky-50">
<div className="container-w py-10">
<h3 className="text-xl font-bold text-center">Over 1000+ People Trust us</h3>
<p className="text-xs text-slate-500 text-center mt-1">Charting our course together — meet some of our clients.</p>
<div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
{people.map((name,i)=> (
<div key={i} className="rounded-2xl overflow-hidden bg-white border border-slate-200">
<Placeholder label="[PERSON PORTRAIT]" className="h-44 w-full" />
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-sm font-semibold">{name}</div>
<div className="text-[11px] text-slate-500">Director / Co-founder</div>
</div>
<button className="text-sky-600 text-sm">›</button>
</div>
</div>
))}
</div>
<div className="mt-6 flex justify-center">
<button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold shadow-sm">Show All People</button>
</div>
</div>
</section>
)
}