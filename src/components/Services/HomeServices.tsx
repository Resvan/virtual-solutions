import LableHeading from '../LabelHeading/LableHeading';
import Image from 'next/image';
import MotionContainer from '../MotionContainer/MotionContainer';
import MotionItem from '../MotionItem/MotionItem';
import Link from 'next/link';

export default function HomeServices() {
    const services = [
        {
            title: 'Sea Transport',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/ship-icon.svg',
            url: '/services/sea-transport' // Replace with the actual URL for the service
        },
        {
            title: 'Warehousing',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/ware-house-icon.svg',
            url: '/services/warehousing' // Replace with the actual URL for the service
        },
        {
            title: 'Air Fright',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/Flight-icon.svg',
            url: '/services/air-freight' // Replace with the actual URL for the service
        },
        {
            title: 'Local Shipping',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/viechile-icon.svg',
            url: '/services/local-shipping' // Replace with the actual URL for the service
        },
        {
            title: 'DHL Courier',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/dhl-icon.svg',
            url: '/services/dhl-courier' // Replace with the actual URL for the service
        },
        {
            title: 'Packing',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/packing-icon.svg',
            url: '/services/packing' // Replace with the actual URL for the service
        },
        {
            title: 'Relocation',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/relocation-icon.svg',
            url: '/services/relocation' // Replace with the actual URL for the service
        },
    ];


    return (
        <section className="py-24 px-4 md:px-7 lg:px-24 bg-white">
            <MotionContainer classNames="grid grid-cols-1 md:grid-cols-3 xl:container gap-10 mx-auto">
                <div>
                    <MotionItem>
                        <LableHeading text="What We Do" styles='text-dark-blue bg-[rgba(232,232,232,0.50)]' />
                        <h2 className='mt-4 font-rubik text-4xl font-semibold leading-none'>
                            Safe & Reliable Cargo Solutions
                        </h2>
                    </MotionItem>
                </div>
                <div className='grid col-span-2 gap-8 grid-cols-1 md:grid-cols-2'>
                    {services.map((item, idx) => (
                        <MotionItem key={idx}>
                            <Link href={item.url} className='flex gap-7 items-start hover:bg-white hover:shadow-xl cursor-pointer p-5 hover:rounded-2xl transition-all ease-out duration-200'>
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
                            </Link>
                        </MotionItem>
                    ))}
                </div>
            </MotionContainer>
        </section>
    );
}
