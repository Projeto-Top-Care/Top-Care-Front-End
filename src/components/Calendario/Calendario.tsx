    'use client'
    import dayjs, { Dayjs } from 'dayjs';
    import React, { useEffect, useState } from 'react'
    import { generateDate, months } from './generateDate'
    import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
    import CardLegenda from './CardLegenda';

    interface ICalendario{
        dataParms: React.Dispatch<React.SetStateAction<Dayjs | string | undefined>>,
        openParms: React.Dispatch<React.SetStateAction<boolean>>
    }

    function Calendario({dataParms, openParms}: ICalendario) {
        const days = ["D", "S", "T", "Q", "Q", "S", "S"];
        const currentDate = dayjs()
        const [today, setToday] = useState(currentDate)
        const [data, setData] = useState<Dayjs | string>();
        const [open, setOpen] = useState<boolean>(true)
        
        useEffect(() => {
            dataParms(data);
        }, [data])

        useEffect(() => {
            openParms(open)
        }, [open])
        
        const setarData = (date: Dayjs) =>{
            if(date.toDate().toDateString() == currentDate.toDate().toDateString() || date > currentDate){
                setData(date)
                setOpen(false)
            }else{
                setData("")
                setOpen(true)
            }
        }

        return (
            <div className='lg:w-[30rem] w-[17rem] border rounded-lg select-none flex flex-col items-center bg-branco'>
                <div className='flex items-center justify-between w-[70%] mt-6'>
                    <h1 className='font-poppins lg:text-2xl text-base'>{months[today.month()]} de {today.year()}</h1>
                    <div className='flex gap-5'>
                        <FaChevronLeft onClick={()=> setToday(today.month(today.month() - 1))} className="cursor-pointer"/>
                        <FaChevronRight onClick={()=> setToday(today.month(today.month() + 1))} className="cursor-pointer"/>
                    </div>
                </div>
                <div className='lg:w-96 w-52 my-6'>
                    <div className='grid grid-cols-7 lg:h-14 h-10'>
                        {days.map((day, index)=>{
                            return(
                                <div key={index} className="lg:h-10 lg:w-10 w-6 h-6 flex items-center justify-center cursor-pointer">
                                    <h1 className='font-poppins text-xs lg:text-base'>{day}</h1>
                                </div>
                            )
                        })}
                    </div>
                    <div className='grid grid-cols-7 gap-4'>
                        {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
                            return (
                                <div onClick={()=>setarData(date)} 
                                key={index} className={`lg:h-10 lg:w-10 w-6 h-6 flex items-center justify-center ${today ? 'bg-secundaria': date > currentDate ? (currentMonth ? "bg-terciaria" :'text-slate-300'): 'text-slate-300'} cursor-pointer hover:bg-secundaria `}>
                                    <h1 className={`font-poppins text-xs lg:text-base`}>{date.date()}</h1>  
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    export default Calendario