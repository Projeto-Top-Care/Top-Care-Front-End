'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import InputFile from '@/components/InputFile/InputFile'
import InputMask from '@/components/InputMask/InputMask'
import InputText from '@/components/InputText/InputText'
import MoldeInput from '@/components/MoldeInput'
import Erro from '@/components/Pop-up/Erro/Erro'
import UmBotao from '@/components/Pop-up/UmBotao/UmBotao'
import ResponsiveInput from '@/components/ResponsiveInput'
import Select from '@/components/Select/Select'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { useUserID } from '@/context/UserIDContext'
import { createFilial } from '@/server/filiais/action'
import { Filial } from '@/types/filiais'
import { Endereco, ViaCEP } from '@/types/usuarios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const siglasEstados = [
    "AC", // Acre
    "AL", // Alagoas
    "AP", // Amapá
    "AM", // Amazonas
    "BA", // Bahia
    "CE", // Ceará
    "DF", // Distrito Federal
    "ES", // Espírito Santo
    "GO", // Goiás
    "MA", // Maranhão
    "MT", // Mato Grosso
    "MS", // Mato Grosso do Sul
    "MG", // Minas Gerais
    "PA", // Pará
    "PB", // Paraíba
    "PR", // Paraná
    "PE", // Pernambuco
    "PI", // Piauí
    "RJ", // Rio de Janeiro
    "RN", // Rio Grande do Norte
    "RS", // Rio Grande do Sul
    "RO", // Rondônia
    "RR", // Roraima
    "SC", // Santa Catarina
    "SP", // São Paulo
    "SE", // Sergipe
    "TO"  // Tocantins
];

