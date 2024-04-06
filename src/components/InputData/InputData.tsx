'use client'
import { Dayjs } from 'dayjs';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import Calendario from '../Calendario/Calendario';

export default function InputData() {

    const [data, setData] = useState<Dayjs | string>();
    const [lastData, setLastData] = useState<Dayjs>() 
    const [open, setOpen] = useState<boolean>(false)

    const selectRef: MutableRefObject<any> = useRef(null);

    const dataToString = (dt: Dayjs): string =>{
        return (`${dt.date().toString()}/${dt.month().toString()}/${dt.year().toString()}`)
    }

    useEffect(()=>{
        if(typeof data !== 'string' && data !== undefined){
            setLastData(data)
        }
    },[data])

    useEffect(() => {
        function handleClickOutside(e : MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setOpen(false);
                console.log(selectRef.current)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectRef]);

    const calendario = () => {
        return (
            <div className='absolute w-[35%] flex items-center justify-center'>
                <Calendario dataParms={setData}/>
            </div>
        )
    }

    return (
        <div className='w-full' ref={selectRef}>
            <div className='w-full h-10 border border-cinza-escuro rounded-lg flex flex-row justify-between px-4 items-center'>
                <p className={`${typeof data === "string" ? (data === undefined && lastData ? 'text-cinza-escuro' :'text-cinza') : 'text-cinza-escuro'}`}>{typeof data === "string" || data === undefined  ? (lastData && typeof data !== 'string' ? dataToString(lastData) : "dd/mm/aaaa") : dataToString(data as Dayjs)}</p>
                <FaCalendarAlt color='#4F4F4F' onClick={() => setOpen(!open)} />
            </div>
            <div className='w-full h-screen fixed'>
                {open && (
                    calendario()
                )}
            </div>
        </div>
    )
}
