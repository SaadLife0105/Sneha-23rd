"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Cake, Gift, Heart, Music, PartyPopper, Sparkles } from "lucide-react"
import Confetti from "react-confetti"
import { TypeAnimation } from "react-type-animation"

import { Button } from "@/components/ui/button"

export default function BirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  const heroRef = useRef(null)
  const messageRef = useRef(null)
  const wishesRef = useRef(null)

  const heroInView = useInView(heroRef, { once: false })
  const messageInView = useInView(messageRef, { once: false })
  const wishesInView = useInView(wishesRef, { once: false })

  const heroControls = useAnimation()
  const messageControls = useAnimation()
  const wishesControls = useAnimation()

  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible")
      setTimeout(() => setShowConfetti(true), 1000)
      setTimeout(() => setShowConfetti(false), 8000)
    }
  }, [heroInView, heroControls])

  useEffect(() => {
    if (messageInView) messageControls.start("visible")
  }, [messageInView, messageControls])

  useEffect(() => {
    if (wishesInView) wishesControls.start("visible")
  }, [wishesInView, wishesControls])

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  const quranQuotes = [
    {
      verse: "Indeed, with hardship comes ease. Indeed, with hardship comes ease.",
      reference: "Quran 94:5-6",
    },
    {
      verse: "And whoever puts their trust in Allah, then He will suffice him.",
      reference: "Quran 65:3",
    },
    {
      verse: "So verily, with the hardship, there is relief. Verily, with the hardship, there is relief.",
      reference: "Quran 94:5-6",
    },
    {
      verse: "Allah does not burden a soul beyond that it can bear.",
      reference: "Quran 2:286",
    },
    {
      verse: "And He found you lost and guided you.",
      reference: "Quran 93:7",
    },
    {
      verse: "And whoever is grateful, truly, his gratitude is for his own good.",
      reference: "Quran 27:40",
    },
    {
      verse: "Indeed, Allah is with the patient.",
      reference: "Quran 2:153",
    },
    {
      verse: "And your Lord says, 'Call upon Me; I will respond to you.'",
      reference: "Quran 40:60",
    },
    {
      verse: "Kot geter, lascar fan kk",
      reference: "Zak",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} />}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
          <div className="stars" />
          <div className="twinkling" />
        </div>

        <motion.div
          className="z-10 text-center px-4"
          initial="hidden"
          animate={heroControls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 0.5, duration: 0.8, type: "tween", ease: "easeOut" }}
            className="inline-block"
          >
            <PartyPopper className="h-16 w-16 mx-auto mb-4 text-pink-400" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Happy 21st Birthday!
          </motion.h1>

          <div className="h-16 mb-8">
            <TypeAnimation
              sequence={[
                "Eiliyah",
                2000,
                "The Amazing Eiliyah",
                2000,
                "The Fabulous Eiliyah",
                2000,
                "The Beautiful Eiliyah",
                2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Number.POSITIVE_INFINITY}
              className="text-3xl md:text-5xl font-bold text-purple-300"
            />
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
            <Button
              onClick={triggerConfetti}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
            >
              <Sparkles className="mr-2 h-5 w-5" /> Celebrate!
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
        </motion.div>
      </section>

      {/* Birthday Message */}
      <section ref={messageRef} className="min-h-screen py-20 bg-black relative px-4 flex items-center">
        <div className="max-w-4xl mx-auto z-10">
          <motion.div
            className="bg-gradient-to-br from-purple-950/50 to-pink-950/50 p-8 md:p-12 rounded-2xl shadow-2xl shadow-purple-500/10 border border-purple-500/10 backdrop-blur-sm"
            initial="hidden"
            animate={messageControls}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  when: "beforeChildren",
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <Cake className="h-16 w-16 text-pink-400" />
                <motion.div
                  className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-yellow-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                />
              </div>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
            >
              A Special Message For You
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="space-y-4 text-lg text-purple-100"
            >
              <p>Dear Eiliyah,</p>
              <p>
                On your 21st birthday, I wanted to create something special to celebrate this amazing milestone in your
                life. As you turn 21, you're stepping into a new chapter filled with endless possibilities and
                adventures.
              </p>
              <p>
                Your kindness, strength, and beautiful spirit have touched so many lives around you. May this year bring
                you all the joy, success, and happiness you deserve.
              </p>
              <p>Here's to celebrating you today and always!</p>
              <p className="text-right font-script text-xl text-pink-300">With love,</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
              }}
              className="mt-8 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Heart className="h-12 w-12 text-pink-500 fill-pink-500" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10" />
          <div className="floating-hearts" />
        </div>
      </section>

      {/* Quran Quotes */}
      <section
        ref={wishesRef}
        className="min-h-screen py-20 bg-gradient-to-b from-black to-purple-950/20 relative px-4"
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={wishesControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={wishesInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-4"
            >
              <Gift className="h-16 w-16 mx-auto text-pink-400" />
            </motion.div>

            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={wishesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
            >
              Wisdom from the Quran
            </motion.h2>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={wishesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-purple-200 max-w-2xl mx-auto"
            >
              Beautiful verses to guide and inspire your journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quranQuotes.map((quote, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/10 backdrop-blur-sm shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={wishesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
                    <span className="text-pink-400 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-200">Quran</h3>
                </div>
                <p className="text-purple-100 mb-3">"{quote.verse}"</p>
                <p className="text-right text-pink-300 text-sm italic">{quote.reference}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={wishesInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              onClick={triggerConfetti}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-purple-500/30 transition-all hover:scale-105 group"
            >
              <Music className="mr-2 h-5 w-5 group-hover:animate-spin" /> Let's Celebrate!
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-purple-300 text-sm">
        <p>Made with ❤️ for Eiliyah's 21st Birthday</p>
      </footer>
    </div>
  )
}