export default function CadastrarFilial() {
    const router = useRouter()

    const [openModal, setOpenModal] = useState<boolean>(false)

    const [estado, setEstado] = useState<string>("")
    const [endereco, setEndereco] = useState<ViaCEP>();

    const enviarDados = async (e: FormData) => {
        const filiais: any = Object.fromEntries(e)
        await createFilial(filiais)
        setOpenModal(true)
    }

    // const buscarCep = async () => {
    //     if (cep.length < 9) {
    //         setEndereco(undefined)
    //         return
    //     }
    //     try {
    //         console.log("Cheguei aqui")
    //         const infosEndereco = await fetch('https://viacep.com.br/ws/' + cep + '/json/')
    //         const consultarCEPConvert: ViaCEP = await infosEndereco.json()

    //         if (consultarCEPConvert.erro) {
    //             throw Error('CEP inexistente')
    //         }
    //         setEndereco(consultarCEPConvert);
    //     } catch (erro) {
    //         alert(erro)
    //         setEndereco(undefined)
    //     }
    // }

    return (
        <>
            <form action={enviarDados} className='mx-auto text-preto '>
                <section className=''>
                    <TituloLinha voltar={true} titulo={'Cadastre uma nova filial!'} />
                </section>
                <section className='flex flex-col justify-center items-center mt-12 gap-20 lg:flex-row lg:gap-10'>
                    <section className='flex flex-col justify-center md:gap-8 gap-5'>
                        <div className='flex md:flex-row flex-col gap-5 md:gap-8'>
                            <div className='md:w-72 w-[90%] m-auto gap-3 flex items-center justify-center'>
                                <div className='w-32 h-16 md:w-44 md:h-32'>
                                    <InputFile rounded='rounded-lg' />
                                </div>
                                <div className='md:hidden'>
                                    <p className='font-poppins text-sm text-cinza-escuro'>Adicione uma foto para seu perfil.</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 w-[90%] m-auto md:gap-8 md:w-72'>
                                <ResponsiveInput size='w-72'>
                                    <InputText
                                        placeholder='Nome Completo*'
                                        erroMessage={"O nome não pode estar vazio!"}
                                    />
                                </ResponsiveInput>
                                <ResponsiveInput size='w-72'>
                                    <InputMask
                                        placeholder='Telefone*'
                                        type={'text'}
                                        mask={"+ __ (__)_____-____"}
                                        replacement={{ _: /\d/ }}
                                        erroMessage="Telefone inválido!"
                                    />
                                </ResponsiveInput>
                            </div>
                        </div>
                        <MoldeInput>
                            <ResponsiveInput size='w-72'>
                                <InputMask placeholder='CEP'
                                    mask={'_____-___'}
                                    replacement={{ _: /\d/ }}
                                />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-72'>
                                <Select
                                    label='Estado'
                                    options={siglasEstados}
                                    opcaoSelecionada={setEstado}
                                    opcao={endereco ? endereco.uf : estado}
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput size='w-72'>
                                <InputText
                                    placeholder='Cidade'
                                    name="cidade"

                                />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-72'>
                                <InputText
                                    placeholder='Bairro'
                                    name="bairro"
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput size='w-72'>
                                <InputText
                                    placeholder='Rua'
                                    type={'text'}
                                    name="rua" />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-72'>
                                <InputText
                                    placeholder='Número'
                                    type={'number'}
                                    name="numero"
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput size='w-72'>
                                <InputText
                                    placeholder='Dias de funcionamento*'
                                />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-72'>
                                <InputText
                                    placeholder='Horário de funcionamento*'
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                    </section>
                </section>
                <section className='w-[90%] mx-auto flex flex-row justify-between items-center my-10'>
                    <div className='w-48'>
                        <BotaoGrande background='cancelar' title='Cancelar' type='button' onClick={() => router.back()} />
                    </div>
                    <div className='w-60'>
                        <BotaoGrande background='secundaria' title='Cadastrar ' type='submit' />
                    </div>
                </section>
            </form>
            {
                openModal && (
                    <div className="w-full">
                        <div className='fixed top-0 left-0 w-full h-full bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                        <div className="fixed lg:w-[25%] w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                            <UmBotao openParms={setOpenModal} texto="Serviço cadastrado!" rota='visualizarServicos' />
                        </div>
                    </div>
                )

            }
        </>
        // <main className={`w-full overflow-hidden text-preto`}>
        //     <Erro />
        //     <TituloLinha titulo='Cadastre uma nova filial!' voltar={true} />
        //     <form action={enviarDados} className='flex flex-col justify-center items-center mt-12 gap-20 lg:flex-row lg:gap-10'>
        //         <section className='flex flex-col justify-center md:gap-8 gap-5'>
        //             <div className='flex md:flex-row flex-col gap-5 md:gap-8'>
        //                 <div className='md:w-72 w-[90%] m-auto gap-3 flex items-center justify-center'>
        //                     <div className='w-32 h-16 md:w-44 md:h-32'>
        //                         <InputFile rounded='rounded-lg' />
        //                     </div>
        //                     <div className='md:hidden'>
        //                         <p className='font-poppins text-sm text-cinza-escuro'>Adicione uma foto para seu perfil.</p>
        //                     </div>
        //                 </div>
        //                 <div className='flex flex-col gap-5 w-[90%] m-auto md:gap-8 md:w-72'>
        //                     <ResponsiveInput size='w-72'>
        //                         <InputText
        //                             placeholder='Nome Completo*'
        //                             value={nome}
        //                             onChange={(e) => setNome(e.target.value)}
        //                             erro={erro && nome == ""}
        //                             erroMessage={"O nome não pode estar vazio!"}
        //                         />
        //                     </ResponsiveInput>
        //                     <ResponsiveInput size='w-72'>
        //                         <InputMask
        //                             placeholder='Telefone*'
        //                             type={'text'}
        //                             value={telefone}
        //                             onChange={(e) => setTelefone(e.target.value)}
        //                             mask={"+ __ (__)_____-____"}
        //                             replacement={{ _: /\d/ }}
        //                             error={telefone.length < 13 && erro}
        //                             erroMessage="Telefone inválido!"
        //                         />
        //                     </ResponsiveInput>
        //                 </div>
        //             </div>
        //             <MoldeInput>
        //                 <ResponsiveInput size='w-72'>
        //                     <InputMask placeholder='CEP'
        //                         onChange={(e) => setCep(e.target.value)}
        //                         value={cep}
        //                         onBlur={buscarCep}
        //                         mask={'_____-___'}
        //                         replacement={{ _: /\d/ }}
        //                     />
        //                 </ResponsiveInput>
        //                 <ResponsiveInput size='w-72'>
        //                     <Select
        //                         label='Estado'
        //                         options={siglasEstados}
        //                         opcaoSelecionada={setEstado}
        //                         opcao={endereco ? endereco.uf : estado}
        //                     />
        //                 </ResponsiveInput>
        //             </MoldeInput>
        //             <MoldeInput>
        //                 <ResponsiveInput size='w-72'>
        //                     <InputText
        //                         placeholder='Cidade'
        //                         name="cidade"
        //                         value={endereco ? endereco.localidade : undefined}

        //                     />
        //                 </ResponsiveInput>
        //                 <ResponsiveInput size='w-72'>
        //                     <InputText
        //                         placeholder='Bairro'
        //                         value={endereco?.bairro}
        //                         name="bairro"
        //                     />
        //                 </ResponsiveInput>
        //             </MoldeInput>
        //             <MoldeInput>
        //                 <ResponsiveInput size='w-72'>
        //                     <InputText
        //                         placeholder='Rua'
        //                         type={'text'}
        //                         value={endereco ? endereco.logradouro : undefined}
        //                         name="rua" />
        //                 </ResponsiveInput>
        //                 <ResponsiveInput size='w-72'>
        //                     <InputText
        //                         placeholder='Número'
        //                         type={'number'}
        //                         name="numero"
        //                     />
        //                 </ResponsiveInput>
        //             </MoldeInput>
        //             <MoldeInput>
        //                 <ResponsiveInput size='w-72'>
        //                     <InputText
        //                         placeholder='Dias de funcionamento*'
        //                         value={funcionamentoDias}
        //                         onChange={(e) => setFuncionamentoDias(e.target.value)}
        //                     />
        //                 </ResponsiveInput>
        //                 <ResponsiveInput size='w-72'>
        //                     <InputText
        //                         placeholder='Horário de funcionamento*'
        //                         value={horarioFuncionamento}
        //                         onChange={(e) => setHorarioFuncionamento(e.target.value)}
        //                     />
        //                 </ResponsiveInput>
        //             </MoldeInput>
        //         </section>
        //     </form>
        //     <section className='mb-24 mt-12'>
        //         <div className='w-[90%] md:w-[30%] lg:w-[20%] m-auto'>
        //             <BotaoGrande title='Criar filial' background='secundaria' type={'button'} />
        //         </div>
        //     </section>
        // </main>
    )
}