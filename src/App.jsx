import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Solutions from './components/Solutions'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
