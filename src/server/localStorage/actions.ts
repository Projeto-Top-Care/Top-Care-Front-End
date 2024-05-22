'use client'

import { useEffect, useState } from "react"

export const getLocalStorageArray = (pesquisa: string) =>{
    let itens: string[] = []
    const items = window.localStorage.getItem(`${pesquisa}`)!
    itens = (items != null ? JSON.parse(items) : [])
    return itens 
}
export const getLocalStorageItem = (pesquisa: string) =>{
    let item: string | null
    item = localStorage.getItem(pesquisa);
    return item!
}