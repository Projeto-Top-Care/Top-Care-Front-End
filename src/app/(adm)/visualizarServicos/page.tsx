'use client'
import React, { useEffect, useState } from 'react'
import PaginaServicos from '@/components/PaginaServicos/PaginaServicos'
import { useUserID } from '@/context/UserIDContext'
import { buscarUsuario } from '@/server/usuario/action'
import { Usuario } from '@/types/usuarios'

export default function VisualizarServicos() {

  const { getUserID } = useUserID()
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  useEffect(() => {
    const func = async () => {
      const id = getUserID()
      console.log(id)
      if (id) {
        const user: Usuario = await buscarUsuario(parseInt(id))!
        if (user.role == 'ADMIN') {
          console.log(user)
          setIsAdmin(true)
        }
      }
    }
    func()
  }, [])

  return (
    <main>
      {/*       
      <section className='text-preto'>
        <TituloLinha titulo='Serviços' voltar={false}/>
      </section>
      <section className='w-[90%] m-auto flex flex-row justify-evenly md:justify-between flex-wrap my-10'>
        {
          servicos.map((servico)=>(
            <div className='w-32 md:w-56 lg:w-64' key={servico.nome}>
              <Card servico={servico} src={servico.imagem} />
            </div>
          ))
        }
      </section>
      <section className='text-preto w-[90%] mx-auto flex justify-end mb-10'>
        <div className='group w-10 h-10 bg-secundaria flex items-center justify-center rounded-xl cursor-pointer hover:w-48 ease-linear duration-500' onClick={()=>router.push('/cadastrarServico')}>
          <div className='group-hover:w-[20%] flex items-center justify-center duration-500 ease-in group-hover:rotate-90'> <FaPlus/> </div>
          <div className='w-[80%] animate-slide-left hidden object-cover group-hover:!flex'><p className='line-clamp-1 w-48 font-poppins'>Adicionar serviço</p></div>
        </div>
      </section>*/}

      <PaginaServicos isAdmin={isAdmin} />
    </main>
  )
}
