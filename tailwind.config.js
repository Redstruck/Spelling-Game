/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // This safelist is crucial for the dynamic theme colors to work
  safelist: [
    'from-pink-100', 'via-purple-50', 'to-pink-200', 'border-pink-200', 'from-pink-500', 'to-purple-500', 'text-pink-600', 'bg-pink-500', 'text-pink-400', 'bg-pink-200', 'bg-pink-50', 'focus:ring-pink-400', 'border-pink-300', 'border-pink-600',
    'from-green-100', 'via-yellow-50', 'to-green-200', 'border-green-200', 'from-green-500', 'to-yellow-500', 'text-green-600', 'bg-green-500', 'text-green-400', 'bg-green-200', 'bg-green-50', 'focus:ring-green-400', 'border-green-300', 'border-green-600',
    'from-blue-100', 'via-teal-50', 'to-blue-200', 'border-blue-200', 'from-blue-500', 'to-teal-500', 'text-blue-600', 'bg-blue-500', 'text-blue-400', 'bg-blue-200', 'bg-blue-50', 'focus:ring-blue-400', 'border-blue-300', 'border-blue-600',
    'from-emerald-100', 'via-lime-50', 'to-emerald-200', 'border-emerald-200', 'from-emerald-500', 'to-lime-500', 'text-emerald-600', 'bg-emerald-500', 'text-emerald-400', 'bg-emerald-200', 'bg-emerald-50', 'focus:ring-emerald-400', 'border-emerald-300', 'border-emerald-600',
    'from-orange-100', 'via-red-50', 'to-orange-200', 'border-orange-200', 'from-orange-500', 'to-red-500', 'text-orange-600', 'bg-orange-500', 'text-orange-400', 'bg-orange-200', 'bg-orange-50', 'focus:ring-orange-400', 'border-orange-300', 'border-orange-600',
    'text-purple-600',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}