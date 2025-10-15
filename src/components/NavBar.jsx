import React from 'react'
export default function Navbar(){
return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100 ">
    <div className="container-w py-3 flex items-center gap-6">
        <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-sky-600" />
             <span className="font-bold tracking-tight">MARINE<span className="text-slate-500 font-semibold"> PAGE</span></span>
        </div>
    <nav className="ml-auto hidden md:flex items-center gap-7 text-sm">
        <a className="hover:text-sky-600" href="#">Track Order</a>
        <a className="hover:text-sky-600" href="#services">Our Services</a>
        <a className="hover:text-sky-600" href="#solutions">Solutions</a>
        <a className="hover:text-sky-600" href="#about">About us</a>
    </nav>
    </div>
</header>
)
}