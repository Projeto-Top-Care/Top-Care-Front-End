'use client'
import { useCallback } from "react";
import { useState } from "react"
import { useDropzone } from "react-dropzone";
import { PiPen } from "react-icons/pi";

interface IInputFile {
    rounded: string,
}

export default function InputFile({ rounded }: IInputFile) {
    const [file, setFile] = useState("");

    const onDrop = useCallback((files: any) => {
        const filePego = files[0];


        const reader: any = new FileReader();
        reader.onload = () => {
            setFile(reader.result);
        };
        reader.readAsDataURL(filePego);
    }, []);


    const dropzone = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg']
        }
    })
    if (file) return <HasFile file={file} rounded={rounded} dropzone={dropzone} />;

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
}
const HasFile = ({ file, rounded, dropzone }: IHasFile) => {
    return (
        <div className={`${rounded} relative flex flex-col items-end justify-end h-full w-full bg-branco border border-cinza`}>
            <img src={file} alt="" className={`w-full h-full object-cover ${rounded}`} />
            <div className="h-8 w-8 -bottom-3 -right-3 flex items-center justify-center bg-branco rounded-full absolute">
                <Input dropzone={dropzone} rounded={'rounded-full'} imagem={'./assets/lapis.svg'}/>
            </div>
        </div>
    )
}