'use client'
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react'
import { generateDate, months } from './generateDate'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import CardLegenda from './CardLegenda';

interface ICalendario{
    dataParms: React.Dispatch<React.SetStateAction<string | Dayjs | undefined>>,
}

function Calendario({dataParms}: ICalendario) {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const currentDate = dayjs()
    const [today, setToday] = useState(currentDate)
    const [data, setData] = useState<Dayjs | string>();
    
    useEffect(() => {
        dataParms(data);
    }, [data])
    

    return (
        <div className='w-full border rounded-lg select-none flex flex-col items-center'>
            <div className='w-full flex justify-between px-3 mt-2'>
                <h1 className='font-poppins text-2xl'>{months[today.month()]} de {today.year()}</h1>
                <div className='flex gap-5'>
                    <FaChevronLeft onClick={()=> setToday(today.month(today.month() - 1))} className="cursor-pointer"/>
                    <FaChevronRight onClick={()=> setToday(today.month(today.month() + 1))} className="cursor-pointer"/>
                </div>
            </div>
            <div className='w-96'>
                <div className='grid grid-cols-7 h-14'>
                    {days.map((day, index)=>{
                        return(
                            <div key={index} className="flex items-center justify-center cursor-pointer">
                                <h1 className='font-poppins'>{day}</h1>
                            </div>
                        )
                    })}
                </div>
                <div className='grid grid-cols-7 gap-4'>
                    {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
                        return (
                            <div onClick={()=>{
                                setData(date.toDate().toDateString() == currentDate.toDate().toDateString() || date > currentDate ?  date : "Indisponível" )
                            }} 
                            key={index} className={`h-10 w-10 flex items-center justify-center ${today? 'bg-secundaria': currentMonth ? "bg-terciaria" : 'text-slate-300'} cursor-pointer`}>
                                <h1 className={`font-poppins`}>{date.date()}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='w-full my-4 flex justify-around'>
                <CardLegenda cor='secundaria' descricao='Dia atual' />
                <CardLegenda cor='primaria' descricao='Dia indisponível' />
                <CardLegenda cor='terciaria' descricao='Dia disponível' />
            </div>
        </div>
    )
}

export default Calendario