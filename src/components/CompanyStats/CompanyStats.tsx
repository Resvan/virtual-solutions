import React from 'react'
import AnimatedNumber from '../AnimatedNumber/AnimatedNumber'

export default function CompanyStats() {
  return (
      <section className='max-w-[1020px] mx-auto border-t border-b border-[#D4D4D4]'>
          <div className='grid grid-cols-2 gap-20'>
              <div className='border-r border-[#D4D4D4] py-8'>
                  <div className='flex gap-4 items-center w-fit mx-auto'>
                      <AnimatedNumber
                          value={1294}
                          styles='text-dark-blue font-rubik text-5xl font-semibold leading-normal'
                      />
                      <div className='stats-box-bg'></div>
                      <p className='text-dark-blue font-rubik text-xl/normal font-normal'>
                          Delivered Packages
                      </p>
                  </div>
              </div>
              <div className='py-8'>
                  <div className='flex gap-4 items-center w-fit mx-auto'>
                      <AnimatedNumber
                          value={3594}
                          styles='text-dark-blue font-rubik text-5xl font-semibold leading-normal'
                      />
                      <div className='stats-box-bg'></div>
                      <p className='text-dark-blue font-rubik text-xl/normal font-normal'>
                          Satisfied Clients
                      </p>
                  </div>
              </div>
          </div>
    </section>
  )
}
