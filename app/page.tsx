"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Gift, Heart, PartyPopper } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import Particles from "../components/Particles"
import DomeGallery from "../components/DomeGallery"
import localFont from 'next/font/local'

const rapundel = localFont({
  src: './fonts/Rapunled.otf',
})

const stylish1 = localFont({
  src: './fonts/Stylish Handwriting Script .otf',
})

const havana = localFont({
  src: './fonts/Havana.ttf',
})

const healing = localFont({
  src: './fonts/HealingBestieDemoRegular.ttf',
})

const basic = localFont({
  src: './fonts/Playwrite_NZ_Basic/PlaywriteNZBasic-VariableFont_wght.ttf',
})

export default function BirthdayPage() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  const heroRef = useRef(null)
  const messageRef = useRef(null)
  const wishesRef = useRef(null)

  const messageInView = useInView(messageRef, { once: false })
  const wishesInView = useInView(wishesRef, { once: true })

  const heroControls = useAnimation()
  const messageControls = useAnimation()
  const wishesControls = useAnimation()

  // Remove this useEffect:
  // useEffect(() => {
  //   if (heroInView) heroControls.start("visible")
  // }, [heroInView, heroControls])

  // Add this useEffect to trigger animation only once on mount:
  useEffect(() => {
    heroControls.start("visible")
  }, [heroControls])

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

  const friendMessages = [
    {
      name: "Tonya",
      text: "x",
      relation: "Best Friend",
    },
    {
      name: "mae",
      text: "to the girl who watched me pee in a bin and did not judge ❤️ i wish you the happiest 23rd, with the perfect body, perfect bf and perfect friends😏 tout le meilleur pour cette année, comme tu le mérites. gros bisous x",
      relation: "friend since 2021, ceo of party house",
    },
    {
      name: "Sim",
      text: "I wish everyone gets a friend like you that's caring and selfless and always ready to be present. Nothing will ever convey how grateful I am for you  <3",
      relation: "spaghettiandsushi"
    },
    {
      name: "Mayuree",
      text: "You're the best person I've ever met in my life . My uni life would have never been better if you were not here the chaos fun and memories that we made are  just out of this world. Sa ad is lucky he got to propose you before meeeee trust me I was gonna do it. I miss the golden chance... And the woman that you are.....my goodness can turn every women bi ahaha i just loveeeee youuuuu muahhh. stay blessed x",
      relation: "mo fam"
    },
    {
      name: "Dooks no1",
      text: "Cakes and Candles G🎂  Thank you for being there for me when I needed you most, and providing the world's greatest assist (mayuree)  And since it's your birthday, I'll admit HunterxHunter was not as bad as i make it out to be, Killua is pretty cool. Love you G❤️",
      relation: "the dude with similar mental issues"
    },
    {
      name: "Rapha",
      text: "Happy Birthday to you my Nakama, keep shining ✖️🤛",
      relation: "Fellow straw hat crew member"
    },
    {
      name: "Payanka & Hoosh",
      text: "Happy Birthday girlypop  Hope we can go on double dates soon and play league together hehehe; Payanka side note: thank you for making that PD! happy, you guys are so cute together, hoosh and i gib you endless blessings and happiness ^^ and also I LOVE YOUR STYLE SO MUCH, HOTTIE EMO BADDIE ENERGYYY! Happiest Birthday Again",
      relation: "GIRLIES BEFORE SA'AD Xd"
    },
    {
      name: "Nived",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Sivam",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Zeaven",
      text: "Happi borthday niggo",
      relation: "dumbos"
    },
    {
      name: "Shivanen",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Mawooa",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Bananakin",
      text: "All the best with everrything ahead. I'm sure you're gonna make it all ❤️",
      relation: "Best Friend"
    },
    {
      name: "Sania",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Dawson ( L'homme le plus grand de l'île Maurice)",
      text: "You're one of my coolest and realest friends, amazing vibes and hope you have a wonderful life ahead",
      relation: "Sneha's bestie 🤪"
    },
    {
      name: "Ryan B (50%)",
      text: "2. Happy Birthday to the sweetest and shortest Santa's Elf I know. Hope you continue to glow like Edward's skin in the sun, that you have a long and healthy Brat Summer life. Hope we get to spend some time together again before you get snatched to the North Poll again :( hope we both get some more inches [won't mention where] but yeaaah anyway, love youuu. P.s, I'm sorry again for what happened on the 16th December 2020 #it_haunts_me #bouche_b #I_was_on_vocal_rest",
      relation: "Yours threatfully, the better Ryan <3"
    },
    {
      name: "Jean (drugs)",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Aviation",
      text: "⁠aret boire kan pas cave",
      relation: "campement cote kelly"
    },
    {
      name: "Raccoon",
      text: "Happpy Birthdayyy to one of the most gorgeous person I know . I'm so so proud of you❤️❤️",
      relation: "From Bhavya❤️"
    },
    {
      name: "Chum (Chonky papa bear)",
      text: "Born to slay, forced to age! Happy birthday, lil sis",
      relation: "#OnePieceGang"
    },
    {
      name: "Kuvaj",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Zarah",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Suhail",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Zaki",
      text: "Kot geter, lascar fan kk",
      relation: "Soulard"
    },
    {
      name: "Aneekesh",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Aneekesh",
      text: "x",
      relation: "Best Friend"
    },
    {
      name: "Djamel",
      text: "x",
      relation: "Best Friend"
    },
  ]

  const galleryImages = [
    {
    "src": "/domegallery/20251012_221407.jpg",
    "alt": "20251012_221407"
  },
  {
    "src": "/domegallery/20260107_182348.jpg",
    "alt": "20260107_182348"
  },
  {
    "src": "/domegallery/IMG-20251006-WA0005.jpg",
    "alt": "IMG-20251006-WA0005"
  },
  {
    "src": "/domegallery/IMG-20251007-WA0057.jpg",
    "alt": "IMG-20251007-WA0057"
  },
  {
    "src": "/domegallery/IMG-20251007-WA0475.jpg",
    "alt": "IMG-20251007-WA0475"
  },
  {
    "src": "/domegallery/IMG-20251013-WA0135.jpg",
    "alt": "IMG-20251013-WA0135"
  },
  {
    "src": "/domegallery/IMG-20251013-WA0164.jpg",
    "alt": "IMG-20251013-WA0164"
  },
  {
    "src": "/domegallery/IMG-20251013-WA0207.jpg",
    "alt": "IMG-20251013-WA0207"
  },
  {
    "src": "/domegallery/IMG-20251017-WA0068.jpg",
    "alt": "IMG-20251017-WA0068"
  },
  {
    "src": "/domegallery/IMG-20251017-WA0080.jpg",
    "alt": "IMG-20251017-WA0080"
  },
  {
    "src": "/domegallery/IMG-20251020-WA0080.jpg",
    "alt": "IMG-20251020-WA0080"
  },
  {
    "src": "/domegallery/IMG-20251020-WA0082.jpg",
    "alt": "IMG-20251020-WA0082"
  },
  {
    "src": "/domegallery/IMG-20251020-WA0085.jpg",
    "alt": "IMG-20251020-WA0085"
  },
  {
    "src": "/domegallery/IMG-20251027-WA0097.jpg",
    "alt": "IMG-20251027-WA0097"
  },
  {
    "src": "/domegallery/IMG-20251029-WA0060.jpg",
    "alt": "IMG-20251029-WA0060"
  },
  {
    "src": "/domegallery/IMG-20251101-WA0000.jpg",
    "alt": "IMG-20251101-WA0000"
  },
  {
    "src": "/domegallery/IMG-20251108-WA0025.jpg",
    "alt": "IMG-20251108-WA0025"
  },
  {
    "src": "/domegallery/IMG-20251108-WA0039.jpg",
    "alt": "IMG-20251108-WA0039"
  },
  {
    "src": "/domegallery/IMG-20251201-WA0023.jpg",
    "alt": "IMG-20251201-WA0023"
  },
  {
    "src": "/domegallery/IMG-20251201-WA0027.jpg",
    "alt": "IMG-20251201-WA0027"
  },
  {
    "src": "/domegallery/IMG-20251220-WA0020.jpg",
    "alt": "IMG-20251220-WA0020"
  },
  {
    "src": "/domegallery/IMG-20251220-WA0035.jpg",
    "alt": "IMG-20251220-WA0035"
  },
  {
    "src": "/domegallery/IMG-20260110-WA0000.jpg",
    "alt": "IMG-20260110-WA0000"
  },
  {
    "src": "/domegallery/IMG-20260113-WA0024.jpg",
    "alt": "IMG-20260113-WA0024"
  },
  {
    "src": "/domegallery/IMG-20260123-WA0026.jpg",
    "alt": "IMG-20260123-WA0026"
  },
  {
    "src": "/domegallery/IMG-20260130-WA0012.jpg",
    "alt": "IMG-20260130-WA0012"
  },
  {
    "src": "/domegallery/PSX_20251229_210647.jpg",
    "alt": "PSX_20251229_210647"
  },
  {
    "src": "/domegallery/PSX_20251229_210858.jpg",
    "alt": "PSX_20251229_210858"
  },
  {
    "src": "/domegallery/PSX_20251229_211417.jpg",
    "alt": "PSX_20251229_211417"
  },
  {
    "src": "/domegallery/PSX_20251229_211550.jpg",
    "alt": "PSX_20251229_211550"
  },
  {
    "src": "/domegallery/PSX_20251229_211955.jpg",
    "alt": "PSX_20251229_211955"
  },
  {
    "src": "/domegallery/PSX_20251229_212731.jpg",
    "alt": "PSX_20251229_212731"
  },
  {
    "src": "/domegallery/PSX_20251229_213345.jpg",
    "alt": "PSX_20251229_213345"
  },
  {
    "src": "/domegallery/PSX_20251229_213751.jpg",
    "alt": "PSX_20251229_213751"
  },
  {
    "src": "/domegallery/PSX_20251229_214101.jpg",
    "alt": "PSX_20251229_214101"
  },
  {
    "src": "/domegallery/PSX_20251229_214537.jpg",
    "alt": "PSX_20251229_214537"
  },
  {
    "src": "/domegallery/psx_20251229_214723.jpg",
    "alt": "psx_20251229_214723"
  },
  {
    "src": "/domegallery/PSX_20251229_215027.jpg",
    "alt": "PSX_20251229_215027"
  },
  {
    "src": "/domegallery/psx_20251229_230553.jpg",
    "alt": "psx_20251229_230553"
  },
  {
    "src": "/domegallery/psx_20251229_230744.jpg",
    "alt": "psx_20251229_230744"
  },
  {
    "src": "/domegallery/psx_20251229_230948.jpg",
    "alt": "psx_20251229_230948"
  },
  {
    "src": "/domegallery/psx_20251229_231209.jpg",
    "alt": "psx_20251229_231209"
  },
  {
    "src": "/domegallery/PSX_20251229_232446.jpg",
    "alt": "PSX_20251229_232446"
  },
  {
    "src": "/domegallery/PSX_20251229_232657.jpg",
    "alt": "PSX_20251229_232657"
  },
  {
    "src": "/domegallery/PSX_20251229_232837.jpg",
    "alt": "PSX_20251229_232837"
  },
  {
    "src": "/domegallery/PSX_20251229_233116.jpg",
    "alt": "PSX_20251229_233116"
  },
  {
    "src": "/domegallery/psx_20251229_233515.jpg",
    "alt": "psx_20251229_233515"
  },
  {
    "src": "/domegallery/PSX_20251229_234212.jpg",
    "alt": "PSX_20251229_234212"
  },
  {
    "src": "/domegallery/PSX_20251229_234338.jpg",
    "alt": "PSX_20251229_234338"
  },
  {
    "src": "/domegallery/PSX_20251229_234545.jpg",
    "alt": "PSX_20251229_234545"
  },
  {
    "src": "/domegallery/psx_20251230_150910.jpg",
    "alt": "psx_20251230_150910"
  },
  {
    "src": "/domegallery/PSX_20251230_174135.jpg",
    "alt": "PSX_20251230_174135"
  },
  {
    "src": "/domegallery/PSX_20251230_174307.jpg",
    "alt": "PSX_20251230_174307"
  },
  {
    "src": "/domegallery/PSX_20251231_014507.jpg",
    "alt": "PSX_20251231_014507"
  },
  {
    "src": "/domegallery/PSX_20251231_014729.jpg",
    "alt": "PSX_20251231_014729"
  },
  {
    "src": "/domegallery/PSX_20251231_014959.jpg",
    "alt": "PSX_20251231_014959"
  },
  {
    "src": "/domegallery/PSX_20251231_015543.jpg",
    "alt": "PSX_20251231_015543"
  },
  {
    "src": "/domegallery/PSX_20251231_015755.jpg",
    "alt": "PSX_20251231_015755"
  },
  {
    "src": "/domegallery/Screenshot_20251119_004102_Instagram.jpg",
    "alt": "Screenshot_20251119_004102_Instagram"
  },
  {
    "src": "/domegallery/Screenshot_20251119_004211_Instagram.jpg",
    "alt": "Screenshot_20251119_004211_Instagram"
  }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-visible">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-visible py-20"
      >
        {/* Particles Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Particles
            className=""
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
        {/* Main Hero Content */}
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
            <img src="/confetti.gif" alt="Confetti" className="h-24 w-24 mx-auto mb-4 object-contain" />
          </motion.div>

          <motion.h1
            className={`${rapundel.className} text-7xl md:text-9xl font-bold mb-6 pb-4 pt-4 leading-tight md:leading-[1.30] bg-clip-text text-transparent bg-gradient-to-r from-[#BB8BB4] via-[#A33BBA] to-[#BB8BB4]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Happy 23rd Birthday!
          </motion.h1>
          
          <div className={`${stylish1.className} h-14 mb-8`}>
            <TypeAnimation
              sequence={[
                "Sneha Beeltah",
                2000,
                "The Gorgeous Sneha Beeltah",
                2000,
                "The Amazing Sneha Beeltah",
                2000,
                "The Perfect Gworl: Sneha Beeltah",
                2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Number.POSITIVE_INFINITY}
              className="text-3xl md:text-5xl font-bold text-purple-300"
            />
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
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
              <div className="relative bg-transparent">
                <img src="/cake.gif" alt="Cake" className="h-16 w-16 object-contain bg-transparent" style={{ background: 'transparent' }} />
              </div>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`${healing.className} text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400`}
            >
              A pecial message from yo boi
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`${basic.className} space-y-4 text-lg text-purple-100`}
            >
              <p>Dear Slayha,</p>
              <p>
                I wish that this birthday makes up for all the ones before where you didn't get the celebration you deserved. 
                You are the most wonderful, fun, pretty, smart, drop dead gorgeoous, talented, amazing person that I've ever had the chance to meet.
                You have blessed me with your presence ever since you came into my life and I will try my best to make up for everything 
                you have ever went through to make you forget all about it (and so that I can be worthy of you too eheh). 
                I will try my best to make you happy every second of every day so that you never have to feel sad or lonely ever again.
              </p>
              <p>

              </p>
              <p>
                If everyone in this world supports you then I am one of them. If only one person supports you, then I am that person.
                If no one supports you, then I am no longer here, but even then I will come back and haunt you so that we can stay
                together forever (You are not allowed to be with someone else if i die btw).
              </p>
              <p>
                I love you, with everything I have Sneha Beeltah because you are my everything, my one and only, my soulmate, my wife, 
                MY GWORL, happy birthdayyyyyy.❤️
              </p>
              <p className={`${havana.className} text-right font-script text-xl text-pink-300`}>With love, your pretty boi, Sa'ad Kherdali</p>
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
                <img
                  src="/heart.gif"
                  alt="Heart"
                  className="h-24 w-24"
                  style={{ display: "inline-block" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Messages from Friends */}
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
              <img
                src="/gift.gif"
                alt="Gift"
                className="h-24 w-24 mx-auto"
                style={{ display: "inline-block" }}
              />
            </motion.div>

            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={wishesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className={`${healing.className} text-4xl md:text-5xl font-bold mb-4 pb-2 pt-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400`}
            >
              Wishes from yo fwends
            </motion.h2>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={wishesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${healing.className} text-xl text-purple-200 max-w-2xl mx-auto`}>
              Some special messages from all of your special friends
              <span style={{ fontFamily: "Arial, sans-serif" }}>(</span>
              {" "}
              pun intended
              <span style={{ fontFamily: "Arial, sans-serif" }}>).</span>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {friendMessages.map((msg, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/10 backdrop-blur-sm shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={wishesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <h3 className={`${basic.className} text-xl font-bold text-purple-200`}>{msg.name}</h3>
                </div>
                <p className={`${basic.className} text-purple-100 mb-3`}>"{msg.text}"</p>
                <p className={`${basic.className} text-right italic text-pink-300 text-sm`}>- {msg.relation}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={wishesInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
          </motion.div>
        </motion.div>
      </section>

      {/* Dome Gallery Section */}
      <section className="min-h-screen py-0 bg-gradient-to-b from-purple-950/20 to-black relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-4"
            >
              <img
                src="/photo.gif"
                alt="Photo"
                className="h-24 w-24 mx-auto"
                style={{ display: "inline-block" }}
              />
            </motion.div>
           <h2 className={`${healing.className} text-4xl md:text-5xl font-bold mb-4 pb-2 pt-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400`}>
              The Slaying
            </h2>
            <p className={`${healing.className} text-xl text-purple-200 max-w-2xl mx-auto`}>
              A place for all the times you slayed
              <span style={{ fontFamily: "Arial, sans-serif" }}>(</span>
              {" "}
              which is basically all the time
              <span style={{ fontFamily: "Arial, sans-serif" }}>).</span>
            </p>
          </div>
          <div className=" shadow-2xl shadow-purple-500/10 backdrop-blur-sm bg-gradient-to-br from-purple-950/30 to-pink-950/30 ">
            <div style={{ width: '100vw', maxWidth: '100%', height: '90vh' }}>
              <DomeGallery
                images={galleryImages}
                fit={0.8}
                minRadius={600}
                maxVerticalRotationDeg={0}
                segments={34}
                dragDampening={2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 mt-16 bg-black text-center text-purple-300 text-sm mx-2">
        <p>
          I hope you enjoyed this little gift, its not that big or complex now but it will be insane when the new updates roll out.
          Until next year, my wittle bb.
        </p>
        <p>(Sponsored by Zak)</p>
      </footer>
    </div>
  )
}
