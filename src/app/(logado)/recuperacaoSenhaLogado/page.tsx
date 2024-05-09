'use client'
import Loading from '@/app/(deslogado)/loading/page'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import { buscarUsuario } from '@/server/usuario/action'
import { Usuario } from '@/types/usuarios'
import { useEffect, useState } from 'react'

interface PropsUsuario {
  searchParams: { id: number }
}

export default function RecuperacaoSenhaDeslogado({ searchParams }: PropsUsuario) {
  const [usuarioProcurado, setUsuarioProcurado] = useState<Usuario>()
  const [checked1, setChecked1] = useState<boolean>(true)
  const [checked2, setChecked2] = useState<boolean>(false)

  const esconderEmail = (email:string) => {
    const arrayEmail = email.split("@")
    const emailEscondido = arrayEmail[0].split("")
    const emailFinal = emailEscondido.map((letra, i) => {
      return (i == 0 ? letra : "*")
    })
    return emailFinal.join("") + "@" + arrayEmail[1]
  }

  const esconderCelular = (celular:string) => {
    const arrayCelular = celular.split("-")
    const celularEscondido = arrayCelular[0].split("")
    const celularFinal = celularEscondido.map((numero, i) => {
      return (i < 8 ? numero : "*")
    })
    return celularFinal.join("") + "-" + arrayCelular[1]
  }

  useEffect(() => {
    setUsuarioProcurado(buscarUsuario(searchParams.id))
  }, [])

  if (!usuarioProcurado) return (
    <Loading/>
  )
  else {
    return (
      <main>
        <section className='mt-11'>
          <div className="flex flex-col justify-center items-center md:mt-[5%] mt-[10%]">
            <div className="flex flex-col justify-center items-center gap-3 lg:w-[31%] md:w-[50%] w-[80%] text-center">
              <h1 className="font-averia md:text-3xl text-xl font-bold text-preto">Quero receber o código por</h1>
              <p className="font-poppins text-preto md:text-sm text-xs text-center">Escolha entre receber em seu email ou número de telefone cadastrado.</p>
            </div>
            <section className='lg:w-[31%] md:w-[50%] w-[80%] mt-8'>
              <div className="border rounded border-cinza p-3 flex items-center gap-4 " onClick={()=>{
                setChecked1(true)
                setChecked2(false)
              }}>
                <input id="primeira" checked={checked1} type="radio" className='radio checked:bg-secundaria appearance-none md:w-6 w-4 md:h-6 h-4 rounded-full border-2 border-secundaria ml-4' name="radio-10" />
                <label className='font-poppins md:text-base text-xs font-normal text-cinza-escuro'>{esconderEmail(usuarioProcurado.email)}</label>
              </div>
              <div className='border rounded border-cinza p-3 mt-4 flex items-center gap-4 ' onClick={()=>{
                setChecked2(true)
                setChecked1(false)
              }
              }>
                <input id="segunda" checked={checked2} type="radio" className='appearance-none md:w-6 w-4 md:h-6 h-4 rounded-full border-2 border-secundaria ml-4 radio checked:bg-secundaria' name="radio-10" />
                <label className='font-poppins md:text-base text-xs font-normal text-cinza-escuro'>{esconderCelular(usuarioProcurado.celular)}</label>
              </div>
            </section>
            <div className="lg:w-[31%] md:w-[50%] w-[80%] md:mb-[10%] mb-[20%] mt-8">
              <BotaoGrande title="Continuar" type='submit' background="bg-secundaria" />
            </div>
          </div>
        </section>
      </main>
    )
  }

}
