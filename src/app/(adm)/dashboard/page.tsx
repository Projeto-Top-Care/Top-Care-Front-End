// pages/dashboard.js
'use client'
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import CardDashboard from "./CardDashboard";
import { Chart } from "react-google-charts";

const randonValues = () =>{
    let values: (string | number)[][] = [["Dias", "Vendas"], [0, 0]]

    for(let i=1; i<31; i++){
        values.push([i, Math.floor(Math.random()*50)])
    }

    return values

}

const dataLine = randonValues()

const optionsLine = {
    legend: {
        position: 'none'
    },
    colors: ['#C9E47B'],
    chartArea: {
        height: '20%',
    },
    fontName: 'Poppins',
    lineWidth: 0.5,
    pointShape: 'diamond',
    tootip: {
        fontName: 'Poppins'
    }
};

const dataPie = [
    ["Vendas por Categoria", "Vendas"],
    ["Alimentos", 11],
    ["Acessórios", 2],
    ["Higiene", 2],
    ["Medicamentos", 2],
];

const optionsPie = {
    pieHole: 0.4,
    backgroundColor: '#F5F5F5',
    is3D: false,
    legend: 'none',
    fontName: 'Poppins',
    fontSize: 14,
    colors: ['#B5A6F3', '#C9E47B', '#DFEAFF', '#DFEAFF'],
    pieSliceTextStyle: {
        color: 'black'
    },
    chartArea: {
        height: '70%',
        width: '100%'
    }
};

const Dashboard = () => {
    return (
        <main>
            <section className="my-10">
                <TituloLinha titulo="Dashboard" />
            </section>
            <section className="w-[90%] mx-auto">
                <section>
                    <h1 className="text-averia text-2xl text-preto font-semibold">Produtos</h1>
                    <div className="flex flex-row items-center border border-preto rounded-xl">
                        <div className="w-[90%] m-auto flex flex-row items-center justify-between">
                            <div className="w-[30%] flex flex-col gap-10">
                                <CardDashboard background="bg-primaria" titulo="Produtos Vendidos" variavel={234} />
                                <CardDashboard background="bg-secundaria" titulo="Ganhos" variavel={234} valor={true} />
                            </div>
                            <div className="w-[30%] flex items-center justify-center">
                                <Chart
                                    chartType="PieChart"
                                    width="90%"
                                    height="350px"
                                    data={dataPie}
                                    options={optionsPie}
                                />
                            </div>
                            <div className="w-[30%] bg-cinza-claro">
                                <Chart
                                    chartType="Line"
                                    width="100%"
                                    height="300px"
                                    data={dataLine}
                                    options={optionsLine}
                                    className={'px-8 py-5'}
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
