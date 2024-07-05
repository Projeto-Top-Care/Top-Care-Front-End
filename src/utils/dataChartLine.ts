const randonValues = () => {
    let values: (string | number)[][] = [["Dias", "Vendas"]]

    for (let i = 1; i < 31; i++) {
        values.push([i, Math.floor(Math.random() * 50)])
    }

    return values

}

export const dataSellsForDay = randonValues()

export const configurationsLine = {
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