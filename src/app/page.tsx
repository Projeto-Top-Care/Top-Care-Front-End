import HistoricoConsulta from "@/components/HistoricoConsulta/HistoricoConsulta";
import InputData from "@/components/InputData/InputData";
import Carrossel from '@/components/Carrossel/Carrossel'
import { EmblaOptionsType } from 'embla-carousel'


export default function Home() {
  const OPTIONS: EmblaOptionsType = {loop: true}
  const SLIDE_COUNT = 10
  const SLIDES = [
    './assets/banner1.svg',
    './assets/banner1.svg',
    './assets/banner1.svg',
    './assets/banner1.svg',
    './assets/banner1.svg'
  ]
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <Carrossel slides={SLIDES} options={OPTIONS} />
    </main>
  )
}
