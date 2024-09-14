'use client'
import { motion } from 'framer-motion';
import LableHeading from '../LabelHeading.tsx/LableHeading';
import Image from 'next/image';

export default function HomeServices() {
    const services = [
        {
            title: 'Sea Transport',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/ship-icon.svg'
        },
        {
            title: 'Warehousing',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/ware-house-icon.svg'
        },
        {
            title: 'Air Fright',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/Flight-icon.svg'
        },
        {
            title: 'Local Shipping',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/viechile-icon.svg'
        },
        {
            title: 'DHL Courier',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/dhl-icon.svg'
        },
        {
            title: 'Packing',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/packing-icon.svg'
        },
        {
            title: 'Relocation',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/relocation-icon.svg'
        },
    ]
  return (
      <section className="py-24 px-4 md:px-7 lg:px-24 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] gap-10 mx-auto">
              <div>
                  <motion.div
                      whileInView={{
                          opacity: [0, 1],
                          x: [-50, 0]
                      }}
                      viewport={{ once: true }}
                      transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                      aria-hidden
                      className="text-dark-blue font-rubik">
                      <LableHeading text="What We Do" styles='text-dark-blue bg-[rgba(232,232,232,0.50)]' />
                      <h2 className='mt-4 font-rubik text-4xl font-semibold leading-none'>
                          Safe & Reliable Cargo Solutions
                      </h2>
                  </motion.div>
              </div>
              <div className='grid col-span-2 gap-8 grid-cols-1 md:grid-cols-2'>
                  {
                       services.map((item, idx) => (
                           <motion.div
                               whileInView={{
                                   opacity: [0, 1],
                                   y: [100, 0]
                               }}
                               viewport={{ once: true }}
                               transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                               aria-hidden key={idx} className='flex gap-7 items-start'>
                              <Image
                                  src={item.image}
                                  alt={item.title}
                                  width={52}
                                  height={52}
                              />
                              <div className='border-l border-[#D8D8D8] pl-4'>
                                   <h3 className='text-dark-blue font-rubik text-2xl/normal leading-normal'>
                                       {item.title}
                                   </h3>
                                   <p className='mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]'>
                                       {item.description}
                                  </p>
                              </div>
                           </motion.div>
                      ))
                  }
              </div>
          </div>
    </section>
  )
}
