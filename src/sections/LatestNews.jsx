import React from 'react'
import Placeholder from '../components/Placeholder'
export default function LatestNews(){
return (
<section className="container-w mt-14">
<h3 className="text-xl font-bold text-center">Latest News</h3>
<p className="text-xs text-slate-500 text-center mt-1">Charting our course: updates and perspectives.</p>
<div className="mt-6 grid md:grid-cols-3 gap-6">
{[0,1,2].map(i => (
<article key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-white">
<Placeholder label={`[NEWS IMAGE ${i+1}]`} className="aspect-[4/3] w-full" />
<div className="p-4">
<h4 className="font-semibold text-sm">Easing Cross-Border Trade And Customs in a Freer World: The African Perspective</h4>
<p className="text-xs text-slate-500 mt-2">Published on 17 Feb 2025</p>
</div>
</article>
))}
</div>
</section>
)
}