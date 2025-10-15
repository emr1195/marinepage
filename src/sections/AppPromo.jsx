import React from 'react'
import Placeholder from '../components/Placeholder'
export default function AppPromo(){
return (
<section className="container-w mt-12">
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 p-6 md:p-8 text-white">
<div className="grid md:grid-cols-[1.1fr_1fr] gap-6 items-center">
<div>
<h3 className="text-2xl font-bold">Download the free Logi Craft App</h3>
<p className="text-sm text-white/90 mt-2 max-w-md">For faster, easier booking with exclusive offers.</p>
<div className="mt-4 flex gap-3">
<Placeholder label="[Google Play Badge]" className="h-10 w-36 rounded" />
<Placeholder label="[App Store Badge]" className="h-10 w-36 rounded" />
</div>
</div>
<div className="relative">
<div className="grid grid-cols-3 gap-4">
<Placeholder label="[TRUCK SIDE VIEW with LOGO]" className="col-span-2 h-28 rounded" />
<Placeholder label="[APP SCREEN on PHONE]" className="h-28 rounded" />
</div>
</div>
</div>
</div>
</section>
)
}