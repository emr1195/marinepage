import React from 'react'
export default function Placeholder({ label, className='' }){
return (
<div className={`flex items-center justify-center text-center text-xs sm:text-sm md:text-base font-medium text-gray-600 bg-gray-100/70 border border-dashed border-gray-300 ${className}`}>
    {label}
</div>
)
}