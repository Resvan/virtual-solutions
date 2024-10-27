'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
import LableHeading from "../LabelHeading/LableHeading";

export default function WhyUs() {
    return (
        <>
            <section className="half-image-half-color pt-28 px-4 md:px-7 lg:px-24 relative">
                <div className="w-full h-1/2 absolute top-0 left-0 half-bg-gradient"></div>
                <div className="bg-white mt-6 grid gap-8 md:gap-10 lg:gap-20 grid-cols-1 md:grid-cols-2 p-10 md:p-20 xl:container mx-auto z-10 relative">
                    <motion.div
                      whileInView={{
                            opacity: [0, 1],
                            x: [-50, 0]
                        }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                        aria-hidden className="">
                        <LableHeading text="Why Us" styles='text-dark-blue font-rubik bg-[rgba(232,232,232,0.50)]' />
                        <h2 className='mt-4 font-rubik text-4xl font-semibold leading-none'>
                            Safe & Reliable Cargo Solutions
                        </h2>
                        <p className='mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]'>
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.

                        </p>
                        <p className='mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]'>
                            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                        <div className="flex gap-4 items-center mt-6">
                            <div>
                                <Image
                                    src={'/icons/packing-rounded.svg'}
                                    alt="Packing Rounded"
                                    height={58}
                                    width={58}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-dark-blue font-rubik text-2xl font-normal leading-normal">Delivery on Time</h3>
                        </div>
                        <div className="flex gap-4 items-center mt-6">
                            <div>
                                <Image
                                    src={'/icons/cost-icon.svg'}
                                    alt="Packing Rounded"
                                    height={58}
                                    width={58}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-dark-blue font-rubik text-2xl font-normal leading-normal">
                                Optimized Travel Cost
                            </h3>
                        </div>
                    </motion.div>
                    <div className="relative">
                        <motion.div
                            whileInView={{
                                opacity: [0, 1],
                                x: [50, 0]
                            }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                            aria-hidden className="">
                            <Image
                                src={'/images/why-us-image-1.png'}
                                alt="Flight"
                                width={461}
                                height={415}
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{
                                opacity: [0, 1],
                                x: [50, 0]
                            }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                            aria-hidden className="absolute -bottom-[12%] -left-10 md:-left-[25%] p-4 bg-white">
                            <Image
                                src={'/images/why-us-image-2.png'}
                                alt="Flight"
                                width={200}
                                height={100}
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
