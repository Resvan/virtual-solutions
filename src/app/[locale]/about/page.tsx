'use client';
import LableHeading from '@/components/LabelHeading.tsx/LableHeading';
import RippleButton from '@/components/RippleButton';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function page() {
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
        <>
            <section
                style={{
                    backgroundImage: "url('/images/about-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                }}
                className="relative py-10 md:py-24 px-4 md:px-7 lg:px-24"
            >
                {/* Ensure the overlay has a lower z-index */}
                <div className="absolute top-0 left-0 bg-about-banner w-full h-full inset-0 z-0"></div>

                {/* Text with a higher z-index */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                    aria-hidden
                    className="relative max-w-[570px] text-white font-rubik my-14 mx-4 md:mx-7 lg:mx-10 z-10">
                    <LableHeading text="About Us" styles="text-white bg-[rgba(26,45,64,0.50)]" />
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-normal" aria-label="Main Heading">
                        About Our Logistics
                    </h1>
                </motion.div>
            </section>
               <section className="mb-10 px-4 md:px-7 lg:px-24 relative">
                <div className="bg-white mt-6 grid gap-8 md:gap-10 lg:gap-20 grid-cols-1 md:grid-cols-2  md:p-20 xl:container mx-auto z-10 relative">
                    <motion.div
                        whileInView={{
                            opacity: [0, 1],
                            x: [50, 0],
                        }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                        aria-hidden
                        className=""
                    >
                        <LableHeading text="About Us" styles="text-dark-blue font-rubik bg-[rgba(232,232,232,0.50)]" />
                        <h2 className="mt-4 font-rubik text-4xl font-semibold leading-none">
                            Our Company Overview
                        </h2>
                        <p className="mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]">
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                        <RippleButton
                            component="link"
                            buttonText="Contact Us"
                            buttonCss="mt-7 py-4 px-10 w-fit font-kurb text-base font-medium text-white bg-primary before:bg-secondary hover:before:w-[200px] hover:text-primary hover:before:h-[200px]"
                        />
                    </motion.div>
                    <div className="relative">
                        <motion.div
                            whileInView={{
                                opacity: [0, 1],
                                x: [-50, 0],
                            }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                            aria-hidden
                            className=""
                        >
                            <Image
                                src="/images/about-img-one.png"
                                alt="Flight"
                                width={461}
                                height={415}
                                className="object-cover h-auto w-auto max-w-full"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{
                                opacity: [0, 1],
                                x: [-50, 0],
                            }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                            aria-hidden
                            className="absolute -bottom-[12%] right-0 md:-left-[25%] p-1 md:p-4 bg-white"
                        >
                            <Image
                                src="/images/about-img-two.png"
                                alt="Flight"
                                width={200}
                                height={100}
                                className="object-cover h-28 w-auto max-w-full"
                            />
                        </motion.div>
                    </div>
                </div>

            </section>
            <section className="py-16 px-4 md:px-7 lg:px-24 bg-white flex flex-col items-center">
                <div className='pb-16'>
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
                            Our Logistics Services
                        </h2>
                    </motion.div>
                </div>
                <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
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
                <RippleButton
                    component="link"
                    buttonText="More Work"
                    buttonCss="mt-10 py-4 px-10 w-fit font-kurb text-base font-medium text-white bg-primary before:bg-secondary hover:before:w-[200px] hover:text-primary hover:before:h-[200px]" />
            </section>
        </>

    );
}
