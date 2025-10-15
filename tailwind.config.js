/** @type {import('tailwindcss').Config} */
export default {
content: [
'./index.html',
'./src/**/*.{js,jsx}'
],
theme: {
extend: {
borderRadius: {
hero: '28px'
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' }
}
},
animation: {
marquee: 'marquee 22s linear infinite'
}
}
},
plugins: []
}