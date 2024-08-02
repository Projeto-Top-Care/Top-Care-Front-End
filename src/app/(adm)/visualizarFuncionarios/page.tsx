'use client'

import TituloLinha from "@/components/TituloLinha/TituloLinha"
import InputPreenchido from "../visualizarPedido/InputPreenchido"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import Select from "@/components/Select/Select"
import CardFuncionario from "./CardFuncionario"

interface VisualizarAgendamentoProps {
    searchParams: {
        id: number
    }
}

export default function VisualizarAgendamento({ searchParams }: VisualizarAgendamentoProps) {

    const [pesquisa, setPesquisa] = useState<string>('')
    const [escolha, setEscolha] = useState<string>('');

    const funcionarios = [
        { nome: "Victor Gabriel Micheluzzi", email: "victor@email.com", cadastro: "1", sexo: "masculino", cpf: "111.222.333-44" },
        { nome: "João Victor Santana", email: "joao@email.com", cadastro: "2", sexo: "masculino", cpf: "111.222.333-44" },
        { nome: "Carlos Eduardo Bolzanell dos Santos", email: "carlos@email.com", cadastro: "3", sexo: "masculino", cpf: "111.222.333-44" },
        { nome: "Luana Becker", email: "luana@email.com", cadastro: "4", sexo: "feminino", cpf: "111.222.333-44" },
        { nome: "Karoliny Daiana Cieply", email: "karoliny@email.com", cadastro: "5", sexo: "feminino", cpf: "111.222.333-44" },
        { nome: "Romário Hornburg", email: "romario@email.com", cadastro: "6", sexo: "masculino", cpf: "111.222.333-44" },
        { nome: "Kristian Erdmann", email: "krsitian@email.com", cadastro: "7", sexo: "masculino", cpf: "111.222.333-44" },
    ]

    const ordenarFuncionarios = (funcionarios: Object[]): Object[] => {
        if (escolha === "Cadastro decrescente") {
            return [...funcionarios].sort((a, b) => b.cadastro - a.cadastro);
        } else if (escolha === "Cadastro crescente") {
            return [...funcionarios].sort((a, b) => a.cadastro - b.cadastro);
        } else if (escolha === "Ordem alfabética") {
            return [...funcionarios].sort((a, b) => a.nome.localeCompare(b.nome));
        } else {
            return funcionarios
        }
    }

    const funcionariosPesquisa = funcionarios.filter((funcionario : Object) => 
        funcionario.nome.includes(pesquisa) ||
        funcionario.cadastro.includes(pesquisa) ||
        funcionario.sexo.includes(pesquisa) ||
        funcionario.cpf.includes(pesquisa))
    
//     const pedidosPesquisa : PedidoType[] = pedidosData.filter((pedido : PedidoType) =>
//     pedido.Cod_pedido.includes(pesquisa) ||
//     pedido.Dt_pedido.includes(pesquisa) ||
//     pedido.Produto.includes(pesquisa) ||
//     pedido.Cliente.includes(pesquisa) ||
//     pedido.Destino.includes(pesquisa) ||
//     pedido.Valor.toString().includes(pesquisa) ||
//     pedido.Status.includes(pesquisa) ||
//     pedido.Pagamento.includes(pesquisa)
// );

    const funcionariosOrdenados: Object[] = ordenarFuncionarios(funcionariosPesquisa);

    return (
        <main className='font-poppins text-preto'>
            <section className=''>
                <TituloLinha voltar={false} titulo={`Funcionarios`} />
            </section>
            <section className="flex justify-between w-[90%] m-auto">
                <div className="flex w-[60%] px-1 border border-preto rounded-lg h-10">
                    <div className="size-[2rem] h-full flex">
                        <button><FaSearch style={{ color: "#322828" }} /></button>
                    </div>
                    <input
                        type="search"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        className="focus:outline-0 w-full text-xs sm:text-base placeholder:text-cinza-escuro font-poppins bg-branco"
                        placeholder="Pesquise nos funcionários" />
                </div>
                <div className='md:w-[18%] w-[38%]'>
                    <Select options={['Ordem alfabética', 'Cadastro crescente', 'Cadastro decrescente']} opcaoSelecionada={(opcao) => setEscolha(opcao)} label={'Ordenar por'} opcao={escolha} />
                </div>
            </section>
            <section className="w-[80%] m-auto gap-4 grid grid-cols-3 pt-12 pb-20">
                {
                    funcionariosOrdenados.map((item, index) => (
                        <CardFuncionario nome={item.nome} cadastro={item.cadastro} cpf={item.cpf} email={item.email} />
                    ))
                }
            </section>

        </main >
    )
}
