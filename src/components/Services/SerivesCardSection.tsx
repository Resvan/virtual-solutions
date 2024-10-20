'use client'
import RippleButton from "../RippleButton";
import { motion } from "framer-motion";

export default function ServicesCardSection() {

    const services = [
        {
            heading: 'Sea Transport',
            subheading: 'Ocean Freight',
            image: '/images/sea-transport.png'
        },
        {
            heading: 'Air Freight',
            subheading: 'Fast Shipping',
            image: '/images/air-fright.png'
        },
        {
            heading: 'Local Shipping',
            subheading: 'Regional Delivery',
            image: '/images/road-transportation.png'
        },
        {
            heading: 'Packing',
            subheading: 'Secure Packing',
            image: '/images/packaging.png'
        },
    ];

    return (
        <motion.div
            whileInView={{
                opacity: [0, 1],
                y: [100, 0]
            }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
            aria-hidden className="py-24 px-4 md:px-7 lg:px-24 bg-gradient-to-b from-white via-white to-yellow-500 space-y-9">
            <h3 className="text-dark-blue font-rubik text-[35px]/normal font-semibold text-center">
                Transporting Across The World
            </h3>
            <div className="pb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {
                        services.map((service, idx) => (
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                                aria-hidden
                                key={idx}
                                style={{
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }} className="w-full h-[410px] relative" >
                                <div className="h-full w-full bg-home-service-card relative">
                                    <div className="absolute bottom-5 left-6 space-y-1">
                                        <h4 className="text-white font-rubik text-xl/normal font-medium">
                                            {service.heading}
                                        </h4>
                                        <p className="text-secondary font-kurb text-base/[24px] font-medium">
                                            {service.subheading}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                <RippleButton
                    component="link"
                    buttonText="More Work"
                    buttonCss="mt-16 mx-auto py-4 px-10 w-fit font-kurb text-base font-medium text-white bg-primary before:bg-white hover:before:w-[200px] hover:text-primary hover:before:h-[200px]" />
            </div>
        </motion.div>
    );
}
