import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import "./css/embla.css"
import CardProduto from '../CardProduto/CardProduto'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

interface PropsCarousel {
  slides: any[]
}

const EmblaCarousel: React.FC<PropsCarousel> = (props) => {
  const {slides} = props;
  const options: EmblaOptionsType = { loop: true, align: 'start'}
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="m-auto w-[80%] flex items-center justify-center">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container flex flex-row justify-start">
          {slides.map((produto, i) => (
            <div className="flex items-center justify-center h-30 h-80 w-full md:w-1/3 sm:w-1/2 xl:w-1/4" key={i}>
              <div className="embla__slide__number select-none">{produto}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={()=>emblaApi?.scrollPrev()} className='mr-5 absolute left-20 bg-branco font-poppins border border-black w-10 h-10 rounded-full flex items-center justify-center' ><FaChevronLeft/></button>
      <button onClick={()=>emblaApi?.scrollNext()} className='ml-5 absolute right-20 bg-branco font-poppins border border-black w-10 h-10 rounded-full flex items-center justify-center' ><FaChevronRight/></button>
        
    </section>
  )
}

export default EmblaCarousel