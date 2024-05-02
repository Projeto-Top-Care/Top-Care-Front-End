import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import "./css/embla.css"
import CardProduto from '../CardProduto/CardProduto'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const EmblaCarousel = () => {
  const options: EmblaOptionsType = { loop: true, align: 'start'}
  const slides = ['']
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="m-auto w-[80%] flex items-center justify-center">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container flex flex-row justify-start">
          {slides.map((produto, i) => (
            <div key={i} className="flex items-center justify-center h-30 shrink-0 h-80 w-full md:w-1/3 sm:w-1/2 xl:w-1/4">
              <div className="embla__slide__number select-none">{produto}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={()=>emblaApi?.scrollPrev()} className='hover:shadow-md hover:translate-x-[-0.5rem] animation duration-200 mr-5 absolute left-20 bg-branco font-poppins border border-black w-10 h-10 rounded-full flex items-center justify-center' ><FaChevronLeft/></button>
      <button onClick={()=>emblaApi?.scrollNext()} className='hover:shadow-md hover:translate-x-2 animation duration-200 ml-5 absolute right-20 bg-branco font-poppins border border-black w-10 h-10 rounded-full flex items-center justify-center' ><FaChevronRight/></button>
        
    </section>
  )
}

export default EmblaCarousel
