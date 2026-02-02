"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Gift, Heart, PartyPopper } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import Particles from "../components/Particles"
import DomeGallery from "../components/DomeGallery"
import LightRays from "../components/LightRays"
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
      text: "Kok.                                                                                C'est faux je blague. Happy birthday sne, I can't believe we've been friends for over 4 years now, because it feels I've known you all my life. Growing up by your side and navigating life together is one of my greatest privileges, and I truly, truly hope we stay friends forever. I'm the luckiest girl on earth to have someone like you that I miss so much when I'm away. I hope 23 is kind to you, and that you get every happiness you deserve this year <3",
      relation: "Your wife 😎",
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
      text: "You're the best person I've ever met in my life. My uni life would have never been better if you were not here the chaos fun and memories that we made are just out of this world. Sa'ad is lucky he got to propose you before meeeee trust me I was gonna do it. I miss the golden chance... And the woman that you are.....my goodness can turn every women bi ahaha i just loveeeee youuuuu muahhh. stay blessed x",
      relation: "mo fam"
    },
    {
      name: "Dooks no1",
      text: "Cakes and Candles G🎂. Thank you for being there for me when I needed you most, and providing the world's greatest assist (mayuree). And since it's your birthday, I'll admit HunterxHunter was not as bad as i make it out to be, Killua is pretty cool. Love you G❤️",
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
      text: "Happy Birthdayyyyyy! Hope you have an amazing day and remember, you are the same age as Sa'ad now.",
      relation: "Sa'ad so papa adoptif"
    },
    {
      name: "My long lost sister retarder",
      text: "Goofy drunkard, happy birthday smol one, have a good one, Mo pou bonk toi kout marteau. I wish that we continue to laugh like dumbfucks in the years to come.",
      relation: "El Waccoon"
    },
    {
      name: "Zeaven",
      text: "Happi borthday niggo",
      relation: "dumbos"
    },
    {
      name: "Vashish ",
      text: "Wish you a very happy birthday to my best CR and best President ever💃🏻♥️🥳. seki mo ena pou dir toi mo kontn ki mone kone toi ek tone help moi dan bku kitsoz ek I know whenever I needed your help you were here✌🏻 jamais mo pou blier man ki to ti mo premier kamarad ki mone fer dan uni 🥰. Ek osi tone fer moi kontn 1 club ki koumadir now sa club la form parti dan lavie astr thanks for that boss Contine slayyy like your name say slayhaaa😝👻",
      relation: "mawaaa"
    },
    {
      name: "Bananakin",
      text: "All the best with everrything ahead. I'm sure you're gonna make it all ❤️",
      relation: "Van"
    },
    {
      name: "Sania",
      text: "⁠Happy Birthday to the coolest person ive ever met , i miss you & i hope we can do more sleepovers in the future. You’re the person who’s style i love the most amongst everyone in our little group. To another year of growing in strength, wisdom and being one of the smartest person i know <3",
      relation: "Sania"
    },
    {
      name: "Dawson ( L'homme le plus grand de l'île Maurice)",
      text: "You're one of my coolest and realest friends, amazing vibes and hope you have a wonderful life ahead",
      relation: "Sneha's bestie 🤪"
    },
    {
      name: "Ryan B (50%)",
      text: "Happy Birthday to the sweetest and shortest Santa's Elf I know. Hope you continue to glow like Edward's skin in the sun, that you have a long and healthy Brat Summer life. Hope we get to spend some time together again before you get snatched to the North Poll again :( hope we both get some more inches [won't mention where] but yeaaah anyway, love youuu. P.s, I'm sorry again for what happened on the 16th December 2020 #it_haunts_me #bouche_b #I_was_on_vocal_rest",
      relation: "Yours threatfully, the better Ryan <3"
    },
    {
      name: "Jean (drugs)",
      text: "Mo la nek pou rappel toi ki mti cne to date l’anniversaire acoz ene 3eme zoint.",
      relation: "zean"
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
      name: "Sneha Bilta UoM Computer Club",
      text: "Congratulations on completing your 23rd orbit around the Earth 🌍",
      relation: "Kuvaj"
    },
    {
      name: "Suhail",
      text: "Happy birthday ek hopefully ki cake la 1 flavor ki mo kontan",
      relation: "Sukuna"
    },
    {
      name: "Zaki",
      text: "Kot geter, lascar fan kk",
      relation: "Soulard"
    },
    {
      name: "Nick",
      text: "Oreo kitkat svp? 1 donut oreo ek 1 donut kitkat? Non non. 1 oreo kitkat.",
      relation: "Kuzinn"
    },
    {
      name: "Djamel",
      text: "Certaines amitiés font juste une pause… puis reviennent pile pour les anniversaires (et les gâteaux). Joyeux anniv Sneha 💫",
      relation: "D.R"
    },
    {
      name: "Amy(mimi ah^^)",
      text: "Bunny ahhhhh😚!!! I wish you a very happy birthday!! Fini ggn 23 ans, p vinn vieux mo truver. Keep slaying and shining as always.",
      relation: "Best Friend"
    },
    {
      name: "Danish",
      text: "Ki p dir presidente. Happy Birthday",
      relation: "Best PSU"
    },
    {
      name: "Eshaa",
      text: "We danced into this friendship, you coded your way to the top as CC’s president while lighting up every room you walk in. HAPPY BIRTHDAY SNEHHHAAAAAAA <3",
      relation: "tonandini"
    },
    {
      name: "Jameel",
      text: "Happy Birthday Sneha 🎉 bondier garde toi bien…Have a blessed day!",
      relation: "from 1 biver disans ki pas cave blier 😅"
    },
    {
      name: "Abhishek",
      text: "Happy birthday, Sneha 🥳 Wishing you an amazing year ahead. You’re a great person and a fun friend to be around. I’m definitely down for some badminton soon (hopefully without getting harassed this time lmao). Also, while I can’t exactly promise to stop farting 🙃😂, I can promise to keep making great memories together with everyone. Hope you have an awesome day of celebrating. See ya soon",
      relation: "Jug"
    },
    {
      name: "From Dooks CC",
      text: "Happiest Birthday girlypop thanks for being the awesome you. Am proud of you as always.",
      relation: "QUIN OF CC"
    },
    {
      name: "Noshita",
      text: "Happy birthday to the sweetest person I've ever met. You have a way of making everyone feel seen with your kindness and happy with your smile. Hope you continue to be the person who makes everyone around them feel lucky just to know you.❤",
      relation: "Your gymnase bestie"
    },
    {
      name: "Barry",
      text: "Merci grace a toi mone ggn manzer plein tank pu app cup, ggn tag leszt dimun, ggn so much goodiess.❤️ Goodtimes. Happy birthday my dearest friend✨",
      relation: "Zayn"
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
      "src": "/domegallery/IMG-20251109-WA0005.jpg",
      "alt": "IMG-20251109-WA0005"
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
      "src": "/domegallery/IMG-20251208-WA0006.jpg",
      "alt": "IMG-20251208-WA0006"
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
      "src": "/domegallery/IMG-20260201-WA0075.jpg",
      "alt": "IMG-20260201-WA0075"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0079.jpg",
      "alt": "IMG-20260201-WA0079"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0081.jpg",
      "alt": "IMG-20260201-WA0081"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0082.jpg",
      "alt": "IMG-20260201-WA0082"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0084.jpg",
      "alt": "IMG-20260201-WA0084"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0085.jpg",
      "alt": "IMG-20260201-WA0085"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0090.jpg",
      "alt": "IMG-20260201-WA0090"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0098.jpg",
      "alt": "IMG-20260201-WA0098"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0104.jpg",
      "alt": "IMG-20260201-WA0104"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0105.jpg",
      "alt": "IMG-20260201-WA0105"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0108.jpg",
      "alt": "IMG-20260201-WA0108"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0112.jpg",
      "alt": "IMG-20260201-WA0112"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0121.jpg",
      "alt": "IMG-20260201-WA0121"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0122(1).jpg",
      "alt": "IMG-20260201-WA0122(1)"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0136.jpg",
      "alt": "IMG-20260201-WA0136"
    },
    {
      "src": "/domegallery/IMG-20260201-WA0143.jpg",
      "alt": "IMG-20260201-WA0143"
    },
    {
      "src": "/domegallery/PSX_20251229_210647.jpg",
      "alt": "PSX_20251229_210647"
    },
    {
      "src": "/domegallery/PSX_20251229_211417.jpg",
      "alt": "PSX_20251229_211417"
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
      "src": "/domegallery/PSX_20251229_232837.jpg",
      "alt": "PSX_20251229_232837"
    },
    {
      "src": "/domegallery/PSX_20251229_233116.jpg",
      "alt": "PSX_20251229_233116"
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
      "src": "/domegallery/PSX_20251231_015543.jpg",
      "alt": "PSX_20251231_015543"
    },
    {
      "src": "/domegallery/Screenshot_20251119_004102_Instagram.jpg",
      "alt": "Screenshot_20251119_004102_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20251119_004211_Instagram.jpg",
      "alt": "Screenshot_20251119_004211_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_204137_Snapchat.jpg",
      "alt": "Screenshot_20260201_204137_Snapchat"
    },
    {
      "src": "/domegallery/Screenshot_20260201_204206_Snapchat.jpg",
      "alt": "Screenshot_20260201_204206_Snapchat"
    },
    {
      "src": "/domegallery/Screenshot_20260201_204224_Snapchat.jpg",
      "alt": "Screenshot_20260201_204224_Snapchat"
    },
    {
      "src": "/domegallery/Screenshot_20260201_233803_Instagram.jpg",
      "alt": "Screenshot_20260201_233803_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_234850_Instagram.jpg",
      "alt": "Screenshot_20260201_234850_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_234938_Instagram.jpg",
      "alt": "Screenshot_20260201_234938_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_234943_Instagram.jpg",
      "alt": "Screenshot_20260201_234943_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_234950_Instagram.jpg",
      "alt": "Screenshot_20260201_234950_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_234954_Instagram.jpg",
      "alt": "Screenshot_20260201_234954_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_235010_Instagram.jpg",
      "alt": "Screenshot_20260201_235010_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_235032_Instagram.jpg",
      "alt": "Screenshot_20260201_235032_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_235126_Instagram.jpg",
      "alt": "Screenshot_20260201_235126_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_235223_Instagram.jpg",
      "alt": "Screenshot_20260201_235223_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_235237_Instagram.jpg",
      "alt": "Screenshot_20260201_235237_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_235334_Instagram.jpg",
      "alt": "Screenshot_20260201_235334_Instagram"
    },
    {
      "src": "/domegallery/Screenshot_20260201_235600_Instagram.jpg",
      "alt": "Screenshot_20260201_235600_Instagram"
    },
    {
      "src": "/domegallery/Snapchat-1735644739.jpg",
      "alt": "Snapchat-1735644739"
    },
    {
      "src": "/domegallery/Snapchat-1905673849.jpg",
      "alt": "Snapchat-1905673849"
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
            className="bg-gradient-to-br from-purple-950/50 to-pink-950/50 p-8 md:p-12 rounded-2xl shadow-2xl shadow-purple-500/10 border border-purple-500/10 backdrop-blur-sm relative overflow-hidden"
            initial="visible"
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
            {/* LightRays background */}
            <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
              <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1}
                lightSpread={0.5}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                className="custom-rays"
                pulsating={false}
                fadeDistance={1}
                saturation={1}
              />
            </div>
            {/* End LightRays background */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex justify-center mb-8 relative z-10"
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
                I apple you bb. 🍎
              </p>
              <p>
                If everyone in this world supports you then I am one of them. If only one person supports you, then I am that person.
                If no one supports you, then I am no longer here, but even then I will come back and haunt you so that we can stay
                together forever (you are not allowed to be with someone else if i die btw). 🙂
              </p>
              <p>
                I love you, with everything I have Sneha Beeltah because you are my everything, my one and only, my soulmate, president of my heart,
                my wife, MY GWORL, happy birthdayyyyyy. Also, happy 4 months anniversaryyyy babyyyyyyy. ❤️❤️❤️❤️
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
                <p
                  className={`${basic.className} text-purple-100 mb-3`}
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  "{msg.text}"
                </p>
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
              The Memories of Slay
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
          Until next year my wittle bb, love youuuuu.❤️❤️❤️
        </p>
        <p>(Sponsored by Zak)</p>
      </footer>
    </div>
  )
}
