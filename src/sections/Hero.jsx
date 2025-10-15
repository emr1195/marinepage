import React from 'react'
import Placeholder from '../components/Placeholder'
export default function Hero(){
    return (
    <section className="container-w mt-5">
        <div className="relative overflow-hidden rounded-hero">
            <Placeholder label="[HERO IMAGE – Stacked Containers / Sky]" className="aspect-[16/6] w-full" />
            <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-between pointer-events-none">
            <div>
                <h1 className="text-white drop-shadow-md text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">LOGI CRAFT</h1>
                <p className="max-w-xl mt-2 text-white/90 text-sm sm:text-base leading-snug">Crafting Your Logistics Success — Unlock Seamless Logistics, Where Precision Meets Progress.</p>
            </div>
            <div className="flex items-center gap-3 pointer-events-auto">
                <button className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold shadow">Track My Shipment</button>
                <button className="px-4 py-2 rounded-full bg-sky-600 text-white text-sm font-semibold shadow">Track Shipment Now</button>
            </div>
            </div>
        </div>
    </section>
)
}