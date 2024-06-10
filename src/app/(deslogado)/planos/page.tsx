import TabelaPlanos from "@/components/ItemTabelaPlanos/itemTabelaPlanos"
import { FaHeart } from "react-icons/fa6"


export default function Loja() {
    return (
        <main className="bg-branco flex flex-col gap-12 pt-14 pb-20 items-center">
            <h1 className="text-center flex flex-row items-center gap-2 font-averia lg:text-2xl text-xl font-bold text-preto">Nossos planos são pensados para oferecer o melhor no seu orçamento
                <span className="text-primaria"><FaHeart /></span></h1>

            <div className="flex flex-col gap-2 items-start">
                <div className="flex flex-row w-full justify-center sm:w-fit divide-x-[1px] border-cinza-escuro">
                    <div className="hidden self-end sm:flex flex-col">
                        <div className="flex flex-col items-center">
                            <p className="border-l-[1px] px-2 lg:px-4 flex items-center border-r-[1px] h-12 lg:h-14 bg-cinza-claro rounded-tl-lg border-t-[1px] border-cinza-escuro w-full font-poppins text-xs lg:text-sm text-preto">Descontos em produtos eleitos</p>
                            <p className="border-l-[1px] px-2 lg:px-4 flex items-center border-r-[1px] h-12 lg:h-14 pt-2 border-cinza-escuro w-full font-poppins text-xs lg:text-sm text-preto">Consultas grátis</p>
                            <p className="border-l-[1px] px-2 lg:px-4 flex items-center border-r-[1px] h-12 lg:h-14 pt-2 bg-cinza-claro border-cinza-escuro w-full font-poppins text-xs lg:text-sm text-preto">Descontos em banhos</p>
                            <p className="border-l-[1px] px-2 lg:px-4 flex items-center border-r-[1px] h-12 lg:h-14 pt-2 border-cinza-escuro w-full font-poppins text-xs lg:text-sm text-preto">Descontos em consultas</p>
                            <p className="border-l-[1px] px-2 lg:px-4 flex items-center border-r-[1px] h-12 lg:h-14 pt-2 bg-cinza-claro border-cinza-escuro w-full font-poppins text-xs lg:text-sm text-preto">Descontos em vacinas</p>
                            <p className="border-l-[1px] px-2 lg:px-4 flex items-center border-r-[1px] h-12 lg:h-14 pt-2 border-cinza-escuro w-full font-poppins text-xs lg:text-sm text-preto">Descontos em outros serviços*</p>
                            <p className="border-l-[1px] px-2 lg:px-4 flex items-center border-r-[1px] h-12 lg:h-14 pt-2 bg-cinza-claro border-cinza-escuro w-full font-poppins text-xs lg:text-sm text-preto">Plantão 24 horas</p>
                            <p className="border-l-[1px] px-2 lg:px-4 flex items-center border-r-[1px] h-12 lg:h-14 pt-2 border-b-[1px] border-cinza-escuro w-full font-poppins text-xs lg:text-sm text-preto"></p>
                        </div>
                    </div>

                    <div className="flex flex-col min-sm:w-[80%] sm:flex-row sm:gap-0 gap-4 sm:p-0 py-8">
                        <div className="flex flex-col justify-center w-full items-center border-cinza-escuro border-b-[1px]">
                            <TabelaPlanos titulo="Básico" preco={22.90} item1={"5%"} item2={"1 por ano"} item3={"5%"} item4={"5%"} item5={"5%"} item6={false} item7={false} />
                        </div>

                        <div className="flex flex-col items-center border-cinza-escuro border-b-[1px]">
                            <TabelaPlanos titulo="Médio" preco={49.90} item1={"10%"} item2={"2 por ano"} item3={"10%"} item4={"10%"} item5={"10%"} item6={false} item7={false} />
                        </div>

                        <div className="flex flex-col items-center border-cinza-escuro border-b-[1px]">
                            <TabelaPlanos titulo="Premium" preco={129.90} item1={"12%"} item2={"2 por ano"} item3={"12%"} item4={"12%"} item5={"12%"} item6={false} item7={true} />
                        </div>

                        <div className="flex flex-col items-center border-cinza-escuro border-b-[1px]">
                            <TabelaPlanos titulo="Deluxe" preco={169.90} item1={"15%"} item2={"2 por ano"} item3={"15%"} item4={"15%"} item5={"15%"} item6={true} item7={true} />
                        </div>
                    </div>
                </div>

                <p className="min-sm:w-[80%] font-poppins text-xs lg:text-sm text-cinza-escuro">*Os demais serviços não citados incluem : tosa, passeio, hospedagem e adestramentos.</p>

            </div>

        </main>
    )
}