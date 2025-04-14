"use client"

import { motion, useTransform } from "framer-motion"

export default function Hero({ scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 0.1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1])

  return (
    <div id="acceuil" className="flex justify-center mt-90 text-[6rem] tracking-[.10em]">
      <h1 className="text-[200%] relative left-[130px] bottom-[15px] text-[#0057b8] z-1">Y</h1>
      <motion.h1 style={{ y }} className="text-[200%] relative left-[9px] bottom-[15px] text-[#007f5f] z-0">
        Y
      </motion.h1>
      <h1 className="text-[100%] top-[60px] relative">USUF</h1>
      <motion.span style={{ opacity }} className="text-[100%] top-[230px] right-[270px] relative">
        ENI
      </motion.span>
    </div>
  )
}
