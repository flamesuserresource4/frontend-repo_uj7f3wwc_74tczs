import React from 'react'
import { ShoppingBag, Building2, GraduationCap, Stethoscope } from 'lucide-react'

const solutions = [
  { icon: ShoppingBag, title: 'التجارة الإلكترونية', desc: 'روبوتات محادثة لزيادة التحويلات وخفض التخلي عن سلة الشراء.' },
  { icon: Building2, title: 'الشركات والخدمات', desc: 'مساعدون افتراضيون لإدارة المواعيد والإجابات المتكررة.' },
  { icon: GraduationCap, title: 'التعليم', desc: 'مرشدون تعليميون شخصيون ودعم للطلاب على مدار الساعة.' },
  { icon: Stethoscope, title: 'الصحة', desc: 'استقبال المراجعين، فرز أولي، ومواعيد تلقائية بخصوصية عالية.' },
]

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">حلول تناسب مجالك</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4">
                <Icon className="text-orange-400" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
