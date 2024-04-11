'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import './css/embla.css'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="embla flex flex-row w-[90%] h-52 items-center">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container w-full">
          {slides.map((image, index) => (
            <div className="embla__slide rounded-lg h-52" key={index}>
              <div className="embla__slide__number h-full w-full">
                <img src={image} alt="" className='w-full rounded-2xl' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className='mr-5 absolute left-12 bg-branco font-poppins border border-black w-10 h-10 rounded-full flex items-center justify-center' onClick={() => emblaApi?.scrollPrev()}><FaChevronLeft /></button>
      <button className='ml-5 absolute right-12 bg-branco font-poppins border border-black w-10 h-10 rounded-full flex items-center justify-center' onClick={() => emblaApi?.scrollNext()}><FaChevronRight /></button>
    </section>
  )
}

export default EmblaCarousel
