// pages/dashboard.js
'use client'
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import CardDashboard from "./CardDashboard";
const Dashboard = () => {
    return (
        <main>
            <section className="my-10">
                <TituloLinha titulo="Dashboard" />
            </section>
            <section className="w-[90%] mx-auto">
                <section>
                    <h1 className="text-averia text-2xl text-preto font-semibold">Produtos</h1>
                    <div className="flex flex-row justify-between">
                        <div className="w-[33%]">
                            <CardDashboard background="bg-primaria" titulo="Produtos Vendidos" variavel={234} />
                            <CardDashboard background="bg-secundaria" titulo="Ganhos" variavel={234} valor={true} />
                        </div>
                        <div className="w-[33%]">
                        </div>
                        <div className="w-[33%]">
                        </div>
                    </div>
                </section>
            </section>

        </main>
    );
};

export default Dashboard;
