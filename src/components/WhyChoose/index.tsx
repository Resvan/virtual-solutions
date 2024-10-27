'use client'
import Image from "next/image";
import LableHeading from "../LabelHeading/LableHeading";
import { motion } from 'framer-motion'

export default function index() {
  return (
      <section className="">
          <motion.div
              whileInView={{
                  opacity: [0, 1],
                  y: [100, 0]
              }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
              aria-hidden
              className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-primary py-10 md:py-20 pl-4 md:pl-7 lg:pl-24 flex items-center">
                  <div className="relative">
                      <Image width={729} height={610} alt='Flight Image' src={'/images/why-choose.png'} />
                      <div className="absolute -bottom-10 md:-bottom-5 md:right-5 bg-secondary p-2 md:p-5 flex gap-4 items-center max-w-fit m-5 md:m-0">
                          <div>
                              <Image width={65} height={80} className="h-20 w-[65px]" src="/icons/flight-round.svg" alt="Flight" />
                          </div>
                          <p className="max-w-[259px] font-rubik text-dark-blue text-6/normal">
                              Moving your products across borders
                          </p>
                      </div>
                  </div>
              </div>
              <div style={{
                  backgroundImage: 'url(/images/world-map.svg)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'top',
                  backgroundRepeat: 'no-repeat'
              }}
                  className="py-10 md:py-20 bg-light-gray px-4 md:px-7 lg:px-24 flex items-center"
              >
                  <div>
                      <div className="pb-10">
                          <LableHeading text="Why Choose" styles='text-dark-blue bg-[rgba(232,232,232,0.50)] ' />
                          <h4 className="text-dark-blue font-rubik text-[35px] leading-9 font-semibold my-3">
                              We create opportunity to reach potential
                          </h4>
                          <p className="text-gray font-kurb text-base/[151%] font-medium">
                              Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
                          </p>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                          <div className="flex gap-4 items-center w-fit">
                              <div>
                                  <Image
                                      src={'/icons/packing-rounded.svg'}
                                      alt="Packing Rounded"
                                      height={44}
                                      width={44}
                                      className="object-contain"
                                  />
                              </div>
                              <h3 className="text-dark-blue font-rubik text-base font-normal leading-normal">Safe Package</h3>
                          </div>
                          <div className="flex gap-4 items-center w-fit">
                              <div>
                                  <Image
                                      src={'/icons/ship-rounded.svg'}
                                      alt="Packing Rounded"
                                      height={44}
                                      width={44}
                                      className="object-contain"
                                  />
                              </div>
                              <h3 className="text-dark-blue font-rubik text-base font-normal leading-normal">Ship Everyware</h3>
                          </div>
                          <div className="flex gap-4 items-center w-fit">
                              <div>
                                  <Image
                                      src={'/icons/global-rounded.svg'}
                                      alt="Packing Rounded"
                                      height={44}
                                      width={44}
                                      className="object-contain"
                                  />
                              </div>
                              <h3 className="text-dark-blue font-rubik text-base font-normal leading-normal">Global Tracking</h3>
                          </div>
                          <div className="flex gap-4 items-center w-fit">
                              <div>
                                  <Image
                                      src={'/icons/support-rounded.svg'}
                                      alt="Packing Rounded"
                                      height={44}
                                      width={44}
                                      className="object-contain"
                                  />
                              </div>
                              <h3 className="text-dark-blue font-rubik text-base font-normal leading-normal">24/7 Support</h3>
                          </div>
                          <div className="flex gap-4 items-center w-fit">
                              <div>
                                  <Image
                                      src={'/icons/time-rounded.svg'}
                                      alt="Packing Rounded"
                                      height={44}
                                      width={44}
                                      className="object-contain"
                                  />
                              </div>
                              <h3 className="text-dark-blue font-rubik text-base font-normal leading-normal">In Time Delivery</h3>
                          </div>
                          <div className="flex gap-4 items-center w-fit">
                              <div>
                                  <Image
                                      src={'/icons/time-rounded.svg'}
                                      alt="Packing Rounded"
                                      height={44}
                                      width={44}
                                      className="object-contain"
                                  />
                              </div>
                              <h3 className="text-dark-blue font-rubik text-base font-normal leading-normal">Transparant Pricing</h3>
                          </div>
                      </div>
                </div>
              </div>
          </motion.div>
      </section>

  )
}
