import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-8 text-center text-white/60">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {new Date().getFullYear()} جميع الحقوق محفوظة – حلول بوتات الذكاء الاصطناعي</p>
      </div>
    </footer>
  )
}

export default Footer
