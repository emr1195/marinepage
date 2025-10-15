import React from 'react'
import Placeholder from '../components/Placeholder'
export default function Footer(){
return (
<footer className="bg-white border-t border-slate-200 mt-12">
<div className="container-w py-10">
<div className="grid md:grid-cols-3 gap-10">
<div>
<h4 className="font-semibold">Connect With Us</h4>
<div className="mt-3 flex gap-3 text-slate-500 text-sm">
<span></span><span></span><span></span><span></span>
</div>
<p className="mt-4 text-sm">Or email us at <a href="#" className="text-sky-600">connect@logicraft.com</a></p>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<h4 className="font-semibold">Menu</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li>About us</li>
<li>Live Tracking</li>
<li>Solutions</li>
<li>Services</li>
<li>Contact</li>
</ul>
</div>
<div>
<h4 className="font-semibold">Office</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li>2792 N Fairfield Rd, Beavercreek, Ohio 45431</li>
<li>+1 2541 5454</li>
<li>+1 2541 5454</li>
</ul>
</div>
</div>
<div>
<Placeholder label="[LARGE SHIP AT SEA – FOOTER IMAGE]" className="w-full aspect-[16/6] rounded-xl" />
</div>
</div>
<div className="mt-6 text-center text-xs text-slate-500">Copyright © 2025. All rights reserved.</div>
</div>
</footer>
)
}