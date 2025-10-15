import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Progress from './sections/Progress'
import RibbonTicker from './sections/RibbonTicker'
import HowWeWork from './sections/HowWeWork'
import AppPromo from './sections/AppPromo'
import LatestNews from './sections/LatestNews'
import PeopleStrip from './sections/PeopleStrip'
import Footer from './sections/Footer'


export default function App(){
return (
<div className="min-h-screen w-full bg-white text-slate-900 p-8">
<Navbar />
<Hero />
<Services />
<Progress />
<RibbonTicker />
<HowWeWork />
<AppPromo />
<LatestNews />
<PeopleStrip />
<Footer />
</div>
)
}
