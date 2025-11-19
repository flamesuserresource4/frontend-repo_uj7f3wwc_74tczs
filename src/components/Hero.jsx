import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.15),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(251,146,60,0.15),transparent_40%)]" />

      <div className="absolute -top-10 -bottom-10 -left-10 -right-10">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          حلول بوتات الذكاء الاصطناعي لعملك
        </h1>
        <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          نصنع مساعدين افتراضيين أذكياء يعززون المبيعات، يدعمون العملاء، ويؤتمتون المهام.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#contact" className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow transition">ابدأ الآن</a>
          <a href="#features" className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white/90 transition">اكتشف المميزات</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </section>
  )
}

export default Hero
