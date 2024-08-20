import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { useState } from "react";
import InputPreenchido from "../visualizarPedido/InputPreenchido";
import { buscarUsuario } from "@/server/usuario/action";
import { Usuario } from "@/types/usuarios";

interface VisualizarFuncionarioProps {
    searchParams: {
      id: number
    }
  }
export default function visualizarPerfilFuncionario({searchParams} : VisualizarFuncionarioProps) {

    const funcionario: Usuario = buscarUsuario(searchParams.id)!
    console.log(funcionario)

    return (
        <section>

            <div>
                <TituloLinha titulo={funcionario.nomeCompleto
                } voltar={true} />
            </div>
            <section className="font-poppins text-preto w-[90%] m-auto flex justify-center">
                <div className="mr-[5%]">
                    <p className='text-preto font-poppins font-bold text-base'>Foto</p>
                    <div className='w-52 h-52 md:text-sm text-xs bg-branco p-3 rounded text-cinza-escuro border border-cinza mb-5' />
                    <BotaoGrande title={"Editar"} background={"bg-secundaria"} type={"button"} />
                </div>
                <section className='flex md:flex-row flex-col lg:w-[50%] w-full md:gap-8 gap-4 mb-24'>
                    <div className='w-full flex flex-col md:gap-8 gap-4'>
                        <InputPreenchido titulo='Nome completo' conteudo={funcionario.nomeCompleto} />
                        <InputPreenchido titulo='Email' conteudo={funcionario.email} />
                        <InputPreenchido titulo='CPF' conteudo={funcionario.cpf} />
                    </div>
                    <div className='w-full flex flex-col md:gap-8 gap-4'>
                        <InputPreenchido titulo='Data de nascimento' conteudo={funcionario.dataNascimento} />
                        <InputPreenchido titulo='Código' conteudo={"123"} />
                        <InputPreenchido titulo='Sexo' conteudo={funcionario.sexo} />
                    </div>
                </section>
            </section>
        </section>
    )
}