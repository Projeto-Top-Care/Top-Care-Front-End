// pages/dashboard.js
'use client'
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import CardDashboard from "./CardDashboard";
import { Chart } from "react-google-charts";

const randonValues = () => {
    let values: (string | number)[][] = [["Dias", "Vendas"]]

    for (let i = 1; i < 31; i++) {
        values.push([i, Math.floor(Math.random() * 50)])
    }

    return values

}

const dataLine = randonValues()

const optionsLine = {
    title: "Vendas Diárias",
    titleTextStyle: {
        fontName: "Poppins",
        fontSize: 16,
        bold: false
    },
    backgroundColor: '#F9F9F9',
    legend: {
        position: 'none'
    },
    colors: ['#C9E47B'],
    chartArea: {
        height: '60%',
        width: '80%',
    },
    fontName: 'Poppins',
    lineWidth: 2,
    pointShape: 'circle',
    tootip: {
        fontName: 'Poppins'
    }
}

const dataPie = [
    ["Vendas por Categoria", "Vendas"],
    ["Alimentos", 29],
    ["Acessórios", 45],
    ["Higiene", 93],
    ["Medicamentos", 128],
];

const optionsPie = {
    pieHole: 0.4,
    backgroundColor: '#F5F5F5',
    is3D: false,
    legend: 'none',
    fontName: 'Poppins',
    fontSize: 14,
    colors: ['#B5A6F3', '#C9E47B', '#DFEAFF', '#FFD601'],
    pieSliceTextStyle: {
        color: 'black'
    },
    chartArea: {
        height: '100%',
        width: '100%'
    }
};

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
                                    data={dataPie}
                                    options={optionsPie}
                                />
                            </div>
                            <div className="w-[35%] bg-cinza-claro p-6 rounded-lg">
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="250px"
                                    data={dataLine}
                                    options={optionsLine}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="w-[90%] mx-auto mt-14">
                <section>
                    <h1 className="text-averia text-2xl text-preto font-semibold mb-4">Pedidos e Agendamentos</h1>
                    <div className="flex flex-row items-center border border-preto rounded-xl">
                        <div className="w-[90%] m-auto flex flex-row items-center justify-between">
                            <div className="w-[30%] flex flex-col gap-6">
                                <CardDashboard background="bg-terciaria" titulo="Total Diário" variavel={58} height='h-20' />
                                <CardDashboard background="bg-primaria" titulo="Ticket Médio" variavel={250} valor height='h-20' />
                                <CardDashboard background="bg-secundaria" titulo="Total Realizados" variavel={2234} height='h-20' />
                            </div>
                            <div className="w-[30%] h-56 flex flex-col items-center justify-center">
                                <h1 className="z-50 mb-2 font-poppins text-lg">Vendas por Categoria</h1>
                                <Chart 
                                    chartType="BarChart"
                                />

                            </div>
                            <div className="w-[35%] bg-cinza-claro p-6 rounded-lg">
                                <Chart
                                    className=""
                                    chartType="PieChart"
                                    width="100%"
                                    height="100%"
                                    data={dataPie}
                                    options={optionsPie}
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
