import Image from 'next/image'
import React from 'react'

export default function HeroImage() {
  return (
    <Image 
        alt='hero image'
        width={1080}
        height={720}
        src={'/profile-pic.svg'}
        className='w-[40vw] h-[40vh] -mt-10'
        placeholder='blur'
        blurDataURL='/profile-pic.svg'
        loading='eager'
    />
  )
}
