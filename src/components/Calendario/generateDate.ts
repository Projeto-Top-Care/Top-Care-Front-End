import dayjs from "dayjs";

export const generateDate = (month = dayjs().month(), year = dayjs().year()) =>{
    const firstDayofMonth = dayjs().year(year).month(month).startOf('month');
    const lastDayOfMonth = dayjs().year(year).month(month).endOf('month');

    let arrayDays = [];

    //dias antes que aparecem no calendario
    for(let i = 0; i < firstDayofMonth.day(); i++){
        arrayDays.push({currentMonth: false , date: firstDayofMonth.date(i)})
    }

    //Dias do mes
    for(let i = firstDayofMonth.date(); i <= lastDayOfMonth.date(); i++){
        arrayDays.push({
            currentMonth: true, 
            date: firstDayofMonth.date(i), 
            today: firstDayofMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
        })
    }

    //dias depois que aparecem no calendario
    const remaining = 42 - arrayDays.length

    for(let i = lastDayOfMonth.date() + 1; i<=lastDayOfMonth.date() + remaining; i++){
        arrayDays.push({currentMonth: false , date: lastDayOfMonth.date(i)})
    }

    return arrayDays;

}

export const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]