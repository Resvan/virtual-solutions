'use client'
import Image from "next/image";
import RippleButton from "../RippleButton";
import { motion } from 'framer-motion';
import LableHeading from "../LabelHeading/LableHeading";


export default function HomeBanner() {
  return (
      <section className='flex items-center bg-[hsla(210,42%,18%,0.3)]'>
          <div className="w-full h-full absolute top-0 left-0 z-[-1] inset-0 object-cover">
              <video className="w-full h-full object-cover object-center" loop autoPlay muted poster="/images/home-banner-img.png">
                  <source src="/videos/2711276-uhd_3840_2160_24fps.mp4" type="video/mp4"/>
              </video>
          </div>
          <motion.div
              initial={{ opacity: 0, x:-50 }}
              animate={{ opacity: 1, x:0 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
              aria-hidden
              className="max-w-[570px] text-white font-rubik my-24 mx-4 md:mx-7 lg:mx-24">
              <LableHeading text="Logistics & Supply Chain Solutions" styles="text-white bg-[rgba(26,45,64,0.50)]" />
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
