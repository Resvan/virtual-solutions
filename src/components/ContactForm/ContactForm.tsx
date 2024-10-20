'use client'
import { motion } from 'framer-motion';
import LableHeading from '../LabelHeading.tsx/LableHeading';
import Image from 'next/image';
import { Link } from '@/i18n/i18n.config';
import { useTranslations } from 'next-intl';
import RippleButton from '../RippleButton';

export default function ContactForm() {
const t = useTranslations("Header");
  return (
      <section className="py-10 mt-10 md:mt-0 md:py-24 px-4 md:px-7 lg:px-24 bg-primary">
          <motion.div
              whileInView={{
                  opacity: [0, 1],
                  y: [100, 0]
              }}
              viewport={{ once: true }}
              transition={{ duration: 3, type: 'spring' }}
              aria-hidden className='grid grid-cols-1 md:grid-cols-3'>
              <div className='col-span-1'>
                  <LableHeading text="Contact" styles="text-white bg-[rgba(26,45,64,0.50)]" />
                  <h1 className="mt-2 text-xl text-white md:text-[35px]/normal font-bold leading-normal" aria-label="Main Heading">
                      Get in touch with us
                  </h1>
                  <p className="text-white font-kurb text-base/[151%] font-normal">
                      Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
                  </p>
                  <div className='space-y-4 mt-4'>
                      <div className="flex gap-3 items-center">
                          <div className="h-12 w-12">
                              <Image src="/icons/email.svg" alt="email icon" width={56} height={56} />
                          </div>
                          <div className="text-white text-nowrap font-kurb text-sm font-medium leading-[136%]">
                              <p>Email</p>
                              <Link href="mailto:info@yourwebsite.com">
                                  contact@logistics.com
                              </Link>
                          </div>
                      </div>
                      <div className="flex gap-3 text-nowrap items-center">
                          <div className="h-12 w-12">
                              <Image src="/icons/phone.svg" alt="email icon" width={56} height={56} />
                          </div>
                          <div className="text-white font-kurb text-sm font-medium leading-[136%]">
                              <p>Call Us</p>
                              <Link href="tel:+1234567890">
                                  1234567890
                              </Link>
                          </div>
                      </div>
                      <div className="flex gap-3 items-center">
                          <div className="h-12 w-12">
                              <Image src="/icons/time.svg" alt="time icon" width={56} height={56} />
                          </div>
                          <div className="text-white text-nowrap font-kurb text-sm font-medium leading-[136%]">
                              <p>{t('openTime')}</p>
                              <p>{t('closedDay')}</p>
                          </div>
                      </div>
                  </div>
              </div>
              <form className='col-span-2 text-white space-y-5'>
                  <div className="flex flex-col md:flex-row gap-6 items-center justify-between" >
                      <div className="space-y-3 w-full">
                          <input
                              placeholder="Your name*"
                              type="text"
                              name="state"
                              id="state"
                              className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                          />
                      </div>
                      <div className="space-y-3 w-full">
                          <input
                              placeholder="Email*"
                              type="text"
                              name="zip"
                              id="zip"
                              className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                          />
                      </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-center justify-between" >
                      <div className="space-y-3 w-full">
                          <input
                              placeholder="Phone Number*"
                              type="text"
                              name="state"
                              id="state"
                              className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                          />
                      </div>
                      <div className="space-y-3 w-full">
                          <input
                              placeholder="City*"
                              type="text"
                              name="zip"
                              id="zip"
                              className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                          />
                      </div>
                  </div>
                  <div className="space-y-3 w-full">
                      <textarea placeholder="Your message" rows={6} name="message" id="message" className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white" />
                  </div>
                  <RippleButton
                      href="/request-qoute"
                      component="button"
                      buttonText="Submit Message"
                      buttonCss="mt-4 py-4 px-10 w-fit bg-banner-button font-kurb text-base font-bold text-dark-blue before:bg-white hover:before:w-[300px] hover:before:h-[300px]"
                  />
              </form>
        </motion.div>
      </section>
  )
}
