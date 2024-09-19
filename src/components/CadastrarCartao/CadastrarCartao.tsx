import React, { Dispatch, SetStateAction } from 'react'
import InputText from '../InputText/InputText'
import BotaoGrande from '../Botoes/BotaoGrande/BotaoGrande'
import { cadastrarCartao } from '@/server/cartao/cartao'
import InputMask from '../InputMask/InputMask'

interface CartaoProps {
    id: number,
    setAtt: Dispatch<SetStateAction<number>>
    setOpenCartao: Dispatch<SetStateAction<boolean>>
}

export default function CadastrarCartao({ id, setAtt, setOpenCartao }: CartaoProps) {

    const adicionarCartao = async (e: FormData) => {
        const cartao: any = Object.fromEntries(e)
        console.log(cartao)
        try {
            await cadastrarCartao(id, cartao)
            setAtt((att) => att + 1)
            setOpenCartao(false)
        }catch(err){
            console.log(err)
        }

    }

    return (
        <form action={adicionarCartao} className="flex flex-col w-full justify-center items-center md:gap-2 md:mt-4 lg:w-[90%] xl:w-[85%] bg-branco rounded-md">
            <p className='mt-4'>Adicionar Cartão</p>
            <div className="w-[90%] mt-4 flex flex-col items-center md:flex-row md:justify-between">
                <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[25%]">
                    <InputMask placeholder="Número do cartão*" name='numero' required  mask='____ ____ ____ ____' replacement={{ _: /\d/ }}/>
                </div>
                <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[23%]">
                    <InputMask placeholder="Validade*" name='validade' required  mask='__/__' replacement={{ _: /\d/ }}/>
                </div>
                <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[25%]">
                    <InputText placeholder="Nome para o cartão" name='nomeDoCartao' />
                </div>
            </div>
            <div className="w-[90%] flex flex-col items-center md:flex-row md:justify-between">
                <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[25%]">
                    <InputText placeholder="Nome no cartão*" name='nomeNoCartao' />
                </div>
                <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[23%]" >
                    <InputMask placeholder="CVV*"  mask='___' replacement={{ _: /\d/ }}/>
                </div>
                <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[25%]">
                    <InputMask placeholder="CPF*" name='cpf'  mask='___.___.___-__' replacement={{ _: /\d/ }}/>
                </div>
            </div>
            <div className="my-4 md:mt-[6%] lg:w-[20%]">
                <BotaoGrande title={"Salvar Cartão"} background="secundaria" type={"submit"} ></BotaoGrande>
            </div>
        </form>
    )
}
