'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import InputFile from '@/components/InputFile/InputFile'
import InputMask from '@/components/InputMask/InputMask'
import InputText from '@/components/InputText/InputText'
import MoldeInput from '@/components/MoldeInput'
import Erro from '@/components/Pop-up/Erro/Erro'
import ResponsiveInput from '@/components/ResponsiveInput'
import Select from '@/components/Select/Select'
import { buscarFiliais } from '@/server/filiais/filial'
import { cadastroFuncionario } from '@/server/usuario/funcionario'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function CadastroFuncionario() {
    const router = useRouter();

    const [erro, setErro] = useState<boolean>(false)

    const gerarSenha = () => {
        const Gerarsenha = Math.floor(100000 + Math.random() * 900000).toString();
        setSenha(Gerarsenha);
    };

    const [nome, setNome] = useState<string>("")
    const [dataNascimento, setDataNascimento] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [filial, setFilial] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>("")
    const [sexo, setSexo] = useState<string>("")

    const enviarDados = (e: FormData) => {
        const parseData = dataNascimento.split("/")
        const stringFormat = parseData[1] + "-" + parseData[0] + "-" + parseData[2]
        const dataFormatada = new Date(stringFormat);

        e.append("dataNascimento", dataFormatada.toISOString().split("T")[0])
        e.append("sexo", sexo.toUpperCase())
        e.append("role", "FUNCIONARIO")

        const dados = Object.fromEntries(e)
        const response = cadastroFuncionario(dados)
        router.push('./funcionarios')
    }
    
    const [filiais, setFiliais] = useState<string[]>()

    const verFiliais = async () => {
        const response = await buscarFiliais()
        const listaDeNomes = response.map(filial => filial.nome);
        // console.log(listaDeNomes);
        setFiliais(listaDeNomes)
    }

    useEffect(() => {
        verFiliais()
    }, [])

    return (
        <main className={`w-full overflow-hidden text-preto`}>
            <Erro />
            <section className='w-[90%] m-auto mt-10 md:w-full'>
                <h1 className='font-averia text-center text-2xl font-bold'>Faça o cadastro e entre para a família Top Care!</h1>
            </section>

            <form action={enviarDados}>
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
                                        name='nome'
                                        type='nome'
                                        required
                                        onChange={(e) => setNome(e.target.value)}
                                        erro={erro && nome == ""}
                                        erroMessage={"O nome não pode estar vazio!"}
                                    />
                                </ResponsiveInput>
                                <ResponsiveInput size='w-72'>
                                    <InputMask
                                        placeholder='Data de Nascimento*'
                                        name='dataNascimento'
                                        type='dataNascimento'
                                        required
                                        onChange={(e) => setDataNascimento(e.target.value)}
                                        error={erro && dataNascimento.length < 10}
                                        erroMessage={"Data inválida"}
                                        mask={"dd/mm/yyyy"}
                                        replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                    />
                                </ResponsiveInput>
                            </div>
                        </div>
                        <MoldeInput>
                            <ResponsiveInput size='w-72'>
                                <Select
                                    label='Sexo*'
                                    options={['Masculino', 'Feminino', 'Prefiro não Informar']}
                                    name='sexo'
                                    opcaoSelecionada={setSexo}
                                    opcao={sexo}
                                />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-72'>
                                <InputMask
                                    placeholder='CPF*'
                                    name='cpf'
                                    type='cpf'
                                    required
                                    onChange={(e) => setCpf(e.target.value)}
                                    mask={"___.___.___-__"}
                                    replacement={{ _: /\d/ }}
                                    error={cpf.length < 13 && erro}
                                    erroMessage="CPF inválido!"
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput size='w-72'>
                                <InputText
                                    placeholder='Código do Funcionário*'
                                    name='codigo'
                                    type='codigo'
                                    required
                                    erro={erro}
                                    erroMessage={"O código não pode estar vazio!"}
                                />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-72'>
                                <Select
                                    label='Filial*'
                                    options={filiais ? filiais! : ["Não há filiais cadastradas!"]}
                                    opcaoSelecionada={setFilial}
                                    opcao={filial}
                                    name='nomeFilial'
                                // erro={filial == '' && filial}
                                // erroMessage={"Filial inválido!"}
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput size='w-72'>
                                <div className='flex justify-between'>
                                    <InputText
                                        placeholder='Senha*'
                                        name='senha'
                                        type='senha'
                                        required
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                    <div className='m-auto w-20'>
                                        <BotaoGrande title={'Gerar'} size={'h-10 w-full'} background={'primaria'} type={'button'} onClick={gerarSenha} />
                                    </div>
                                </div>

                            </ResponsiveInput>
                            <ResponsiveInput size='w-72'>
                                <InputText
                                    placeholder='Email*'
                                    name='email'
                                    type='email'
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    erro={erro && !(email.includes("@") && email.includes("."))}
                                    erroMessage={"Email inválido!"}
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                    </section>
                </section>
                <section className='w-fit gap-9 flex flex-col lg:flex-row mb-24 mt-8 m-auto'>
                    <div>
                        <MoldeInput>
                            <ResponsiveInput size='w-72'>
                                <InputMask
                                    placeholder='Telefone*'
                                    name="celular"
                                    type='celular'
                                    required
                                    mask={'(__) _____-____'}
                                    replacement={{ _: /\d/ }}
                                />
                            </ResponsiveInput>
                        </MoldeInput>
                    </div>
                    <div className='w-72'>
                        <BotaoGrande title='Criar funcionário' size='p-2' background='secundaria' type={'submit'} />
                    </div>
                </section>
            </form>
        </main>
    )
}