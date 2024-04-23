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
      <div className="embla__viewport w-full bg-branco" ref={emblaRef}>
        <div className="embla__container w-full ">
          {slides.map((image, index) => (
            <div className="embla__slide h-52 " key={index}>
              <div className="embla__slide__number h-full w-full">
                <img src={image} alt="" className='w-full' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className='mr-5 absolute sm:left-12 left-3 bg-branco font-poppins border border-black sm:w-10 sm:h-10 w-5 h-5 rounded-full flex items-center justify-center' onClick={() => emblaApi?.scrollPrev()}><FaChevronLeft className='sm:text-sm text-xs'/></button>
      <button className='ml-5 absolute sm:right-12 right-3 bg-branco font-poppins border border-black sm:w-10 sm:h-10 w-5 h-5 rounded-full flex items-center justify-center' onClick={() => emblaApi?.scrollNext()}><FaChevronRight className='sm:text-sm text-xs'/></button>
    </section>
  )
}

export default EmblaCarousel
