// pages/dashboard.js
'use client'
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import CardDashboard from "./CardDashboard";
import { Chart } from "react-google-charts";
import { dataDaysAndSells , configurationsBar } from "@/utils/dataChartBar"
import { dataSellsForDay, configurationsLine} from "@/utils/dataChartLine"
import { dataCategoriesSoldPerMonth, dataMethodsUsedPerUser, configurationsPie} from "@/utils/dataChartPie"

const Dashboard = () => {
    return (
        <main>
            <section className="my-10">
                <TituloLinha titulo="Dashboard" voltar={false} />
            </section>
            <section className="w-[90%] mx-auto">
                <section>
                    <h1 className="text-averia text-2xl text-preto font-semibold mb-4">Produtos</h1>
                    <div className="flex flex-row items-center border border-preto rounded-xl">
                        <div className="w-[90%] m-auto flex flex-row items-center justify-between">
                            <div className="w-[30%] flex flex-col gap-10">
                                <CardDashboard background="bg-primaria" titulo="Produtos Vendidos" variavel={234} />
                                <CardDashboard background="bg-secundaria" titulo="Ganhos" variavel={234} valor={true} />
                            </div>
                            <div className="w-[30%] h-56 flex flex-col items-center justify-center">
                                <h1 className="z-50 mb-2 font-poppins text-lg">Vendas por Categoria</h1>
                                <Chart
                                    className=""
                                    chartType="PieChart"
                                    width="100%"
                                    height="100%"
                                    data={dataCategoriesSoldPerMonth}
                                    options={configurationsPie}
                                />
                            </div>
                            <div className="w-[35%] bg-branco p-6 rounded-lg">
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="250px"
                                    data={dataSellsForDay}
                                    options={configurationsLine}
                                    className="border border-preto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="w-[90%] mx-auto mt-14 mb-14">
                <section>
                    <h1 className="text-averia text-2xl text-preto font-semibold mb-4">Pedidos e Agendamentos</h1>
                    <div className="flex flex-row items-center border border-preto rounded-xl">
                        <div className="w-[90%] m-auto flex flex-row items-center justify-between">
                            <div className="w-[30%] flex flex-col gap-6">
                                <CardDashboard background="bg-terciaria" titulo="Total Diário" variavel={58} height='h-20' />
                                <CardDashboard background="bg-primaria" titulo="Ticket Médio" variavel={250} valor height='h-20' />
                                <CardDashboard background="bg-secundaria" titulo="Total Realizados" variavel={2234} height='h-20' />
                            </div>
                            <div className="w-[30%] h-96 flex flex-col items-center justify-center">
                                <Chart
                                    chartType="Bar"
                                    width="100%"
                                    height="300px"
                                    data={dataDaysAndSells}
                                    options={configurationsBar}
                                />

                            </div>
                            <div className="w-[30%] rounded-lg">
                                <h1 className="z-50 mb-2 font-poppins text-lg text-center">Métodos de Pagamento mais Utilizados</h1>
                                <Chart
                                    className=""
                                    chartType="PieChart"
                                    width="100%"
                                    height="100%"
                                    data={dataMethodsUsedPerUser}
                                    options={configurationsPie}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </main>
    );
};

export default Dashboard;
