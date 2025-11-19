import React from 'react'
import { Bot, Sparkles, Headphones, Shield } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'مساعد ذكي متعدد اللغات',
    desc: 'يتحدث العربية والإنجليزية بطلاقة مع فهم سياقي متقدم.'
  },
  {
    icon: Headphones,
    title: 'دعم عملاء على مدار الساعة',
    desc: 'يحل الاستفسارات الشائعة ويصعّد الحالات المهمة للفريق.'
  },
  {
    icon: Sparkles,
    title: 'أتمتة المبيعات والتسويق',
    desc: 'يولد عملاء محتملين، يحجز المواعيد، ويرسل رسائل مخصصة.'
  },
  {
    icon: Shield,
    title: 'أمان وخصوصية عالية',
    desc: 'تشفير للبيانات وسياسات وصول صارمة لحماية معلوماتك.'
  },
]

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">لماذا تختار حلولنا؟</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
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

export default Features
