'use client'

import React from 'react'
import RippleButton from '../RippleButton'
import Image from 'next/image'
import LableHeading from '../LabelHeading.tsx/LableHeading'
import { motion } from 'framer-motion'

const WhatWeDo = () => {

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
        }
    ];

    return (
        <section className="py-14 flex-col flex justify-center items-center mx-auto">
            <div className="flex flex-col md:items-center md:justify-center px-4 md:px-0">
                <LableHeading text="What We Do" styles="bg-[rgba(232, 232, 232, 0.50)]" />
                <p className="text-[#1C1F35] pt-4 md:pl-0 font-rubik text-4xl font-semibold leading-none">Our Logistics Services</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-32 gap-y-10 md:px-40 mt-16 '>
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
                            <div className="flex flex-col justify-center px-5 md:justify-start">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={52}
                                    height={52}
                                />
                                <h3 className='text-dark-blue font-rubik text-2xl/normal leading-normal mt-6'>
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
            <RippleButton
                component="link"
                buttonText="More Work"
                buttonCss="mt-16 mx-auto py-4 px-10 w-fit font-kurb text-base font-medium text-white bg-primary before:bg-white hover:before:w-[200px] hover:text-primary hover:before:h-[200px]" />
        </section>
    )
}

export default WhatWeDo