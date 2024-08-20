'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import InputFile from '@/components/InputFile/InputFile'
import InputMask from '@/components/InputMask/InputMask'
import InputText from '@/components/InputText/InputText'
import MoldeInput from '@/components/MoldeInput'
import CadastroPet from '@/components/Pop-up/CadastroPet/CadastroPet'
import Erro from '@/components/Pop-up/Erro/Erro'
import ResponsiveInput from '@/components/ResponsiveInput'
import Select from '@/components/Select/Select'
import { cadastroFuncionario } from '@/server/usuario/funcionario'
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

export default function CadastroFuncionario() {

    //    const funcionarioss = buscarFuncionarios()
    // console.log(funcionarioss)

    const andressa = {
        "nome": "Andressa Oliveira dos Anjos",
        "role": "FUNCIONARIO",
        "email": "andree@email.com",
        "celular": "(47)99999-9999",
        "cpf": "111.222.333-44",
        "dataNascimento": "2002-12-12",
        "sexo": "FEMININO",
        "senha": "senha",
        "idFilial": 2
    }
    const funcionario = {
        "nome": "",
        "role": "FUNCIONARIO",
        "email": "",
        "celular": "(47)99999-9999",
        "cpf": "",
        "dataNascimento": "",
        "sexo": "",
        "senha": "",
        "idFilial": 2
    }

    const [nome, setNome] = useState<string>("")
    const [dataNascimento, setDataNascimento] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [sexo, setSexo] = useState<string>('');
    const [senha, setSenha] = useState<string>("");
    const [filial, setFilial] = useState<string>('');
    const [codigo, setCodigo] = useState<string>('');


    const [erro, setErro] = useState<boolean>(false)

    const gerarSenha = () => {
        const Gerarsenha = Math.floor(100000 + Math.random() * 900000).toString();
        setSenha(Gerarsenha);
    };


    const enviarDados = () => {
        if (nome == '' || dataNascimento == "" || email == "" || sexo == "" || cpf == "" || senha == ""){
            setErro(true)
        }
        const funcionarioNovo = {
            "nome": nome,
            "role": "FUNCIONARIO",
            "email": email,
            "celular": "(47)99999-9999",
            "cpf": cpf,
            "dataNascimento": dataNascimento,
            "sexo": "FEMININO",
            "senha": senha,
            "idFilial": 2
        }
        cadastroFuncionario(funcionarioNovo)
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
                                    placeholder='Nome Completo*'
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    erro={erro && nome == ""}
                                    erroMessage={"O nome não pode estar vazio!"}
                                />
                            </ResponsiveInput>
                            <ResponsiveInput size='w-72'>
                                <InputMask
                                    placeholder='Data de Nascimento*'
                                    value={dataNascimento}
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
                                opcaoSelecionada={setSexo}
                                opcao={sexo}
                                error={sexo == '' && erro}
                                erroMessage={"Sexo inválido!"}
                            />
                        </ResponsiveInput>
                        <ResponsiveInput size='w-72'>
                            <InputMask
                                placeholder='CPF*'
                                type={'text'}
                                value={cpf}
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
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                erro={erro && codigo == ""}
                                erroMessage={"O código não pode estar vazio!"}
                            />
                        </ResponsiveInput>
                        <ResponsiveInput size='w-72'>
                            <Select
                                label='Filial*'
                                options={['Gramado - RS', 'Curitiba - PR', 'Joinville - SC']}
                                opcaoSelecionada={setFilial}
                                opcao={filial}
                                erro={filial == '' && filial}
                                erroMessage={"Filial inválido!"}
                            />
                        </ResponsiveInput>
                    </MoldeInput>
                    <MoldeInput>
                        <ResponsiveInput size='w-72'>
                            <div className='flex justify-between'>
                                <InputText
                                    placeholder='Senha*'
                                    type={'password'}
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    // erro={erro}
                                    // erroMessage={"Senha fora dos padrões"}
                                />
                                <div className='m-auto w-20'>
                                    <BotaoGrande title={'Gerar'} size={'h-10 w-full'} background={'primaria'} type={'button'} onClick={gerarSenha}/>
                                </div>
                            </div>

                        </ResponsiveInput>
                        <ResponsiveInput size='w-72'>
                            <InputText
                                placeholder='Email*'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                erro={erro && !(email.includes("@") && email.includes("."))}
                                erroMessage={"Email inválido!"}
                            />
                        </ResponsiveInput>
                    </MoldeInput>
                </section>
            </section>
            <section className='mb-24 mt-12'>
                <div className='w-[21%] m-auto'>
                    <BotaoGrande onClick={() => enviarDados()} title='Criar funcionário' size='p-2' background='secundaria' type={'button'} />
                </div>
            </section>
        </main>
    )
}