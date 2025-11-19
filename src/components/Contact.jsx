import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('جاري الإرسال...')

    try {
      // Dummy submit – this can be wired to backend later
      await new Promise(r => setTimeout(r, 1200))
      setStatus('تم إرسال رسالتك بنجاح! سنعاود التواصل قريبًا.')
    } catch (e) {
      setStatus('حدث خطأ غير متوقع. حاول مرة أخرى.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">تواصل معنا</h2>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="الاسم الكامل" className="w-full bg-black/40 text-white placeholder-white/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input required type="email" placeholder="البريد الإلكتروني" className="w-full bg-black/40 text-white placeholder-white/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <input placeholder="اسم الشركة (اختياري)" className="w-full bg-black/40 text-white placeholder-white/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <textarea required rows="5" placeholder="كيف يمكن أن نساعدك؟" className="w-full bg-black/40 text-white placeholder-white/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <div className="flex items-center justify-between gap-4">
            <button type="submit" className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition">إرسال</button>
            <p className="text-white/70 text-sm">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
