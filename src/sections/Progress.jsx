import React from 'react'
import Placeholder from '../components/Placeholder'
export default function Progress(){
return (
<section className="container-w mt-12">
<div className="grid md:grid-cols-2 gap-8 items-start">
<div>
<h3 className="text-xl font-bold">Let’s See Our Progress</h3>
<p className="text-sm text-slate-600 mt-2 max-w-md">Embracing growth, charting our course. Let’s pause, reflect, and renew our commitment to progress.</p>
<button className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-white text-sm font-semibold">More Info</button>
</div>
<div className="relative">
<Placeholder label="[WORLD MAP PLACEHOLDER]" className="aspect-[16/8] rounded-xl" />
<div className="absolute right-4 top-4 bg-white/90 rounded-xl shadow px-4 py-3">
<div className="grid grid-cols-3 gap-6 text-center">
<div><div className="text-xl font-extrabold">323K</div><div className="text-[11px] text-slate-500">Reviews</div></div>
<div><div className="text-xl font-extrabold">1247</div><div className="text-[11px] text-slate-500">Happy Clients</div></div>
<div><div className="text-xl font-extrabold">64127</div><div className="text-[11px] text-slate-500">Total Stores</div></div>
</div>
</div>
</div>
</div>
</section>
)
}