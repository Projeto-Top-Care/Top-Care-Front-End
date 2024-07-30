import Select from "@/components/Select/Select";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { FaSearch } from "react-icons/fa";


export default function funcionarios() {

    return (
        <main>
            <section>
                <TituloLinha titulo={"Funcionários"} voltar={false} />
                {/* <div className="flex justify-between w-[90%] m-auto">
                    <div className="flex w-[60%] px-1 border border-preto rounded-lg h-10">
                        <div className="size-[2rem] h-full flex">
                            <button><FaSearch style={{ color: "#322828" }} /></button>
                        </div>
                        <input
                            type="search"
                            value={""}
                            onChange={(e) => setPesquisa(e.target.value)}
                            className="focus:outline-0 w-full text-xs sm:text-base placeholder:text-cinza-escuro font-poppins bg-branco"
                            placeholder="Pesquise nos agendamentos" />
                    </div>
                    <div className='md:w-[18%] w-[38%]'>
                        <Select
                            options={['Data Crescente', 'Data Decrescente', 'Valor Crescente', 'Valor Decrescente', 'A a Z']} opcaoSelecionada={(opcao) => setEscolha(opcao)} label={'Ordenar Por'} opcao={escolha}/>
                    </div>
                </div> */}
            </section>
            <section className="mb-24 flex justify-center font-poppins text-sm">
                <table className="table-auto w-[90%]">
                    <thead>
                        <tr className="text-center text-preto">
                            <th>Sexo</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>Nome</th>
                            <th>Código</th>
                        </tr>
                    </thead>
                    <tbody className="lg:text-sm text-xs text-center text-preto break-word border-2 border-cinza">
                        <tr className='bg-cinza-claro'>
                            <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{}</td>
                            <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{ }</td>
                            <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{ }</td>
                            <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{ }</td>
                            <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{ }</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>

    )
}