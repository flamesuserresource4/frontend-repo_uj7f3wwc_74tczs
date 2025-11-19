import React from 'react'
import { Menu, Sparkles } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <Sparkles className="text-orange-400" size={18} />
          </div>
          <span className="text-white/90 font-semibold">حلول بوتات الذكاء الاصطناعي</span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <li><a href="#features" className="hover:text-orange-400 transition">المميزات</a></li>
          <li><a href="#solutions" className="hover:text-orange-400 transition">الحلول</a></li>
          <li><a href="#contact" className="hover:text-orange-400 transition">تواصل</a></li>
          <li>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition shadow">
              احجز تجربة
            </a>
          </li>
        </ul>
        <button className="md:hidden text-white/80" aria-label="القائمة">
          <Menu />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
