'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import { buscarUsuario } from '@/server/usuario/action'
import { Usuario } from '@/types/usuarios'
import { useEffect, useState } from 'react'

interface PropsUsuario {
  searchParams: { id: number }
}

export default function RecuperacaoSenhaDeslogado({ searchParams }: PropsUsuario) {
  const [usuarioProcurado, setUsuarioProcurado] = useState<Usuario>()

  useEffect(() => {
    setUsuarioProcurado(buscarUsuario(searchParams.id))
  }, [])

  if (!usuarioProcurado) return (
    <div>Carregando...</div>
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
              <div className='border s-lg rounded border-cinza p-3'>
                <p className='font-poppins text-base font-normal text-cinza-escuro'>{usuarioProcurado.email}</p>
              </div>
              <div className='border rounded border-cinza p-3 mt-4'>
                <p className='font-poppins text-base font-normal text-cinza-escuro'>{usuarioProcurado.celular}</p>
              </div>
            </section>
            <div className="lg:w-[31%] md:w-[50%] w-[80%] md:mb-[5%] mb-[10%] mt-8">
              <BotaoGrande title="Continuar" type='submit' background="bg-secundaria" />
            </div>
          </div>
        </section>
      </main>
    )
  }

}
