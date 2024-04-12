'use client'
import { useCallback } from "react";
import { useState } from "react"
import { useDropzone } from "react-dropzone";

interface IInputFile {
    rounded: string,
}

export default function InputFile({rounded}:IInputFile) {
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
    if (file) return <HasFile file={file} rounded={rounded}/>;

    return <Input dropzone={dropzone} rounded={rounded} />

}
interface IInput {
    dropzone: any,
    rounded: string,
}
const Input = ({ dropzone, rounded }: IInput) => {
    const { getRootProps, getInputProps, isDragActive } = dropzone;
    return (
        <div {...getRootProps()} className={`border border-black ${rounded} h-full w-full bg-branco flex justify-center items-center ${isDragActive ? 'border-primaria' : 'border-black'}`}>
            <img src="./assets/galeria.svg" alt="" className="w-[40%]"/>
            <input {...getInputProps()} className="hidden" />
        </div>
    )
}
interface IHasFile {
    file: any,
    rounded: string,
}
const HasFile = ({ file, rounded }: IHasFile) => {
    return (
        <div className={`${rounded} h-full w-full bg-branco`}>
            <img src={file} alt="" className={`w-full h-full ${rounded}`}/>
        </div>
    )
}