'use client'
import Image from "next/image";
import RippleButton from "../RippleButton";
import { motion } from 'framer-motion';


export default function HomeBanner() {
  return (
      <section className='relative banner flex items-center'>
          {/* <div className="w-full h-full absolute top-0 left-0 z-[-1] inset-0 object-cover">
              <video className="w-full h-full object-cover object-center" loop autoPlay muted poster="/images/home-banner-img.png">
                  <source src="/videos/virtual-background-video.mp4" type="video/mp4"/>
              </video>
          </div> */}
          <motion.div
              initial={{ opacity: 0, x:-50 }}
              animate={{ opacity: 1, x:0 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
              aria-hidden
              className="max-w-[570px] text-white mx-4 lg:mx-72 font-rubik pt-20">
              <div className="flex w-fit items-center">
                  <div className="w-1 h-6 bg-banner-small-head"></div>
                  <motion.h2
                      initial={{ width: 0, }}
                      animate={{ width:'100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 3, type: 'spring' }} 
                      className="py-1 px-2 overflow-hidden bg-[hsla(210,42%,18%,0.5)] text-nowrap text-xs md:text-sm leading-none"
                      aria-label="Small Heading">
                      Logistics & Supply Chain Solutions
                  </motion.h2>
              </div>

              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-normal" aria-label="Main Heading">
                  Your Gateway
                  to any Destination in the World
              </h1>
              <p className="mt-2 text-sm md:text-base font-kurb">
                  We provide the best logistics and transport solutions to ensure your goods are delivered safely and on time.
              </p>
              <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, type: 'spring' }}
                  aria-hidden
              >
                  <RippleButton
                      href="/request-qoute"
                      component="link"
                      buttonText="Get Qoute"
                      buttonCss="mt-4 py-4 px-10 w-fit bg-banner-button font-kurb text-base font-bold text-dark-blue before:bg-white hover:before:w-[300px] hover:before:h-[300px]"
                  /> 
              </motion.div>
          </motion.div>
      </section>
  )
}
