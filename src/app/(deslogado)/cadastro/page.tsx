'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputFile from '@/components/InputFile/InputFile'
import InputMask from '@/components/InputMask/InputMask'
import InputText from '@/components/InputText/InputText'
import MoldeInput from '@/components/MoldeInput'
import CadastroPet from '@/components/Pop-up/CadastroPet/CadastroPet'
import Erro from '@/components/Pop-up/Erro/Erro'
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

    const [nome, setNome] = useState<string>("")
    const [dataNascimento, setDataNascimento] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [sexo, setSexo] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confSenha, setConfSenha] = useState<string>('');

    const [cep, setCep] = useState<string>('');
    const [estado, setEstado] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [rua, setRua] = useState<string>('');
    const [complemento, setComplemento] = useState<string>('');
    const [bairro, setBairro] = useState<string>('');
    const [numero, setNumero] = useState<number>(0)
    const [nomeEndereco, setNomeEndereco] = useState<string>('')

    const [messageCep, setMessageCep] = useState<string>('');
    const [erro, setErro] = useState<boolean>(false)
    const [inexistente, setInexistente] = useState<boolean>(false)

    const enviarDados = () => {
        if(nome == '' || dataNascimento == "" || email == "" || sexo == "" || telefone == "" || cpf == "" || senha == "" || confSenha == "" || cep == '' ||
        estado == '' || cidade == '' || rua == "" || complemento == "" || bairro == "" || numero == 0 || nomeEndereco == "")
        setErro(true)
        setMessageCep("CEP inválido!")
    }


    const buscarCep = async () => {
        try {
            const infosEndereco = await fetch('https://viacep.com.br/ws/' + cep + '/json/')
            const consultarCEPConvert: ViaCEP = await infosEndereco.json()

            if (consultarCEPConvert.erro) {
                throw Error('CEP inexistente')
            }
            setCidade(consultarCEPConvert.localidade)
            setRua(consultarCEPConvert.logradouro)
            setComplemento(consultarCEPConvert.complemento)
            setBairro(consultarCEPConvert.bairro)
            setEstado(consultarCEPConvert.uf)
        } catch (erro) {
            setInexistente(true)
            setMessageCep("CEP inexistente!")
        }
    }

    const requisitosSenha = () => {
        let requisitos = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!]).{8,}$/;
        return !requisitos.test(senha)
    }

    return (
        <main className={`w-full overflow-hidden text-preto`}>
            <Erro />
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
                            <ResponsiveInput size='w-72'>
                                <InputText
                                    placeholder='Nome Completo'
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    erro={erro && nome == ""}
                                    erroMessage={"O nome não pode estar vazio!"}
                                />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-72'>
                                <InputMask
                                    placeholder='Data de Nascimento'
                                    value={dataNascimento}
                                    onChange={(e) => setDataNascimento(e.target.value)}
                                    erro={erro && dataNascimento.length < 10}
                                    erroMessage={"Data inválida"}
                                    mask={"dd/mm/yyyy"}
                                    replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                />
                            </ResponsiveInput>
                        </div>
                    </div>
                    <MoldeInput>
                        <ResponsiveInput size='w-72'>
                            <InputText
                                placeholder='Email'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                erro={erro && !(email.includes("@") && email.includes("."))}
                                erroMessage={"Email inválido!"}
                            />
                        </ResponsiveInput>
                        <ResponsiveInput size='w-72'>
                            <InputMask
                                placeholder='Telefone'
                                type={'tel'}
                                value={telefone}
                                mask={'(__) _____-____'}
                                replacement={{ _: /\d/ }}
                                erro={telefone.length < 15 && erro}
                                onMasks={(e) => setTelefone(e.target.value)}
                                erroMessage={"Telefone inválido"}
                            />
                        </ResponsiveInput>
                    </MoldeInput>
                    <MoldeInput>
                        <ResponsiveInput size='w-72'>
                            <InputMask
                                placeholder='CPF'
                                type={'text'}
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                mask={"___.___.___-__"}
                                replacement={{ _: /\d/ }}
                                erro={cpf.length < 13 && erro}
                                erroMessage="CPF inválido!"
                            />
                        </ResponsiveInput>
                        <ResponsiveInput size='w-72'>
                            <Select 
                            label='Sexo' 
                            options={['Masculino', 'Feminino', 'Prefiro não Informar']} 
                            opcaoSelecionada={setSexo} 
                            opcao={sexo}
                            erro = {sexo == '' && erro}
                            erroMessage={"Sexo inválido!"}
                            />
                        </ResponsiveInput>
                    </MoldeInput>
                    <MoldeInput>
                        <ResponsiveInput size='w-72'>
                            <InputText
                                placeholder='Senha'
                                type={'password'}
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                erro={erro && requisitosSenha()}
                                erroMessage={"Senha fora dos padrões"}
                            />
                        </ResponsiveInput>
                        <ResponsiveInput size='w-72'>
                            <InputText
                                placeholder='Confirmar Senha'
                                type={'password'}
                                value={confSenha}
                                onChange={(e) => setConfSenha(e.target.value)}
                                erro={erro && confSenha != senha}
                                erroMessage={"As senhas não correspondem"}
                            />
                        </ResponsiveInput>
                        <div className='w-72 ml-4 flex gap-5 absolute top-4 md:mt-12'>
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
                <div className='border-t border-cinza mt-12 md:mt-20 w-[80%] m-auto lg:mt-32'></div>
            </section>
            <section className='flex justify-center mt-8'>
                <h1 className='font-averia font-bold text-2xl'>Endereço</h1>
            </section>
            <section className='md:mt-16 mt-10 w-full flex flex-col items-center gap-5 lg:gap-8'>
                <section className='flex flex-col gap-5 w-[80%]'>
                    <div className='flex flex-col gap-5 lg:gap-8 lg:m-auto lg:flex-row'>
                        <MoldeInput>
                            <ResponsiveInput size='w-60'>
                                <InputMask placeholder='CEP'
                                    type={'text'}
                                    onChange={(e) => setCep(e.target.value)}
                                    value={cep}
                                    onBlur={() => buscarCep()}
                                    onFocus={() => {
                                        setErro(false)
                                        setInexistente(false)
                                    }}
                                    mask={'_____-___'}
                                    replacement={{ _: /\d/ }}
                                    erro={erro || inexistente}
                                    erroMessage={messageCep}
                                />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-60'>
                                <Select 
                                label='Estado' 
                                options={siglasEstados} 
                                opcaoSelecionada={setEstado} 
                                opcao={estado}
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput size='w-60'>
                                <InputText 
                                placeholder='Cidade' 
                                type={'text'} 
                                value={cidade} 
                                onChange={(e) => setCidade(e.target.value)} 
                                />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-60'>
                                <InputText 
                                placeholder='Bairro' 
                                type={'text'} 
                                value={bairro} 
                                onChange={(e) => setBairro(e.target.value)} 
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                    </div>
                </section>
                <section className='flex flex-col gap-5 w-[80%]'>
                    <div className='flex flex-col gap-5 lg:gap-8 lg:m-auto lg:flex-row'>
                        <MoldeInput>
                            <ResponsiveInput size='w-60'>
                                <InputText
                                    placeholder='Rua'
                                    type={'text'}
                                    value={rua}
                                    onChange={(e) => setRua(e.target.value)} />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-60'>
                                <InputText 
                                placeholder='Número' 
                                type={'number'}
                                onChange={(e)=>setNumero(parseInt(e.target.value))}
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput size='w-60'>
                                <InputText 
                                placeholder='Complemento' 
                                type={'text'} 
                                value={complemento} 
                                onChange={(e) => setComplemento(e.target.value)} />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-60'>
                                <InputText 
                                placeholder='Nome para o Endereço' 
                                type={'text'} 
                                value={nomeEndereco}
                                onChange={(e)=>setNomeEndereco(e.target.value)}
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                    </div>
                </section>
            </section>
            <section className='w-full flex justify-center items-center mt-8 sm:mt-14 mb-14'>
                <div className='md:w-[25%] lg:w-[15%] w-[90%]'>
                    <BotaoGrande 
                    background='bg-terciaria' 
                    title='Cadastrar' 
                    type={'button'} 
                    onClick = {()=> enviarDados()}
                    />
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