'use client'
import { ChangeEventHandler, MouseEventHandler, useCallback } from "react";
import { useState } from "react"
import { useDropzone } from "react-dropzone";
import { FaRegTrashCan } from "react-icons/fa6";
import { PiPen } from "react-icons/pi";

interface IInputFile {
    rounded: string,
    fileGetted?: string
    canNotEdit?: boolean
    canExclude?: boolean
    imagens?: File[]
    setImagens?: React.Dispatch<React.SetStateAction<File[]>>
}

export default function InputFile({ rounded, fileGetted, imagens, setImagens, canNotEdit, canExclude }: IInputFile) {
    const [file, setFile] = useState(fileGetted);

    const onDrop = useCallback((files: any) => {
        const filePego = files[0];
        
        if( imagens && setImagens) {
            const newImages = imagens
            imagens.push(filePego)
            setImagens(newImages)
        }


        const reader: any = new FileReader();
        reader.onload = () => {
            setFile(reader.result);
        };
        reader.readAsDataURL(filePego);
    }, []);

    const removeFile = () => {
        setFile(undefined)
    }


    const dropzone = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg']
        }
    })
    if (file) return (
        <HasFile 
            file={file} 
            rounded={rounded} 
            dropzone={dropzone} 
            canNotEdit={canNotEdit} 
            canExclude={canExclude}
            excludeFile={removeFile}
        />
    )

    return <Input dropzone={dropzone} rounded={rounded} />

}
interface IInput {
    dropzone: any,
    rounded: string,
    imagem?: string
}
const Input = ({ dropzone, rounded, imagem }: IInput) => {
    const { getRootProps, getInputProps, isDragActive } = dropzone;
    return (
        <div {...getRootProps()} className={`border border-cinza ${rounded} h-full w-full bg-branco flex justify-center items-center ${isDragActive ? 'border-primaria' : 'border-black'}`}>
            <img src={imagem ? imagem : './assets/galeria.svg'} alt="" className="w-[40%]" />
            <input {...getInputProps()} className="hidden" />
        </div>
    )
}
interface IHasFile {
    file: any,
    rounded: string,
    dropzone: any
    canNotEdit?: boolean
    canExclude?: boolean
    excludeFile?: MouseEventHandler<HTMLDivElement>
}
const HasFile = ({ file, rounded, dropzone, canNotEdit, canExclude, excludeFile }: IHasFile) => {
    return (
        <div className={`${rounded} relative flex flex-col items-end justify-end h-full w-full bg-branco border border-cinza`}>
            <img src={file} alt="" className={`w-full h-full object-cover ${rounded}`} />
            <div className={`${canNotEdit ? "!hidden" : "!flex"} h-8 w-8 -bottom-3 -right-3 items-center justify-center bg-branco rounded-full absolute`}>
                <Input dropzone={dropzone} rounded={'rounded-full'} imagem={'./assets/lapis.svg'} />
            </div>
            <div onClick={excludeFile} className={`${canExclude ? "!flex" : "!hidden"} h-8 w-8 -top-3 -right-3 items-center border border-cinza justify-center bg-branco rounded-full absolute`}>
                <FaRegTrashCan color="red" size={13} className='cursor-pointer' />
            </div>
        </div>
    )
}