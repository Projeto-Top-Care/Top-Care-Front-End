// pages/dashboard.js
'use client'
import { colors } from "@mui/material";
import { Chart } from "react-google-charts";

const Dashboard = () => {
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
        colors: ['#C9E47B']
    };

    const dataPie = [
        ["Produtos", "Quantidade de Vendas"],
        ["Acessórios", 11],
        ["Medicamentos", 22],
        ["Higiene", 9],
        ["Brinquedos", 7],
    ];

    const optionsPie = {
        pieHole: 0.4,
        is3D: false,
        legend: "none",
        colors: ['#B5A6F3', '#C9E47B', '#DFEAFF', '#DFEAFF'],
        fontName: 'Poppins',
        pieSliceTextStyle: {
            color: 'black'
        },
        backgroundColor: '#F5F5F5',
        tooltip: {
            ignoreBounds: true,
            showColorCode: true,
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className=" w-full flex flex-wrap">
                <div className="container p-4 w-[30%]">
                    <section className="rounded-lg shadow-md p-4 mb-6 bg-cinza-claro">
                        <h2 className="text-xl font-semibold mb-2 poppins">Vendas por categoria</h2>
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="300px"
                            data={dataPie}
                            options={optionsPie}
                            style={{ borderRadius: 40 }}
                        />
                    </section>
                </div>
                <div className="container p-4 w-[30%]">
                    <section className="rounded-lg shadow-md p-4 mb-6 ">
                        <h2 className="text-xl font-semibold mb-2 poppins">Vendas Mensais</h2>
                        <Chart
                            chartType="Line"
                            width="100%"
                            height="300px"
                            data={dataLine}
                            options={optionsLine}
                        />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
