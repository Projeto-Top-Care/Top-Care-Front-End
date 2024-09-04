'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Filial } from '@/types/filiais';
import filiais from '@/banco/filiais.json';

interface PropsFilial {
    filial: Filial 
}

export default function EditarFilial({ filial: filiais }: PropsFilial) {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [filial, setFilial] = useState<Filial | undefined>(undefined);

    useEffect(() => {
        if (id) {
            const filialEncontrada = filiais.find(filial => filial.id === parseInt(id));
            setFilial(filiais);
        }
    }, [id]);

    if (!filial) {
        return <div>Carregando informações da filial...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{filial.nome}</h1>
            <p><p>Cidade:</p> {filial.cidade}</p>
            <p><p>Estado:</p> {filial.estado}</p>
            <p><p>Funcionamento:</p> {filial.funcionamentoDias} das {filial.funcionamentoHora}</p>
            <p><p>Endereço:</p> {filial.rua}, {filial.bairro} - {filial.cep}</p>
            <p><p>Contato:</p> {filial.contato} - {filial.numero}</p>
            <img src={filial.src} alt={`Imagem de ${filial.nome}`} className="mt-4 rounded shadow-md" />
        </div>
    );
}
