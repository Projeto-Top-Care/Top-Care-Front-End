import { title } from "process";

export const dataDaysAndSells = [
  ["Dias da Semana", "Pedidos", "Agendamentos"],
  ["Dom", 1000, 400],
  ["Seg", 1170, 460],
  ["Ter", 660, 1120],
  ["Qua", 1030, 540],
  ["Qui", 1310, 730],
  ["Sex", 830, 140],
  ["Sab", 682, 685],
];

export const configurationsBar = {
  colors: ["#B5A6F3","#DFEAFF"],
  backgroundColor: "black",
  chart: {
    title: "Vendas Semanais",
  },
  legend: {
    position: "none"
  },
  bars: 'vertical',
};