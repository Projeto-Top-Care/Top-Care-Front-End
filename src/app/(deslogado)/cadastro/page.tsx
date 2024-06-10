'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputFile from '@/components/InputFile/InputFile'
import InputMask from '@/components/InputMask/InputMask'
import InputText from '@/components/InputText/InputText'
import MoldeInput from '@/components/MoldeInput'
import CadastroPet from '@/components/Pop-up/CadastroPet/CadastroPet'
import ResponsiveInput from '@/components/ResponsiveInput'
import Select from '@/components/Select/Select'
import { ViaCEP } from '@/types/usuarios'
import React, { useState } from 'react'

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

export default function Cadastro() {
    const [open, setOpen] = useState<boolean>(false)
    const [sexo, setSexo] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [messageCep, setMessageCep] = useState<string>('');
    const [estado, setEstado] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [rua, setRua] = useState<string>('');
    const [complemento, setComplemento] = useState<string>('');
    const [bairro, setBairro] = useState<string>('');

    const [erro, setErro] = useState<boolean>(false)
    const [inexistente, setInexistente] = useState<boolean>(false)

    const buscarCep = async () => {
        try {
            if(cep.length < 9){
                setErro(true)
                setMessageCep("CEP inválido!")
                return
            }

            const infosEndereco = await fetch('https://viacep.com.br/ws/' + cep + '/json/')
            const consultarCEPConvert: ViaCEP = await infosEndereco.json()

            if(consultarCEPConvert.erro){
                throw Error('CEP inexistente')
            }
            setCidade(consultarCEPConvert.localidade)
            setRua(consultarCEPConvert.logradouro)
            setComplemento(consultarCEPConvert.complemento)
            setBairro(consultarCEPConvert.bairro)
            setEstado(consultarCEPConvert.uf)
        }catch(erro){
            setInexistente(true)
            setMessageCep("CEP inexistente!")
        } 
    }

    return (
        <main className={`w-full overflow-hidden text-preto`}>
            <section className='w-[90%] m-auto mt-10 md:w-full'>
                <h1 className='font-averia text-center text-2xl font-bold'>Faça o cadastro e entre para a família Top Care!</h1>
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
                            <ResponsiveInput>
                                <InputText placeholder='Nome Completo' />
                            </ResponsiveInput>
                            <ResponsiveInput>
                                <InputText placeholder='Data de Nascimento' />
                            </ResponsiveInput>
                        </div>
                    </div>
                    <MoldeInput>
                        <ResponsiveInput>
                            <InputText placeholder='Email' type={'text'} />
                        </ResponsiveInput>
                        <ResponsiveInput>
                            <InputText placeholder='Telefone' type={'tel'} />
                        </ResponsiveInput>
                    </MoldeInput>
                    <MoldeInput>
                        <ResponsiveInput>
                            <InputText placeholder='CPF' type={'text'} />
                        </ResponsiveInput>
                        <ResponsiveInput>
                            <Select label='Sexo' options={['', 'Masculino', 'Feminino', 'Prefiro não Informar']} opcaoSelecionada={setSexo} opcao={sexo} />
                        </ResponsiveInput>
                    </MoldeInput>
                    <MoldeInput>
                        <ResponsiveInput>
                            <InputText placeholder='Senha' type={'password'} />
                        </ResponsiveInput>
                        <ResponsiveInput>
                            <InputText placeholder='Confirmar Senha' type={'password'} />
                        </ResponsiveInput>
                        <div className='w-72 ml-4 flex gap-5 absolute mt-28 md:mt-12'>
                            <div>
                                <p className='list-item font-poppins text-[0.6rem]'>Letra maiúscula e minúscula</p>
                                <p className='list-item font-poppins text-[0.6rem]'>1 caractere especial(@#!)</p>
                            </div>
                            <div>
                                <p className='list-item font-poppins text-[0.6rem]'>Mínimo 8 caracteres   </p>
                                <p className='list-item font-poppins text-[0.6rem]'>Números</p>
                            </div>
                        </div>
                    </MoldeInput>
                </section>
                <section className='w-80 flex flex-col gap-2'>
                    <div className='max-sm:hidden'>
                        <img src="./assets/imagemCadastro.svg" alt="" />
                    </div>
                    <div className='flex flex-col w-[90%] m-auto text-center md:gap-2 md:w-full'>
                        <h1 className='font-poppins font-medium'>Gostaria de cadastrar um Pet?</h1>
                        <p className='font-poppins text-sm'>Cadastre aqui pra ele não perder nenhuma oportunidade! É rapidinho!</p>
                    </div>
                    <div className='md:w-full w-[90%] m-auto' onClick={() => setOpen(true)}>
                        <BotaoGrande title='Cadastrar Pet' background='bg-primaria' type={'button'} />
                    </div>

                </section>
            </section>
            <section>
                <div className='border-t border-cinza mt-12 md:mt-20 w-[90%] m-auto lg:mt-32'></div>
            </section>
            <section className='flex justify-center mt-8'>
                <h1 className='font-averia font-bold text-2xl'>Endereço</h1>
            </section>
            <section className='md:mt-16 mt-10 w-full flex flex-col items-center gap-5 lg:gap-8'>
                <section className='flex flex-col gap-5 w-[90%]'>
                    <div className='flex flex-col gap-5 lg:gap-8 lg:m-auto lg:flex-row'>
                        <MoldeInput>
                            <ResponsiveInput>
                                <InputMask placeholder='CEP'
                                    type={'text'}
                                    onChange={(e) => setCep(e.target.value)}
                                    value={cep}
                                    onBlur={() => buscarCep()}
                                    onFocus={()=>{
                                        setErro(false)
                                        setInexistente(false)
                                    }}
                                    mask={'_____-___'}
                                    replacement={{ _: /\d/ }}
                                    error={erro || inexistente}
                                    message={messageCep}
                                />
                            </ResponsiveInput>
                            <ResponsiveInput>
                                <Select label='Estado' options={siglasEstados} opcaoSelecionada={setEstado} opcao={estado} />
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput>
                                <InputText placeholder='Cidade' type={'text'} value={cidade} onChange={(e) => setCidade(e.target.value)} />
                            </ResponsiveInput>
                            <ResponsiveInput>
                                <InputText placeholder='Bairro' type={'text'} value={bairro} onChange={(e) => setBairro(e.target.value)} />
                            </ResponsiveInput>
                        </MoldeInput>
                    </div>
                </section>
                <section className='flex flex-col gap-5 w-[90%]'>
                    <div className='flex flex-col gap-5 lg:gap-8 lg:m-auto lg:flex-row'>
                        <MoldeInput>
                            <ResponsiveInput>
                                <InputText 
                                placeholder='Rua' 
                                type={'text'} 
                                value={rua} 
                                onChange={(e) => setRua(e.target.value)} />
                            </ResponsiveInput>
                            <ResponsiveInput>
                                <InputText placeholder='Número' type={'number'} />
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput>
                                <InputText placeholder='Complemento' type={'text'} value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                            </ResponsiveInput>
                            <ResponsiveInput>
                                <InputText placeholder='Nome para o Endereço' type={'text'} />
                            </ResponsiveInput>
                        </MoldeInput>
                    </div>
                </section>
            </section>
            <section className='w-full flex justify-center items-center mt-8 sm:mt-14 mb-14'>
                <div className='md:w-[25%] lg:w-[15%] w-[90%]'>
                    <BotaoGrande background='bg-terciaria' title='Cadastrar' type={'button'} />
                </div>
            </section>
            {open && (
                <div className='overflow-hidden'>
                    <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpen(false)}></div>
                    <div className='fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                        <CadastroPet setOpen={setOpen} />
                    </div>
                </div>
            )}
        </main>
    )
}