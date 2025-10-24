'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { FooterLinkData } from '@/utils/data'

const Footer: FC = () => {
  return (
    <footer className='pt-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10'>
          <div className='col-span-2'>
            <Logo />
            <div className='flex gap-6 items-center'>
              <Link
                href='https://web.facebook.com/Cucina.Napoli/?locale=fr_FR&_rdc=1&_rdr#'
                className='group bg-white hover:bg-primary rounded-full shadow-xl p-3'
                target="_blank"
              >
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='16'
                  height='16'
                  className=' group-hover:text-white text-black'
                />
              </Link>
              <Link
                href='https://www.instagram.com/cucina.napoli/?hl=fr'
                className='group bg-white hover:bg-primary rounded-full shadow-xl p-3'
                target="_blank"
              >
                <Icon
                  icon='fa6-brands:instagram'
                  width='16'
                  height='16'
                  className=' group-hover:text-white text-black'
                />
              </Link>
              <Link
                href='https://x.com/cucina_napoli'
                className='group bg-white hover:bg-primary rounded-full shadow-xl p-3'
                target="_blank"
              >
                <Icon
                  icon='fa6-brands:x-twitter'
                  width='16'
                  height='16'
                  className=' group-hover:text-white text-black'
                />
              </Link>
            </div>
          </div>
          <div className='flex gap-[150px]'>
            <div className='flex gap-20'>
              {FooterLinkData.map((product, i) => (
                <div key={i} className='group relative col-span-2 w-[150px]'>
                  <p className='text-black text-xl font-semibold mb-9'>
                    {product.section}
                  </p>
                  <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className='mb-3'>
                        <Link
                          href={item.href}
                          className='text-black/60 hover:text-black text-base font-normal mb-6'
                          target="_blank"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className='col-span-2 sm:col-span-6 md:col-span-2'>
              <div className='flex flex-col gap-5'>
                <div className='flex'>
                  <Icon
                    icon='solar:point-on-map-perspective-bold'
                    className='text-primary text-3xl lg:text-2xl inline-block me-2'
                  />
                  <p className='text-black text-base'>
                    Casablanca
                  </p>
                </div>
                <Link href='/'>
                  <div className='flex'>
                    <Icon
                      icon='solar:phone-bold'
                      className='text-primary text-3xl lg:text-2xl inline-block me-2'
                    />
                    <p className='text-black/60 hover:text-black text-base'>
                      0664-685275
                    </p>
                  </div>
                </Link>
                <Link href='/'>
                  <div className='flex'>
                    <Icon
                      icon='solar:mailbox-bold'
                      className='text-primary text-3xl lg:text-2xl inline-block me-2'
                    />
                    <p className='text-black/60 hover:text-black text-base'>
                      contact@cucinanapoli.ma
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-grey/15 py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5'>
          <p className='text-sm text-black/70'>
            @2025 - Cucina Napoli. All Rights Reserved by{' '}Cucina Napoli
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
