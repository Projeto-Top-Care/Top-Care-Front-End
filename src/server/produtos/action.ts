
import produtos from '@/banco/produtos.json'
import { Produto } from '@/types/produto'
import { useState } from 'react'

export async function buscarProduto(id: number): Promise<Produto> {
    return new Promise((resolve, reject) => {
        let produtoEncontrado: Produto | undefined;

        produtos.forEach((produto) => {
            if (produto.id === id) {
                produtoEncontrado = produto;
            }
        });
        if (produtoEncontrado) {
            resolve(produtoEncontrado);
            return(produtoEncontrado)
        } else {
            reject(new Error('Produto não encontrado'));
        }
    });
}