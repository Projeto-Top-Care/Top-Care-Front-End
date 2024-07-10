'use client'
import { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import Calendario from '../Calendario/Calendario';

interface IInputData {
    dataSelecionada: React.Dispatch<React.SetStateAction<string>>
}

export default function InputData({dataSelecionada}: IInputData) {

    const [data, setData] = useState<Dayjs | string | undefined>();
    const [lastData, setLastData] = useState<Dayjs>()
    const [open, setOpen] = useState<boolean>(false)

    const dataToString = (dt: Dayjs): string => {
        return (`${(dt.date() < 10 ? "0" + dt.date() : dt.date())}/${(dt.month() + 1 < 10 ? "0" + (dt.month() + 1) : dt.month() + 1)}/${dt.year()}`)
    }

    useEffect(()=>{
        if (open) {
            document.body.style.overflowY = 'hidden';
        }else{
            document.body.style.overflowY = 'auto';
        }    
    },[open])

    useEffect(() => {
        if (typeof data !== 'string' && data !== undefined) {
            setLastData(data)
            dataSelecionada(dataToString(data))
        }
    }, [data])

    return (
        <div className={`w-full h-full flex flex-col items-center justify-center`}>
            <div className='w-full h-12 border text-xs lg:text-sm font-poppins border-cinza rounded-md flex flex-row justify-between px-3 items-center'>
                <p className={`${typeof data === "string" ? (data === undefined && lastData ? 'text-cinza-escuro' : 'text-cinza') : 'text-cinza-escuro'}`}>{typeof data === "string" || data === undefined ? (lastData && typeof data !== 'string' ? dataToString(lastData) : "Data*") : dataToString(data as Dayjs)}</p>
                <FaCalendarAlt color='#4F4F4F' onClick={() => setOpen(!open)} />
            </div>
            {open && (
                <div>
                    <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpen(false)}></div>
                    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}>
                        <Calendario dataParms={setData} openParms={setOpen}/>
                    </div>
                </div>
            )}
        </div>
    )
}
